# MazyOS — Sistema operacional do negócio

Sua empresa roda em cima desse arquivo. Aqui ficam as regras de operação
do MazyOS — como o Claude lê o contexto, aprende com correções, mantém
tudo atualizado e cria skills novas conforme a operação evolui.

Esse arquivo é editável. Quando o `/instalar` rodar, ele complementa o
final dessa página com as regras específicas do seu negócio.

---

## Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

---

## Fluxo de trabalho

Antes de executar qualquer tarefa, verificar se existe skill relevante
em `.claude/skills/`. Se encontrar, seguir as instruções da skill. Se
não encontrar, executar a tarefa normalmente.

Ao concluir uma tarefa que não tinha skill mas parece repetível (o
usuário provavelmente vai pedir de novo no futuro), perguntar:

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

Não perguntar pra tarefas pontuais ou perguntas simples. Só quando o
padrão de repetição for claro.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex: "na
verdade o arquivo se chama X"). Só perguntar quando a informação tiver
valor duradouro.

---

## Manter contexto atualizado

Ao terminar uma tarefa que mudou algo relevante (cliente novo, skill
nova, mudança de foco, processo novo, ferramenta instalada, estrutura
alterada), perguntar:

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

Se sim, identificar o que atualizar:

- **Cliente, serviço, ferramenta, equipe** → `_memoria/empresa.md`
- **Mudança de prioridade ou foco** → `_memoria/estrategia.md`
- **Tom ou estilo** → `_memoria/preferencias.md`
- **Pasta, regra de organização, skill criada** → `CLAUDE.md`
- **Visual (cores, fontes, logo)** → `identidade/design-guide.md`

Mostrar o que vai mudar antes de salvar. Não reformatar o arquivo
inteiro, só adicionar ou editar a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto no contexto (escrever um email avulso, criar um post)
- Perguntas simples ou conversas sem ação
- Mudanças já salvas pelo bloco "Aprender com correções"

**Dica:** rode `/atualizar` pra uma varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou útil em qualquer:
   - Específica → `.claude/skills/nome-da-skill/SKILL.md` (local)
   - Universal → `~/.claude/skills/nome-da-skill/SKILL.md` (global)
3. Ler `_memoria/empresa.md` e `_memoria/preferencias.md` pra calibrar
   o conteúdo da skill ao contexto do negócio
4. Se a skill precisar de arquivos de apoio (templates, exemplos),
   criar dentro da pasta da skill
5. Seguir o fluxo da skill-creator nativa do Claude Code

---

# Por Dentro Perfumes — MazyOS

## O que é esse workspace

Operação da Por Dentro Perfumes (@pordentroperfumes): busca de ofertas de perfume no Mercado Livre e divulgação via programa de afiliados, principalmente pelo grupo de WhatsApp.

**Estrutura de pastas:**
- `_memoria/` — quem eu sou, como falo, o que tá em foco
- `identidade/` — cores, fontes, logo, padrão visual
- `marketing/` — conteúdo, campanhas (saída das skills)
- `saidas/` — análises, documentos pontuais
- `dados/` — arquivos a analisar (CSV, PDF, planilha)
- `scripts/` — utilitários (gerar imagem, postar, render)
- `site/` — página estática publicada via GitHub Pages; também hospeda publicamente as imagens dos carrosséis (`site/img/posts/<slug>/`) pro Buffer conseguir buscá-las
- `templates/` — modelos base (skills, documentos)

## Quem sou

Sou a Por Dentro Perfumes. Busco ofertas raras de perfume com ótimo custo-benefício no Mercado Livre e mando pronto pro grupo de WhatsApp — o cliente não perde tempo procurando.

## O que produzo

- Postagens diárias de ofertas de perfume no grupo de WhatsApp
- Carrosséis pra redes sociais
- Automação de captura de ofertas do Mercado Livre

## Minha audiência

Jovens adultos e adolescentes que gostam de perfume e compram no Mercado Livre — querem preço bom sem abrir mão da qualidade.

## Tom de voz

Direto, frases curtas, ritmo de bordão. Ex: "Perfume bom não custa caro. Só custa achar a oferta certa."

Evitar: linguagem desumanizada e genérica, clichê de anúncio.

## Posicionamento

A gente vasculha o Mercado Livre todo dia e manda pro grupo só o que vale — o cliente não procura nada, só aproveita.

## Regras do sistema

- Conteúdo novo salvar em `marketing/conteudo/<tipo>-<tema>-<data>/`
- Qualquer peça visual (carrossel, post) segue `identidade/design-guide.md`
- Divulgação é o gargalo #1 — priorizar automações e skills que atacam isso direto

## Ferramentas conectadas

- [ ] Mercado Livre (fonte das ofertas)
- [ ] WhatsApp (canal principal de divulgação)
- [x] Automação de carrosséis
- [x] GitHub + GitHub Pages — repositório próprio (`brunoadsdantas-spec/Por-Dentro-Perfumes`) que versiona o workspace e publica as imagens dos carrosséis numa URL pública
- [x] Instagram via Buffer — `.env` preenchido, canal conectado, `scripts/postar-instagram.js` pronto. Falta só o primeiro post real pra validar de ponta a ponta
- [x] Rotina `/carrossel-diario` — agente de nuvem agendado, roda 13h todo dia, pesquisa tema e gera um carrossel novo pra revisão humana (nunca posta sozinho)

*(Marcar conforme for instalando os MCPs)*
