---
name: aprovar-post
description: >
  Aprova e publica um post da fila — flipa o blog de draft pra published (se houver blog),
  copia os PNGs do carrossel pra pasta pública do site, faz commit e push (GitHub Pages
  publica), aguarda o deploy, e posta o carrossel no Instagram via Buffer. Use quando o
  usuário disser "aprovar post X", "publicar o post do tema Y", "/aprovar-post X", ou quando
  quiser disparar a publicação automática de um conteúdo já criado pela skill /publicar-tema.
  Aceita `--em <horário>` pra agendar em hora marcada em vez de cair na fila do Buffer.
---

# /aprovar-post — Pipeline de aprovação e publicação automática

Faz a ponte entre o conteúdo aprovado (blog + carrossel + legendas, criado por `/publicar-tema`)
e a publicação real no feed (site + Instagram + Facebook).

## Quando NÃO usar

- Conteúdo ainda não foi criado → use `/publicar-tema` primeiro
- Usuário ainda está revisando → não rodar até ele dizer "aprovado" / "pode postar"
- Site não está deployado / Meta API não configurada → seguir setup abaixo

## Nota — conteúdo gerado pela rotina diária

Conteúdo em `marketing/conteudo/` pode ter sido criado remotamente pela rotina agendada
`/carrossel-diario` (agente de nuvem, roda 1x/dia, faz commit + push direto no GitHub).
Se estiver revisando localmente, rode `git pull` antes de procurar a pasta do slug —
senão o carrossel pode existir no GitHub mas ainda não no seu clone local.

## Pré-requisitos (uma vez só)

- `.env` na raiz com:
  - `BUFFER_API_KEY` — API key do Buffer
  - `BUFFER_CHANNEL_ID` — ID do canal do Instagram dentro do Buffer
  - `SITE_URL` — precisa apontar pra pasta onde o site é **realmente servido**,
    não pra raiz do Pages. Nesse repositório o GitHub Pages publica a partir da
    raiz e o site mora em `/site`, então termina em `/site`:
    `https://brunoadsdantas-spec.github.io/Por-Dentro-Perfumes/site`.
    Errar isso faz o Buffer receber 404 na imagem e o post falhar calado, na hora
    agendada, sem ninguém por perto. Conferir sempre no Passo 6.
- Alguma forma de hospedar as imagens publicamente (GitHub Pages é o padrão
  desse workspace)
- Conta Instagram Business conectada ao Buffer
- Script `scripts/postar-instagram.js` (já criado — ver `scripts/README.md`)

Se algo disso faltar: parar e apontar pro guia `marketing/automacao-buffer-setup.md`.
(Existe um caminho alternativo via Meta Graph API direto, documentado em
`marketing/automacao-meta-setup.md` — só relevante se a empresa tiver CNPJ
verificado no Meta Business.)

Esse workspace não tem blog — se `site/blog/` não existir, pular os passos
1-3 e 6 (blog) e ir direto pro Passo 4 (copiar imagens) usando o slug da
pasta de `marketing/conteudo/<slug>-<data>/`.

## Argumentos

`/aprovar-post <slug> [--em <horário>]`

- `<slug>` — nome da pasta do carrossel em `marketing/conteudo/`, **sem o sufixo de data**.
  Ex: `/aprovar-post carrossel-contratipo-vale-a-pena`
- `--em <horário>` — opcional. Agenda em hora marcada, no horário de Brasília.
  Sem ele, o post entra na fila do Buffer e sai no próximo horário configurado lá.

Formatos aceitos em `--em`:

| O usuário escreve | Vira |
|---|---|
| `--em 20h` ou `--em 20:00` | hoje às 20:00 se ainda não passou, senão amanhã |
| `--em amanhã 20h` | amanhã às 20:00 |
| `--em 2026-09-11T20:00` | exatamente isso |

Sempre **converter pra data completa e confirmar no Passo 2**, escrita por extenso
("sexta, 11/09, às 20h"). Nunca agendar a partir de um horário ambíguo sem mostrar
a data resolvida — errar o dia é o tipo de falha que só aparece quando não sai.

Se o usuário não passou slug, listar as pastas de `marketing/conteudo/` com PNGs
prontos e perguntar qual.

### Se pedirem recomendação de horário

Dizer com clareza que não há acesso ao Instagram Insights da conta. Só recomendar
com base em pesquisa, e deixar isso explícito em vez de apresentar como análise dos
dados do usuário. Referência de mercado (set/2026, nicho beleza/perfumaria, público
jovem): **carrossel de dica rende mais às 20h**; Reels no almoço (12h-13h); terça a
quinta rendem mais que segunda e sexta.

## Workflow

### Passo 1 — Localizar arquivos

- Blog: `site/.../blog/<slug>.md` — **esse workspace não tem blog**, pular
- Carrossel: procurar `marketing/conteudo/<slug>-*` (a pasta tem sufixo de data)
- Se não achar lá, procurar em `marketing/publicados/<slug>-*`. Achou aí, o post
  **já foi ao ar**: parar e perguntar se é repost mesmo, em vez de agendar de novo
- Validar que existem PNGs em `<pasta-carrossel>/instagram/slide-XX.png` (2 a 10)
- Validar que existe `legenda.md`

`legenda-linkedin.md` é **opcional** — nenhum carrossel desse workspace tem. Se não
existir, pular o Passo 9 (LinkedIn) sem tratar como erro.

Se faltar `legenda.md` ou os PNGs, parar e relatar.

### Passo 2 — Mostrar resumo + pedir confirmação final

Mostrar pro usuário:
- Quantos slides do carrossel
- Primeiras 200 chars da legenda
- URL pública das imagens
- **Quando vai sair**: a data resolvida por extenso ("sexta, 11/09, às 20h") ou
  "no próximo horário da fila do Buffer", se não veio `--em`

Perguntar: **"Confirma publicação? (sim/não)"**. Só seguir se ele disser sim.

### Passo 3 — Flipar draft pra false

Editar o frontmatter do blog: `draft: true` → `draft: false`.

### Passo 4 — Copiar PNGs pra pasta pública do site

- Origem: `marketing/conteudo/<slug>-<data>/instagram/slide-*.png`
- Destino: `site/img/posts/<slug>/slide-*.png`
- Criar pasta de destino se não existir
- Sobrescrever se já existir (caso seja re-publicação)

### Passo 5 — Commit + push

```bash
git add site/img/posts/<slug>/
git commit -m "publicar: <título do carrossel>"
git push origin main
```

(Se o workspace tiver blog, incluir também o `.md` do post no `git add`.)

Esperar push terminar com sucesso.

### Passo 6 — Aguardar deploy

Deploy automático (Netlify/Vercel) leva ~1-2 min. Validar que o post está no ar:

```bash
curl -sf -o /dev/null -w "%{http_code}" "$SITE_URL/blog/$slug/"
```

O GitHub Pages leva ~1-2 min. Conferir **todos** os slides, não só o primeiro:
basta um 404 no meio pro Buffer recusar o carrossel inteiro.

```bash
for f in <pasta-carrossel>/instagram/slide-*.png; do
  n=$(basename "$f")
  printf "%s: %s\n" "$n" \
    "$(curl -s -o /dev/null -w '%{http_code}' "$SITE_URL/img/posts/$slug/$n")"
done
```

Todos precisam dar **200**. Se algum der 404, na maioria das vezes é o `SITE_URL`
apontando pro nível errado (ver Pré-requisitos), não o deploy atrasado.

Pra esperar o Pages construir sem ficar em loop, usar a repetição do próprio curl —
o `-f` é o que faz o 404 contar como erro e disparar nova tentativa:

```bash
curl -sf --retry 20 --retry-delay 15 --retry-all-errors -o /dev/null \
  "$SITE_URL/img/posts/$slug/slide-01.png"
```

### Passo 7 — Postar no Instagram

```bash
# Fila do Buffer (sai no próximo horário configurado lá)
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<slug>-<data>

# Hora marcada (horário de Brasília)
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<slug>-<data> \
  --em "2026-09-11T20:00"
```

Capturar o post id retornado. Se falhar, **não seguir pra Facebook** — relatar e parar.

### Passo 7b — Conferir que o Buffer realmente agendou

Não confiar só no "Enviado pro Buffer" do script. Consultar o post de volta e checar
que `status` é `scheduled` e que o `dueAt` bate com o horário combinado:

```graphql
query P($input: PostInput!) { post(input: $input) { id status dueAt } }
```

`POST https://api.buffer.com`, header `Authorization: Bearer $BUFFER_API_KEY`,
variáveis `{ "input": { "id": "<post id>" } }`.

Mostrar pro usuário o `dueAt` convertido pra horário de Brasília, e pedir que ele
abra o Buffer e confira a prévia do carrossel e da legenda — é a validação que só
uma pessoa consegue fazer, e dá pra editar ou cancelar por lá até a hora de sair.

### Passo 8 — Postar no Facebook

Ainda não configurado (só o Instagram foi automatizado até agora). Quando
precisar, é o mesmo padrão: criar canal do Facebook no Buffer, pegar o
`BUFFER_CHANNEL_ID` dele, e um script equivalente ao `postar-instagram.js`
apontando pra esse canal.

### Passo 9 — LinkedIn

**Pular esse passo se não existir `legenda-linkedin.md`** — é o caso de todos os
carrosséis desse workspace hoje. Não tratar a ausência como erro.

Quando existir: LinkedIn é manual (API de empresa precisa de aprovação demorada).
Mostrar pro usuário:

```
LinkedIn: cole esse texto manualmente em https://linkedin.com/in/<seu-perfil>:
<conteúdo de legenda-linkedin.md>
```

### Passo 9b — Marcar o status em _temas-cobertos.md

Atualizar a linha do carrossel em `marketing/conteudo/_temas-cobertos.md`:

- `[na fila]` → `[agendado]` quando o Passo 7b confirmar `scheduled`
- `[agendado]` → `[no ar <dd/mm>]` quando o usuário confirmar que o post saiu

**Ao marcar `[no ar]`, mover a pasta do carrossel:**

```bash
git mv marketing/conteudo/<slug>-<data> marketing/publicados/
```

`conteudo/` é a fila e `publicados/` é o histórico. Mover só quando o post saiu de
verdade, nunca ao agendar. Não mexer em `site/img/posts/<slug>/`: é de lá que o
Instagram carregou as imagens do post publicado.

Esse arquivo é a única fonte da verdade sobre o que já foi publicado — sem atualizar,
dá pra oferecer repostar conteúdo que já está no feed.

### Passo 10 — Resumo

Quando foi agendado (`--em`), o post **ainda não saiu** — dizer "agendado", nunca
"publicado". Mostrar:

```
✓ Carrossel agendado: <título>

Sai em:      sexta, 11/09, às 20h (Brasília)
Status:      scheduled (confirmado na API do Buffer)
Post ID:     <id>
Imagens:     <SITE_URL>/img/posts/<slug>/  (8 slides, todos 200)
LinkedIn:    sem legenda-linkedin.md, pulado
```

Fechar lembrando que dá pra conferir a prévia, editar ou cancelar no Buffer até a
hora de sair.

Sem `--em`, trocar "Sai em" por "no próximo horário da fila do Buffer".

## Tratamento de erro

- Push falhou: relata e para (se houver blog, restaura `draft: true` antes)
- Alguma imagem em 404 depois do deploy: **não postar**. Quase sempre é `SITE_URL`
  no nível errado, não deploy atrasado — conferir contra os Pré-requisitos
- Buffer recusou o post: mostrar a mensagem crua da API, que costuma dizer o campo
  exato. Se for erro de schema (enum inválido, campo inexistente), **introspectar o
  schema em vez de chutar**:
  `query { __type(name: "CreatePostInput") { inputFields { name type { name } } } }`
- Buffer aceitou mas o Passo 7b não voltou `scheduled`: relatar e pedir conferência
  manual no Buffer. Não afirmar que está agendado sem o status confirmar
- FB falhou mas Insta OK: relata, sugere tentar de novo só o FB depois

## Princípios

1. **Confirmação humana antes de qualquer coisa irreversível.** Nunca pular o passo 2.
2. **Idempotente onde possível.** Re-rodar com mesmo slug deve detectar publicação prévia (blog não-draft, PNGs já no public/) e perguntar se é pra re-postar ou só atualizar.
3. **Falha cedo, falha alto.** Qualquer pré-requisito faltando = abortar e explicar o que falta.
4. **Logar tudo.** Cada passo imprime o que está fazendo e o resultado.
