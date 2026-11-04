# Carrossel — Código de lote: o check que dá pra fazer antes de comprar (2026-11-04)

Gerado pela rotina automática `/carrossel-diario`. Tipo: carrossel texto puro (8 slides).
Ângulo: leitura do anúncio / verificação pré-compra (antes de pagar, só com as fotos do
anúncio) + custo-benefício + Mercado Livre. O leitor aprende que existe um código de lote
diferente do código de barras, onde ele costuma ficar, como pedir foto dele ainda na fase
de anúncio, e como usar uma ferramenta online gratuita pra decifrar a data de fabricação
antes de pagar.

## Passo 1 — Sequência de capa

Pasta mais recente em `marketing/conteudo/` é `carrossel-perfume-extraviado-mercado-livre-2026-11-03`,
capa **preta** (`class="slide bg-black"` no slide 1 do `carrossel.html` dela). Não existe
pasta em `marketing/publicados/` mais recente que essa (a mais recente publicada ainda é
`carrossel-perfume-importado-x-nacional-2026-09-09`, de 09/09; a fila de `conteudo/` segue
parada desde setembro esperando revisão humana). Seguindo a regra de alternância em relação
à última capa gerada, a capa de hoje é **branca**.

## Passo 0 — Trava de frescor

Lida `marketing/conteudo/_temas-cobertos.md` inteira antes de pesquisar, todas as linhas,
inclusive as marcadas `[descartado]` de julho e setembro e as mais de 50 linhas de
setembro/outubro/novembro. O arquivo já cobre, de forma exaustiva: leitura de anúncio
(variação, patrocinado, avaliações falsas, pergunta e resposta, reputação, loja oficial,
caixa amassada, rótulo ANVISA, nota fiscal, nome parecido/flanker), perícia física
pós-chegada (código de barras impresso x colado e lote batendo entre caixa e frasco, celofane,
vidro, líquido, evolução do cheiro — `carrossel-perfume-original-ou-falso`, 13/09), logística/
pós-compra (atraso geral, atraso por transporte inflamável, atraso por dropshipping,
cancelamento pelo vendedor, extravio confirmado, quebrado/vazando, direito de arrependimento,
Compra Garantida, Envios Full x comum/Flex, imposto de importação), garantia (defeito de
fabricação/vício oculto, garantia estendida paga), categoria de produto (tester, usado,
descontinuado, home spray, nichado x grife, importado x nacional, contratipo, decant, EDT/EDP,
unissex, vegano/cruelty free, edição limitada), forma de pagamento/fidelidade (Pix x
parcelado, boleto, linha de crédito, cupom/cashback/Mercado Pontos, Meli+, frete grátis x
preço real, calendário de desconto, oferta relâmpago, pagar fora da plataforma) e uso/ocasião
(estação, treino, layering, presente, viagem, alergia na pele, kit da mesma linha). Buscas
via WebSearch voltaram pra uma lacuna real: nenhuma linha trata de verificação de
**autenticidade antes de comprar**, usando só as fotos do anúncio e uma ferramenta online de
leitura de código de lote. Tudo que existe sobre lote até hoje (`carrossel-perfume-original-
ou-falso`, 13/09) é checagem física com o frasco já em mãos, depois que a encomenda chegou.

Buscas feitas: como verificar lote de perfume código de barras site da marca original
autenticidade antes de comprar; perfume retido na alfândega Mercado Livre importação o que
fazer prazo; dúvidas comprar perfume Mercado Livre comprador primeira vez grau de fixação
classificação Anvisa.

## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| Checar o código de lote do perfume (diferente do código de barras) ANTES de comprar, pedindo foto dele na seção de perguntas do anúncio e decifrando a data de fabricação numa ferramenta online gratuita (CheckCosmetic/CheckFresh), de olho em código borrado, torto ou com adesivo por cima | `carrossel-perfume-original-ou-falso` (13/09, na fila) ensina a comparar o código de lote entre caixa e frasco, mas só com o produto já em mãos, depois que a encomenda chegou — perícia física, não verificação a distância. `carrossel-perguntas-respostas-anuncio-mercado-livre` (07/10, na fila) cita de passagem "pergunta lote e validade" como exemplo de pergunta, mas nunca explica o que é esse código, onde fica, nem que existe ferramenta pra decifrar a data de fabricação a partir dele | **APROVADO (escolhido)**: pergunta de controle responde sim — depois de ler os dois carrosséis cobertos, o leitor ainda não sabe que o código de lote é diferente do código de barras, onde ele costuma ficar gravado, que dá pra pedir foto dele ainda na fase de anúncio (antes de pagar, não depois de abrir a caixa) nem que um site gratuito lê esse código e devolve a data de fabricação. É um mecanismo inteiro de verificação a distância que nenhum dos dois ensina |
| Perfume retido na alfândega / processo de perdimento por abandono (Instrução Normativa RFB 2160/2023, prazo de 20 dias pra regularizar antes da pena de perdimento) | `carrossel-perfume-imposto-importacao` (17/10, na fila) já ensina o prazo de 20 dias pra pagar o imposto nos Correios depois que a encomenda chega, dentro do programa Remessa Conforme | REPROVADO: mesma mecânica de fundo (prazo de 20 dias pra regularizar uma encomenda internacional parada, sob risco de perdê-la) já ensinada em 17/10, só muda o nome jurídico do problema (perdimento x imposto não pago). Coincidência de ângulo reprova igual a coincidência de tema |
| "Baixa fixação" não é defeito de fabricação, é variação de pele/clima/hábito | `carrossel-perfume-cheiro-diferente-cada-pele` (06/10, na fila) já ensina que o resultado de fixação e projeção varia por oleosidade da pele, pH, temperatura, hormônio e hábito, e fecha dizendo explicitamente "nada disso é defeito do perfume, é química do corpo" | REPROVADO: mesma lição central (queixa de fixação fraca não é defeito, é química individual) já ensinada em 06/10, só muda o rótulo jurídico que o leitor usaria pra reclamar (garantia x defeito) |
| Perfume mais vendido no Mercado Livre não é sempre o melhor (hype de busca x venda real) | Nenhuma linha cobre isso. Candidato reservado desde `carrossel-perfume-cheiro-diferente-cada-pele` (06/10) e `carrossel-perguntas-respostas-anuncio-mercado-livre` (07/10), ainda não escolhido em nenhuma rodada | APROVADO, não escolhido hoje: ângulo válido e sem sobreposição, mas o candidato do lote resolve uma dúvida prática mais imediata (decisão de compra em andamento) do que uma curiosidade de mercado. Continua livre pra outra rodada |

Tema escolhido: **Código de lote: o check que dá pra fazer antes de comprar, sem o frasco
na mão**
Slug: `carrossel-lote-perfume-antes-de-comprar-2026-11-04`.

## Slide 1 — CAPA (branco)
Kicker: Antes de pagar
Título: Dá pra checar se é original sem ter o frasco na mão
Subtítulo: Tem um código escondido na embalagem que conta a data de fabricação. Veja onde achar e como ler antes de comprar.

## Slide 2 — O que é (preto)
Kicker: O que é
H2: Código de lote não é o código de barras
Corpo: O código de barras identifica o produto, igual em todo frasco daquele perfume. O código de lote é outro, gravado na base do frasco ou no fundo da caixa, e aponta de qual fabricação aquela unidade específica saiu.

## Slide 3 — Onde pedir (branco)
Kicker: Onde pedir
H2: Pede foto de perto na seção de perguntas do anúncio
Corpo: A foto de capa quase nunca mostra esse código. Antes de fechar a compra, pede pro vendedor uma foto próxima da base do frasco ou do fundo da caixa.

## Slide 4 — Como decodificar (preto)
Kicker: Como decodificar
H2: Um site gratuito lê o código pra você
Corpo: Ferramentas como CheckCosmetic e CheckFresh pegam o código de lote e devolvem a data aproximada de fabricação, sem custar nada e sem precisar ter o frasco em mãos.

## Slide 5 — O que comparar (branco)
Kicker: O que comparar
H2: Caixa e frasco precisam ter o mesmo código
Corpo: Marca autêntica grava o mesmo lote nos dois lugares. Código que só aparece numa foto da caixa, ou que muda de um pra outro, é sinal de embalagem trocada.

## Slide 6 — Sinal de alerta (preto)
Kicker: Sinal de alerta
H2: Código borrado, torto ou com adesivo por cima incomoda
Corpo: Gravação de fábrica sai nítida e no mesmo padrão da marca. Número mal impresso, fora do formato comum, ou escondido atrás de uma etiqueta colada pede atenção redobrada antes de comprar.

## Slide 7 — Vale lembrar (branco)
Kicker: Vale lembrar
H2: Data de fabricação não é a mesma coisa que validade
Corpo: O código confirma de qual lote o frasco saiu, não quanto tempo falta pro perfume vencer. Ele serve pra apontar inconsistência, não pra provar sozinho que o produto é original.

## Slide 8 — CTA FINAL (laranja)
Título: Checar antes de pagar é meio caminho pra não se arrepender
Subtítulo: A Por Dentro Perfumes busca as melhores ofertas de perfume no Mercado Livre todo dia e manda pro grupo só o que vale.
Badge: Entra no grupo
Hint: Link na bio ↑

## Fontes consultadas (WebSearch, 2026-11-04)
- buscape.com.br, nearstore.com, scento.com, belezanaweb.com.br, auditorioibirapuera.com.br —
  diferença entre código de barras e código de lote, onde o lote fica gravado no frasco/caixa,
  ferramentas de leitura (CheckCosmetic, CheckFresh), sinais de código falsificado/adulterado
  (tema escolhido).
- okai.com.br (Instrução Normativa RFB 2160/2023), migalhas.com.br, guelcos.com.br — prazo de
  20 dias e pena de perdimento por abandono em encomenda internacional retida (candidato
  reprovado por coincidir com o imposto de importação já coberto em 17/10).
- reclameaqui.com.br (múltiplas reclamações de "perfume sem fixação"), buscape.com.br — queixas
  reais de comprador sobre baixa fixação/projeção e resposta de loja de que isso não configura
  defeito por si só (candidato reprovado por coincidir com a química da pele já coberta em
  06/10).
