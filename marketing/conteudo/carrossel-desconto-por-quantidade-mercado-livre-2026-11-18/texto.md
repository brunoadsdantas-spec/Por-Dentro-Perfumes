# Carrossel — Desconto por quantidade no Mercado Livre (2026-11-18)

Gerado pela rotina automática `/carrossel-diario`. Tipo: carrossel texto puro (8 slides).
Ângulo: campanha de desconto por quantidade (comprar 2+ unidades do MESMO anúncio sai
mais barato por unidade), mecânica nunca tratada como tema isolado até hoje, +
custo-benefício + Mercado Livre.

## Passo 1 — Sequência de capa

Pasta mais recente em `marketing/conteudo/` é `carrossel-primeiro-perfume-como-escolher-2026-11-17`,
capa **preta** (confirmado no `carrossel.html` dela, `<div class="slide bg-black">` no
slide 1). Nenhum carrossel agendado no Buffer com data confirmada que saia antes desse
(as únicas linhas `[agendado]` em `_temas-cobertos.md` são de setembro/2026, já no
passado). Seguindo a regra de alternância de `/carrossel` (escuro → próxima é claro), a
capa de hoje é **branca**.

## Passo 0 — Trava de frescor

Lida `marketing/conteudo/_temas-cobertos.md` inteira antes de pesquisar (125 linhas, de
julho a novembro de 2026, inclusive as `[descartado]`). Buscas via WebSearch: avaliações
com foto de comprador real no Mercado Livre como usar antes de comprar; se existe filtro
nativo pra ver só opiniões de 1 a 3 estrelas; dúvidas comuns de quem compra perfume
importado online; se existe o bloco "quem comprou isso também comprou" no anúncio do
Mercado Livre; desconto progressivo por quantidade ("compre 2") em anúncio de perfume.

## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| Campanha de desconto por quantidade: comprar 2 ou mais unidades do MESMO anúncio reduz o preço por unidade | `carrossel-kit-perfume-vale-a-pena` (20/09, combo de produtos DIFERENTES da mesma linha, perfume + hidratante/desodorante) e `carrossel-cupom-cashback-mercado-pontos-perfume` (14/10, cupom/cashback/fidelidade) | **APROVADO (escolhido)**: nenhuma linha anterior trata de desconto que nasce de aumentar a QUANTIDADE do mesmo produto no mesmo anúncio. Kit é sobre produtos diferentes empacotados juntos; cupom/cashback é benefício do programa de fidelidade, não da quantidade comprada. Confirmado como mecânica real na documentação de desenvolvedores do Mercado Livre (campanhas de desconto por quantidade, com `buy_quantity` e `discount_percentage`) |
| Fotos reais de comprador ("com foto") nas avaliações como prova do estado do produto, antes de confiar só na nota | `carrossel-avaliacoes-falsas-perfume-mercado-livre` (08/10, sinais de avaliação manipulada/comprada) | REPROVADO: mesma seção do anúncio (avaliações) e mesmo objetivo de leitura crítica antes de comprar. Quem já aprendeu a desconfiar de avaliação manipulada aprenderia pouco de genuinamente novo com "procure foto real junto da nota". Coincidência de ângulo demais pra arriscar hoje, fica pra outra rodada com mais distância |
| "Quem comprou isso também comprou" / produtos relacionados dentro do anúncio | nenhuma linha específica | REPROVADO: a pesquisa não confirmou esse recurso como visível pro comprador no Mercado Livre (só apareceu material de vendedor sobre título/busca, nada sobre bloco de recomendação). Decisão mais segura é não publicar afirmação sobre um recurso que não foi confirmado em fonte confiável |
| Perfume oil/roll-on vendido como se fosse a versão spray da mesma fragrância | `carrossel-home-spray-x-perfume-corpo` (11/10, categoria de produto escondida sob nome parecido) e `carrossel-nome-parecido-perfume-diferente` (01/10, variação de linha que ilude a busca) | REPROVADO: mesmo ângulo de "categoria/versão de produto escondida sob nome parecido no anúncio", já coberto duas vezes com casos semelhantes |

Tema escolhido: **Desconto por quantidade no Mercado Livre: comprar 2 do mesmo perfume
pode saír mais barato por unidade**.
Slug: `carrossel-desconto-por-quantidade-mercado-livre-2026-11-18`.

Nota sobre as fontes: o candidato escolhido é o único apoiado em fonte oficial (a
documentação de desenvolvedores do Mercado Livre descreve a campanha de desconto por
quantidade como recurso real de vendedor, com os campos `buy_quantity` e
`discount_percentage`). Os dois candidatos reprovados por falta de confirmação ("quem
comprou também comprou" e o filtro nativo de estrelas 1-3) só apareceram em material de
ferramenta de terceiros pra vendedor, nunca confirmados como recurso visível pro
comprador no site/app oficial — por isso a decisão mais conservadora foi não usá-los.

## Slide 1 — CAPA (branco)
Kicker: Mercado Livre
Título: 2 perfumes podem custar menos que o dobro
Subtítulo: Existe um desconto que só aparece quando você aumenta a quantidade no mesmo anúncio, e poucos compradores conferem isso antes de pagar.

## Slide 2 — O que é (preto)
Kicker: O que é
H2: Desconto que nasce da quantidade, não do cupom
Corpo: Alguns vendedores configuram um preço menor por unidade quando você compra 2 ou mais do mesmo anúncio. Não é promoção por tempo nem cupom: é regra fixa daquele produto específico.

## Slide 3 — Onde aparece (branco)
Kicker: Onde aparece
H2: Fica perto do botão de comprar, não escondido
Corpo: O preço por unidade muda sozinho quando você aumenta a quantidade no carrinho do anúncio. Se nada mudar ao somar uma unidade, esse anúncio não tem essa campanha.

## Slide 4 — Não é kit (preto)
Kicker: Não é kit
H2: Kit junta produtos. Isso multiplica o mesmo
Corpo: Kit de perfume combina o frasco com hidratante ou desodorante da mesma linha. Desconto por quantidade é o mesmo perfume duas ou mais vezes, saindo mais barato por unidade.

## Slide 5 — Quando vale (branco)
Kicker: Quando vale
H2: Serve pra dividir, repor ou adiantar presente
Corpo: Comprar 2 faz sentido pra dividir o pedido com um amigo, repor o frasco que já é seu antes de acabar, ou garantir o presente de alguém no mesmo pedido.

## Slide 6 — Antes de aumentar (preto)
Kicker: Antes de aumentar
H2: Só vale se os dois frascos forem ser usados
Corpo: Perfume lacrado dura de 3 a 5 anos, mas o segundo frasco parado no armário por anos anula o desconto que você pagou pra ganhar.

## Slide 7 — Confira a conta (branco, layout NÚMERO)
Kicker: Confira a conta
Numeral: 2X
Corpo: Soma o preço total com o desconto aplicado e divide pela quantidade. Só assim você sabe se saiu mais barato do que comprar 1 agora e 1 depois, em outro vendedor.

## Slide 8 — CTA FINAL (laranja)
Título: Perfume bom sai mais barato por aqui
Subtítulo: A Por Dentro Perfumes busca as melhores ofertas de perfume no Mercado Livre todo santo dia. Você não procura nada, só aproveita.
Badge: Entra no grupo
Hint: Link na bio ↑

## Fontes consultadas (WebSearch, 2026-11-18)
- Documentação de desenvolvedores do Mercado Livre sobre campanhas de desconto por
  quantidade (`campanhas-de-desconto-por-quantidade`), fonte oficial que sustenta o
  candidato escolhido.
- Buscas sobre avaliações com foto de comprador, filtro de estrelas e recomendação "quem
  comprou também comprou" usadas só pra investigar e descartar os outros candidatos (ver
  tabela acima) — nenhuma confirmada como recurso oficial visível pro comprador.
