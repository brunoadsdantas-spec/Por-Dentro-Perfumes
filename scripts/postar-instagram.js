// Publica um carrossel no Instagram via Buffer API.
//
// Uso:
//   node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<pasta-do-carrossel>
//   node --env-file=.env scripts/postar-instagram.js <pasta> --em "2026-09-11T20:00"
//
// Sem --em, entra na fila do Buffer (publica no proximo horario configurado la).
// Com --em, agenda pra data e hora exatas, no fuso de Brasilia (UTC-3).
//
// Espera encontrar dentro da pasta:
//   - instagram/slide-01.png, slide-02.png, ... (2 a 10 imagens)
//   - legenda.md (texto da legenda, incluindo hashtags)
//
// Pré-requisito: as imagens já precisam estar publicadas em SITE_URL
// (a API do Buffer busca a imagem por URL pública, não aceita upload de
// arquivo). Ver marketing/automacao-buffer-setup.md pra configurar tudo isso.
//
// Por padrão entra na fila do Buffer (addToQueue) — publica no próximo
// horário disponível, não na hora.

const fs = require("fs");
const path = require("path");

const BUFFER_API_URL = "https://api.buffer.com";

function envOrFail(name) {
  const value = process.env[name];
  if (!value) {
    console.error(`Faltando ${name} no .env. Ver marketing/automacao-buffer-setup.md.`);
    process.exit(1);
  }
  return value;
}

async function bufferGraphQL(apiKey, query, variables) {
  const response = await fetch(BUFFER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ query, variables }),
  });
  const data = await response.json();
  if (!response.ok || data.errors) {
    const message = data.errors ? JSON.stringify(data.errors) : `HTTP ${response.status}`;
    throw new Error(`Buffer API falhou: ${message}`);
  }
  return data.data;
}

// Brasil nao tem mais horario de verao desde 2019, entao Brasilia e UTC-3 o ano todo.
const OFFSET_BRASILIA_HORAS = 3;

function horarioBrasiliaParaISO(texto) {
  const m = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})$/.exec(texto.trim());
  if (!m) {
    throw new Error(`Horario invalido: "${texto}". Use o formato 2026-09-11T20:00`);
  }
  const [, ano, mes, dia, hora, min] = m.map(Number);
  const utc = Date.UTC(ano, mes - 1, dia, hora + OFFSET_BRASILIA_HORAS, min, 0);
  const data = new Date(utc);
  if (data.getTime() <= Date.now()) {
    throw new Error(`O horario ${texto} (Brasilia) ja passou. Escolha um horario futuro.`);
  }
  return data.toISOString();
}

function listSlides(pastaCarrossel) {
  const instagramDir = path.join(pastaCarrossel, "instagram");
  if (!fs.existsSync(instagramDir)) {
    throw new Error(`Pasta não encontrada: ${instagramDir}`);
  }
  const slides = fs
    .readdirSync(instagramDir)
    .filter((f) => /^slide-\d+\.png$/i.test(f))
    .sort();
  if (slides.length < 2 || slides.length > 10) {
    throw new Error(
      `Carrossel precisa ter entre 2 e 10 imagens, encontrei ${slides.length} em ${instagramDir}`
    );
  }
  return slides;
}

function lerLegenda(pastaCarrossel) {
  const legendaPath = path.join(pastaCarrossel, "legenda.md");
  if (!fs.existsSync(legendaPath)) {
    throw new Error(`Legenda não encontrada: ${legendaPath}`);
  }
  return fs.readFileSync(legendaPath, "utf-8").trim();
}

async function criarPost(apiKey, channelId, caption, imageUrls, dueAt) {
  const query = `
    mutation CreatePost($input: CreatePostInput!) {
      createPost(input: $input) {
        ... on PostActionSuccess {
          post {
            id
            text
          }
        }
        ... on MutationError {
          message
        }
      }
    }
  `;
  // Valores conferidos por introspeccao do schema do Buffer (set/2026):
  //   ShareMode      = addToQueue, customScheduled, shareNext, shareNow
  //   SchedulingType = automatic, notification
  // O tipo do post de Instagram vive em metadata.instagram.type, nao na raiz.
  const input = {
    text: caption,
    channelId,
    needsApproval: false,
    schedulingType: "automatic",
    assets: imageUrls.map((url) => ({ image: { url } })),
    metadata: {
      instagram: {
        type: "post",
        shouldShareToFeed: true,
      },
    },
  };
  if (dueAt) {
    input.mode = "customScheduled";
    input.dueAt = dueAt;
  } else {
    input.mode = "addToQueue";
  }
  const variables = { input };
  const data = await bufferGraphQL(apiKey, query, variables);
  const result = data.createPost;
  if (result.message) {
    throw new Error(`Buffer recusou o post: ${result.message}`);
  }
  return result.post;
}

async function main() {
  const args = process.argv.slice(2);
  const pastaCarrossel = args.find((a) => !a.startsWith("--"));
  if (!pastaCarrossel) {
    console.error("Uso: node scripts/postar-instagram.js <pasta-do-carrossel> [--em 2026-09-11T20:00]");
    process.exit(1);
  }
  const idxEm = args.indexOf("--em");
  const horarioBrasilia = idxEm !== -1 ? args[idxEm + 1] : null;
  if (idxEm !== -1 && !horarioBrasilia) {
    console.error("--em precisa de um horario. Ex: --em 2026-09-11T20:00");
    process.exit(1);
  }
  const dueAt = horarioBrasilia ? horarioBrasiliaParaISO(horarioBrasilia) : null;

  const apiKey = envOrFail("BUFFER_API_KEY");
  const channelId = envOrFail("BUFFER_CHANNEL_ID");
  const siteUrl = envOrFail("SITE_URL").replace(/\/$/, "");

  const slug = path.basename(pastaCarrossel).replace(/-\d{4}-\d{2}-\d{2}$/, "");
  const slides = listSlides(pastaCarrossel);
  const legenda = lerLegenda(pastaCarrossel);
  const imageUrls = slides.map((slide) => `${siteUrl}/img/posts/${slug}/${slide}`);

  console.log(`Carrossel: ${slides.length} slides, pasta "${pastaCarrossel}"`);
  imageUrls.forEach((url) => console.log(`  - ${url}`));

  if (dueAt) {
    console.log(`Agendando no Buffer para ${horarioBrasilia} (Brasília) = ${dueAt} UTC...`);
  } else {
    console.log("Criando post no Buffer (fila)...");
  }
  const post = await criarPost(apiKey, channelId, legenda, imageUrls, dueAt);

  console.log(`\nEnviado pro Buffer! Post ID: ${post.id}`);
  if (dueAt) {
    console.log(`Agendado para ${horarioBrasilia}, horário de Brasília.`);
  } else {
    console.log("Vai publicar no próximo horário da fila do Instagram configurado no Buffer.");
  }
}

main().catch((err) => {
  console.error(`\nErro: ${err.message}`);
  process.exit(1);
});
