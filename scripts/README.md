# scripts/ — utilitários do MazyOS

Scripts Node.js e Python que as skills chamam quando precisam fazer coisas fora do alcance da IA pura (gerar imagem, postar em rede social, renderizar HTML em PNG).

A pasta vem **vazia** — cada skill que precisa de script tem instrução de como criar (e geralmente é um único setup por integração que você vai ativar).

## Scripts comuns

Conforme você for ativando skills, isso aqui vai sendo populado. Lista do que cada skill espera encontrar:

| Skill | Script esperado | O que faz |
|---|---|---|
| `/carrossel` (com foto IA) | `gerar-imagem.js` | Gera foto realista via OpenAI API (DALL-E 3) |
| `/carrossel` (render PNG) | `render.js` (gerado por carrossel, fica na pasta do conteúdo) | Playwright tira screenshot 1080x1350 de cada slide |
| `/aprovar-post` | `postar-instagram.js` | Publica carrossel no Instagram via Buffer API (fila ou hora marcada com `--em`) |
| `/aprovar-post` | `postar-facebook.js` | (ainda não criado) Publicaria carrossel no Facebook via Buffer, mesmo padrão do Instagram |
| `/anuncio-google` | (nenhum — gera CSV direto) | — |
| `/relatorio-ads` | (lê CSV exportado das plataformas) | — |

## Pré-requisitos comuns

A maioria dos scripts depende de:

**Node.js 20+** instalado na máquina

**.env** na raiz do projeto com as chaves de API:
```bash
OPENAI_API_KEY=sk-...               # pra gerar-imagem.js
BUFFER_API_KEY=...                  # pra postar-instagram.js
BUFFER_CHANNEL_ID=...
SITE_URL=https://seuusuario.github.io/repo/site  # pasta onde o site e SERVIDO, não a raiz do Pages
```

Ver `marketing/automacao-buffer-setup.md` pro passo a passo completo de
como conseguir essas chaves.

**Playwright** (pra renderizar HTML em PNG):
```bash
npm install playwright
npx playwright install chromium
```

## Como o MazyOS lida com isso

Quando você roda uma skill que precisa de script ausente, o Claude vai:

1. Detectar que falta o script
2. Te perguntar se quer configurar agora
3. Te guiar no setup das chaves de API (Meta, OpenAI, etc.)
4. Criar o script já configurado
5. Rodar a skill

Você não precisa decorar nada. Roda a skill, segue o fluxo.

## postar-instagram.js

```bash
# Entra na fila do Buffer (sai no próximo horário configurado lá)
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<pasta-do-carrossel>

# Hora marcada, no horário de Brasília
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<pasta> --em "2026-09-11T20:00"
```

O `--em` converte de Brasília (UTC-3, sem horário de verão desde 2019) pra UTC e
recusa horário que já passou.

**Antes de rodar, as imagens precisam estar no ar.** O Buffer busca cada slide por
URL pública — ele não aceita upload de arquivo. Conferir todos, não só o primeiro:
basta um 404 no meio pro carrossel inteiro ser recusado.

O `SITE_URL` é a pegadinha mais fácil de cair: nesse repositório o GitHub Pages
publica a partir da **raiz**, e o site mora em `/site`. Se o `SITE_URL` parar na raiz
do Pages, todas as imagens dão 404 e o post falha calado, na hora agendada.

Valores da API conferidos por introspeção do schema (set/2026), caso o Buffer mude:

- `mode`: `addToQueue` (fila) ou `customScheduled` (hora marcada, junto com `dueAt`)
- `schedulingType`: só aceita `automatic` ou `notification`
- o tipo do post de Instagram vai em `metadata.instagram.type`, não na raiz do input
- `needsApproval` e `metadata.instagram.shouldShareToFeed` são obrigatórios

Se a API recusar por campo inválido, introspectar em vez de chutar:
`query { __type(name: "CreatePostInput") { inputFields { name type { name } } } }`
