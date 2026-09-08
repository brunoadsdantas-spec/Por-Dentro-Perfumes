---
name: carrossel-diario
description: >
  Rotina diária não-interativa que pesquisa um tema de perfume adequado ao público,
  gera um carrossel completo (texto puro, 7-10 slides) seguindo o padrão visual da
  marca, renderiza os PNGs, escreve a legenda, evita repetir temas já cobertos, salva
  tudo no repositório (commit + push) e avisa o usuário que está pronto pra revisão em
  /aprovar-post. Não posta nada sozinha — aprovação humana continua manual. Feita pra
  rodar via agente de nuvem agendado (schedule/cron), sem checkpoints de aprovação
  no meio do fluxo. Use quando o gatilho for a rotina agendada diária, não em uso manual
  direto pelo usuário (pra isso, usar /carrossel).
---

# /carrossel-diario — Carrossel diário automático (sem pausas)

Versão não-interativa de `/carrossel`, feita pra rodar sozinha uma vez por dia via
agente de nuvem agendado. Produz exatamente UM carrossel por execução, sempre do tipo
"texto puro" (ver `/carrossel`), e para depois de commitar/pushar + avisar — nunca posta.

## Depende de

- `.claude/skills/carrossel/SKILL.md` — regras de identidade visual, tipografia, paleta,
  layouts, estrutura de pastas, padrão de legenda. **Não duplicar essas regras aqui** —
  reler esse arquivo antes de montar o HTML.
- `identidade/design-guide.md`, `_memoria/empresa.md`, `_memoria/preferencias.md`,
  `_memoria/estrategia.md`
- `marketing/conteudo/_temas-cobertos.md` — histórico de temas, ler ANTES de pesquisar
- WebSearch — pesquisa de tema do dia
- Playwright — mesma dependência de `/carrossel` (ver "Setup do sandbox" no Passo 4)

## Diferenças em relação a /carrossel (o que muda)

| Passo em /carrossel | Aqui |
|---|---|
| Perguntar tipo de conteúdo (1/2/3) | Sempre tipo 1 (carrossel texto puro). Nunca 2 (foto IA) nem 3 |
| Passo 2 — CHECKPOINT esperar aprovação do texto | Removido. Segue direto pro Passo 4 |
| Passo 3 — gerar/aprovar foto IA | Pulado inteiramente (não se aplica ao tipo 1) |
| Passo 4 — "mostrar slide 1, 2 e CTA, esperar aprovação" | Removido. Renderiza tudo sem pausar |
| Passo 6 — perguntar sobre versão blog | Pulado (fora de escopo; workspace não tem blog) |
| — | Novo Passo 0: pesquisa de tema (abaixo) |
| — | Novo Passo 7: atualizar `_temas-cobertos.md` |
| — | Novo Passo 8: commit + push automático (sem perguntar mensagem) |
| — | Novo Passo 9: resumo final + notificação (vira o aviso pro usuário) |

## Workflow

### Passo 0 — Pesquisa de tema

1. Ler `marketing/conteudo/_temas-cobertos.md` inteiro.
2. Rodar 2-4 buscas via WebSearch, variando o ângulo, por exemplo:
   - "dúvidas comuns antes de comprar perfume online"
   - "como saber se perfume é original ou falsificado"
   - "perfume importado x nacional diferença vale a pena"
   - "contratipo perfume similar vale a pena"
   - "decant de perfume o que é riscos"
   - "perfume que dura mais tempo na pele lista"
   - "erros comuns comprando perfume no mercado livre"
   Ajustar as queries conforme o que já foi coberto (não repetir buscas de rodadas
   passadas sobre o mesmo ângulo).
3. Listar 3-5 candidatos a tema. Descartar qualquer um que coincida (tema OU ângulo)
   com uma linha de `_temas-cobertos.md` (ver "Regra de frescor" nesse arquivo).
4. Escolher UM tema. Preferir formato "lista/checklist" que renda 7-10 slides naturais
   (um conceito por slide), no ângulo custo-benefício + Mercado Livre, público jovem.
5. Definir o slug da pasta: `carrossel-<tema-em-kebab-case>-<YYYY-MM-DD>`.

### Passo 1 — Contexto

Ler `_memoria/preferencias.md`, `_memoria/empresa.md`, `identidade/design-guide.md`.
Confirmar a última capa publicada (pasta mais recente em `marketing/conteudo/`) pra
alternar cor de capa conforme a regra de `/carrossel`.

### Passo 2 — Texto (sem pausa)

Escrever `texto.md` seguindo exatamente o padrão de `/carrossel` (Slide 1 capa com
kicker + título ≤10 palavras + subtítulo; slides internos com kicker/H2/corpo, 2 frases,
citando perfumes reais quando fizer sentido; slide final CTA na cor de destaque "Entra
no grupo →"). **Não incluir** slide de "achado do grupo com preço real" — a rotina
diária não tem acesso a dados de oferta ao vivo, e inventar preço seria desonesto.
Seguir a proibição de `_memoria/preferencias.md` (nunca usar "garimpar"/"garimpo").

### Passo 3 — (pulado, não se aplica — tipo 1 nunca usa foto IA)

### Passo 4 — HTML + render (sem pausa)

1. Criar `carrossel.html` com todos os slides, CSS inline, seguindo tipografia/paleta
   de `identidade/design-guide.md` e os layouts nomeados de `/carrossel`.
2. Criar `render.js` idêntico ao padrão já usado (ver qualquer pasta anterior em
   `marketing/conteudo/*/render.js` como referência).
3. **Setup do sandbox** (rodar sempre — barato se já estiver instalado):
   ```bash
   npm install playwright
   npx playwright install chromium
   ```
   Reaproveitar `node_modules` de uma pasta anterior via `NODE_PATH` se existir, mas não
   depender disso — o sandbox do agente de nuvem pode começar vazio a cada execução.
4. Rodar `node render.js` e conferir que `instagram/slide-01.png` até `slide-NN.png`
   foram gerados (contagem = número de slides do `texto.md`).

### Passo 5 — Legenda (sem pausa)

Escrever `legenda.md` no padrão fixo: hook → 1-2 frases de contexto → CTA de arrastar
com emoji → bloco de oferta fixo ("A Por Dentro Perfumes busca as melhores ofertas de
perfume no Mercado Livre todo santo dia. Você não procura nada, só aproveita. Entra no
grupo (link na bio).") → hashtags: núcleo fixo (#perfume #perfumes #perfumaria
#dicasdeperfume #mercadolivre #achadosdomercadolivre #perfumeimportado #cheirobom
#perfumesimportados #beleza #pordentroperfumes) + 1-2 hashtags específicas do tema.

### Passo 6 — Salvar e organizar

```
marketing/conteudo/carrossel-<tema>-<YYYY-MM-DD>/
  texto.md
  carrossel.html
  render.js
  instagram/slide-01.png … slide-NN.png
  legenda.md
```

### Passo 7 — Atualizar tracking de temas

Adicionar uma linha nova no TOPO da seção "Cobertos" de
`marketing/conteudo/_temas-cobertos.md` com data de hoje, slug, tema e ângulo usado.

### Passo 8 — Commit + push (automático, sem perguntar)

```bash
git add "marketing/conteudo/carrossel-<tema>-<data>" marketing/conteudo/_temas-cobertos.md
git commit -m "carrossel diario: <tema> (<data>)"
git push origin main
```

Se o push falhar por divergência: `git pull --rebase origin main` e tentar de novo uma
vez. Se falhar de novo, **não descartar o trabalho** — reportar a falha claramente no
Passo 9 (o resumo final também serve pra avisar erro, não só sucesso).

### Passo 9 — Resumo final + notificação

Terminar a execução com um resumo curto e claro, e usar a ferramenta de notificação
disponível pra tentar avisar o usuário (pode não chegar no celular se a sessão agendada
não herdar a conexão do Remote Control — nesse caso o resumo abaixo fica registrado no
histórico do agente mesmo assim):

```
Carrossel do dia pronto: "<tema>"
Pasta: marketing/conteudo/carrossel-<tema>-<data>/
Repositório: https://github.com/brunoadsdantas-spec/Por-Dentro-Perfumes.git
Pronto pra revisão. Depois de aprovar, rode /aprovar-post localmente pra publicar.
```

Se algo falhou (render, push), o resumo deve dizer isso explicitamente em vez de fingir
sucesso.

## Regras de execução não-interativa

- Nunca perguntar nada ao usuário. Se uma decisão for ambígua, escolher a opção mais
  segura/conservadora e registrar a escolha no `texto.md`.
- Sempre tipo "carrossel texto puro". Nunca gerar foto IA nessa rotina.
- A única aprovação humana do fluxo acontece DEPOIS, fora dessa skill, manualmente,
  via `/aprovar-post`. Essa skill nunca chama `/aprovar-post` nem posta em rede social.
- A rotina roda todo dia independente de dias anteriores terem sido revisados/postados
  ou não — carrosséis não revisados simplesmente se acumulam em `marketing/conteudo/`
  esperando o usuário.
- Se `_temas-cobertos.md` não existir por algum motivo, criar com o cabeçalho documentado
  e seguir mesmo assim (não travar a rotina por isso).
- Uma execução = um carrossel. Não gerar mais de um por rodada.
