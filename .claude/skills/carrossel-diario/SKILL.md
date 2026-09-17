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
agente de nuvem agendado. Produz no máximo UM carrossel por execução (zero, se nenhum
tema passar na trava de frescor do Passo 0), sempre do tipo
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

**Essa rotina roda sozinha, sem ninguém pra revisar antes do commit. O erro caro aqui não é
deixar de publicar: é publicar tema repetido.** Em 14/09/2026 ela gerou um carrossel que
repetia três dicas de um que já estava no ar desde 08/07. Os passos abaixo existem por causa
disso e não são opcionais.

1. Ler `marketing/conteudo/_temas-cobertos.md` inteiro, **todas as linhas**, inclusive as
   marcadas `[descartado]` (tema descartado continua queimado) e as de julho.

2. Rodar 2-4 buscas via WebSearch pra levantar dúvidas reais de quem compra perfume online.
   **Não existe lista fixa de queries aprovadas nessa skill.** Uma lista dessas existia aqui
   até 16/09/2026 e foi exatamente o que causou a duplicata: ela sugeria buscar "perfume que
   dura mais tempo na pele", ângulo que já estava coberto desde julho. Montar as queries a
   partir do que a seção "Cobertos" NÃO tem, nunca a partir de um exemplo escrito aqui.

3. Levantar 3-5 candidatos.

4. **Trava de frescor (obrigatória, com registro escrito).** Pra cada candidato, montar uma
   linha no formato:

   ```
   <candidato> | linha coberta mais próxima | por que é diferente
   ```

   Regras de eliminação, nessa ordem:

   - **Mesma promessa ao leitor = mesmo tema**, mesmo com título diferente. "Como fazer o
     perfume durar mais" e "jeito certo de passar perfume" prometem a mesma coisa. Pergunta
     de controle: *depois de ler os dois, o leitor aprendeu coisas diferentes?* Se a resposta
     for não, o tema está queimado.
   - Se a linha coberta mais próxima tratar do mesmo assunto, **abrir o `texto.md` dela** e
     comparar slide a slide. A descrição de uma linha é resumida e esconde sobreposição: a
     duplicata de 14/09 passou porque a linha de julho dizia apenas "Como e onde aplicar
     perfume pra durar mais", enquanto os slides repetiam hidratar a pele, pontos de calor e
     não esfregar o pulso. **Dois ou mais slides com o mesmo conselho reprovam o candidato.**
   - Coincidência de ângulo reprova igual a coincidência de tema.

5. **A regra do negócio é: produza todo dia, desde que não seja repetido.** As duas
   metades valem juntas, e nessa ordem de esforço:

   - **Gerar é o padrão.** Reprovar todos os candidatos só é aceitável depois de esgotar
     ângulos de verdade. Três candidatos parecidos entre si não são uma busca esgotada:
     voltar ao passo 2 com queries de outra família (momento da jornada, tipo de comprador,
     ocasião, faixa de preço, problema depois da compra) antes de concluir que o dia não
     tem tema. Um mesmo assunto rende carrosséis diferentes quando o momento muda: "erros
     no anúncio antes de comprar" e "perícia no frasco depois que chega" são temas
     distintos, e foi assim que o carrossel de 13/09 foi salvo em vez de descartado.
   - **Repetido não sai.** Esgotados os ângulos sem nenhum aprovado, a rotina termina sem
     gerar carrossel: não commitar pasta nenhuma, não forçar um tema "quase novo", não
     reciclar tema descartado. Ir direto pro Passo 9 e avisar que o dia não rendeu tema
     novo, listando os candidatos reprovados e contra qual linha cada um bateu. Um dia sem
     post custa muito menos que um repetido no feed.

6. Escolher UM tema entre os aprovados. Preferir formato "lista/checklist" que renda 7-10
   slides naturais (um conceito por slide), no ângulo custo-benefício + Mercado Livre,
   público jovem.

7. Guardar a tabela da trava de frescor: ela vai inteira pro cabeçalho do `texto.md` no
   Passo 2, incluindo os candidatos reprovados. É o que permite auditar depois se a checagem
   realmente aconteceu.

8. Definir o slug da pasta: `carrossel-<tema-em-kebab-case>-<YYYY-MM-DD>`.

### Passo 1 — Contexto

Ler `_memoria/preferencias.md`, `_memoria/empresa.md`, `identidade/design-guide.md`.
Confirmar a última capa que vai aparecer no feed antes dessa, pra alternar cor de capa
conforme a regra de `/carrossel`: pasta mais recente de `marketing/publicados/` (o que
já saiu) e, se houver carrossel agendado em `marketing/conteudo/`, a capa dele, que sai
antes dessa.

### Passo 2 — Texto (sem pausa)

Escrever `texto.md` seguindo exatamente o padrão de `/carrossel` (Slide 1 capa com
kicker + título ≤10 palavras + subtítulo; slides internos com kicker/H2/corpo, 2 frases,
citando perfumes reais quando fizer sentido; slide final CTA na cor de destaque "Entra
no grupo →"). **Não incluir** slide de "achado do grupo com preço real" — a rotina
diária não tem acesso a dados de oferta ao vivo, e inventar preço seria desonesto.
Seguir a proibição de `_memoria/preferencias.md` (nunca usar "garimpar"/"garimpo").

**Cabeçalho obrigatório do `texto.md`.** Antes do primeiro slide, transcrever a tabela da
trava de frescor do Passo 0 **inteira, com os candidatos reprovados**, nesse formato:

```
## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| <tema escolhido> | <slug + data> | APROVADO: <o que o leitor aprende aqui e não lá> |
| <reprovado> | <slug + data> | REPROVADO: <o que coincide> |
```

Sem essa tabela o carrossel não está pronto. Ela é o único rastro de que a checagem
aconteceu: se um tema repetido escapar de novo, é por ela que dá pra descobrir em que ponto
o raciocínio falhou.

### Passo 3 — (pulado, não se aplica — tipo 1 nunca usa foto IA)

### Regras de texto obrigatórias

- **Sem travessão (—) em texto publicado.** Nem slide, nem legenda. Reescrever a frase
  pra fluir sem ele (ponto final na maioria dos casos, às vezes vírgula ou dois-pontos).
  Ponto final devolve o ritmo de frase curta da marca.
- **Slide final sempre com o link na bio.** Badge preto `Entra no grupo` (sem seta) e,
  abaixo, `<div class="cta-hint">Link na bio ↑</div>`. O botão da imagem não é
  clicável, então sem essa linha ninguém acha o grupo. CSS do `.cta-hint` está em
  qualquer `carrossel.html` recente.

### Passo 4 — HTML + render (sem pausa)

1. Criar `carrossel.html` com todos os slides, CSS inline, seguindo tipografia/paleta
   de `identidade/design-guide.md` e os layouts nomeados de `/carrossel`.
   A fonte vem **do repositório, nunca do Google Fonts** — no `<head>`:
   ```html
   <link rel="stylesheet" href="../../../identidade/fonts/inter.css">
   ```
2. Criar `render.js` copiando de uma pasta recente em `marketing/conteudo/*/render.js`
   (ou `marketing/publicados/*/render.js`, é o mesmo arquivo).
   Ele espera `document.fonts.ready` e aborta se a Inter não carregou — não remover
   essas checagens.
3. **Setup do sandbox** (rodar sempre — barato se já estiver instalado):
   ```bash
   npm install playwright
   npx playwright install chromium
   ```
   Reaproveitar `node_modules` de uma pasta anterior via `NODE_PATH` se existir, mas não
   depender disso — o sandbox do agente de nuvem pode começar vazio a cada execução.
4. Rodar `node render.js` e conferir que `instagram/slide-01.png` até `slide-NN.png`
   foram gerados (contagem = número de slides do `texto.md`).
   Se o script abortar com "Inter nao carregou", **não commitar os PNGs** — resolver a
   fonte primeiro. Slide com fonte errada descaracteriza a marca e é pior que slide
   nenhum.

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

A linha **começa com o status de publicação**, e o de um carrossel recém-gerado é
sempre `[na fila]` — essa rotina nunca posta nada:

```
- [na fila] 2026-09-12 — carrossel-<tema> — <tema em uma frase> — <ângulo>
```

Quem muda pra `[agendado]` e depois `[no ar]` é a `/aprovar-post`. O campo existe
porque nada mais no repositório registra o que já foi publicado.

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

**Se o Passo 0 não aprovou nenhum tema**, o resumo é esse, e nenhuma pasta foi criada nem
commitada:

```
Sem carrossel hoje: nenhum tema passou na trava de frescor.
Candidatos reprovados:
- <candidato> — bate com <slug + data> (<o que coincide>)
- <candidato> — bate com <slug + data> (<o que coincide>)
Fila atual em marketing/conteudo/ segue disponível pra /aprovar-post.
```

Terminar assim é resultado válido da rotina, não falha. Não tentar de novo na mesma execução
com o critério afrouxado.

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
- Uma execução = no máximo um carrossel. Nunca mais de um por rodada, e zero quando a
  trava de frescor do Passo 0 reprovar todos os candidatos. Terminar sem carrossel é
  resultado válido: não relaxar o critério pra fechar a rodada com alguma coisa.
