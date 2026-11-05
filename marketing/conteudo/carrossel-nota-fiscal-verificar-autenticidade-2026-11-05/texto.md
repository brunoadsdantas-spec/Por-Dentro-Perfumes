# Carrossel — Nota fiscal do perfume: como confirmar se é de verdade (2026-11-05)

Gerado pela rotina automática `/carrossel-diario`. Tipo: carrossel texto puro (8 slides).
Ângulo: verificação pós-entrega do documento (chave de acesso / QR code / consulta na Sefaz)
+ custo-benefício + Mercado Livre. O leitor aprende que ter uma nota fiscal na caixa não
garante que ela é válida, e que existe uma consulta gratuita e oficial pra confirmar isso
em menos de um minuto.

## Passo 1 — Sequência de capa

Pasta mais recente em `marketing/conteudo/` é `carrossel-lote-perfume-antes-de-comprar-2026-11-04`,
capa **branca** (`class="slide bg-white"` no slide 1 do `carrossel.html` dela). Não existe
pasta em `marketing/publicados/` mais recente que essa (a mais recente publicada ainda é
`carrossel-perfume-importado-x-nacional-2026-09-09`, de 09/09; a fila de `conteudo/` segue
parada desde setembro esperando revisão humana). Seguindo a regra de alternância em relação
à última capa gerada, a capa de hoje é **preta**.

## Passo 0 — Trava de frescor

Lida `marketing/conteudo/_temas-cobertos.md` inteira antes de pesquisar, todas as linhas,
inclusive as marcadas `[descartado]`. O arquivo já cobre, de forma exaustiva: leitura de
anúncio (variação, patrocinado, avaliações falsas, pergunta e resposta, reputação, loja
oficial, caixa amassada, rótulo ANVISA, nome parecido/flanker), decisão de comprar sem nota
fiscal nenhuma (`carrossel-perfume-sem-nota-fiscal`, 24/09), perícia física pós-chegada
(código de barras x código de lote entre caixa e frasco, celofane, vidro, líquido, evolução
do cheiro — `carrossel-perfume-original-ou-falso`, 13/09) e verificação a distância do código
de lote antes de pagar, com ferramenta online (`carrossel-lote-perfume-antes-de-comprar`,
04/11). Nenhuma linha trata de verificar se a PRÓPRIA nota fiscal que chegou na caixa é um
documento real no sistema da Receita/Sefaz, e não um papel impresso sem validade.

Buscas feitas: dúvidas comuns comprar perfume Mercado Livre reclamações 2026; nota fiscal
eletrônica chave de acesso QR code como verificar autenticidade produto; perfume batch code
vs validade shelf life how long after opening; limite de compra internacional alfândega
perfume trazer do exterior declaração.

## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| Verificar se a nota fiscal que chegou na caixa é um documento real, conferindo a chave de acesso (44 números) ou o QR code no site da Sefaz do estado emissor, de graça e em menos de um minuto | `carrossel-perfume-sem-nota-fiscal` (24/09, na fila) ensina a decidir se vale comprar SEM nota fiscal nenhuma (risco de receptação, desconto suspeito, nota como caminho pra garantia) | **APROVADO (escolhido)**: pergunta de controle responde sim — depois de ler a linha de 24/09, o leitor sabe que precisa pedir nota fiscal, mas não sabe que uma nota em papel pode não existir de verdade no sistema, nem que dá pra confirmar isso sozinho com a chave de acesso ou o QR code no portal oficial da Sefaz. É uma ação de verificação que a linha de 24/09 nunca ensina |
| IPI mais alto em perfume importado explica por que ele custa mais mesmo comprado dentro do Brasil, sem o comprador importar nada | `carrossel-perfume-importado-x-nacional` (09/09, no ar) e `carrossel-perfume-imposto-importacao` (17/10, na fila) | REPROVADO: mesma promessa de fundo ("perfume importado custa mais caro por causa de imposto/mecanismo tributário") já entregue de duas formas; coincidência de ângulo reprova igual a coincidência de tema |
| Símbolo de pote aberto (PAO) com número de meses, indicando prazo de uso depois de aberto o frasco | `carrossel-perfume-tem-validade` (16/09, agendado) já ensina que frasco lacrado dura 3 a 5 anos, sinais de perfume vencido e que lacrado dura mais que aberto | REPROVADO: mesma promessa ao leitor (quanto tempo o perfume dura, fechado x aberto, sinal de vencimento), o símbolo PAO é só um detalhe extra do mesmo conselho, não um tema novo |
| Perfume mais vendido no anúncio (mais pedidos/favoritos) não é sempre o melhor, é hype de busca x venda real | Nenhuma linha cobre isso hoje | APROVADO, não escolhido hoje: ângulo válido e sem sobreposição, reservado desde 06/10 e 07/10 sem ter sido escolhido ainda. O candidato da nota fiscal resolve uma dúvida de segurança mais concreta (prova de garantia) do que uma curiosidade de ranking de busca. Continua livre pra outra rodada |

Tema escolhido: **Nota fiscal do perfume: como confirmar se é de verdade, não só se existe**
Slug: `carrossel-nota-fiscal-verificar-autenticidade-2026-11-05`.

## Slide 1 — CAPA (preto)
Kicker: Verificação
Título: Nota fiscal do perfume também pode ser falsa
Subtítulo: Ter nota na caixa não é a mesma coisa que ter nota de verdade. Veja como confirmar antes de confiar nela.

## Slide 2 — O que é (branco)
Kicker: O que é
H2: A nota tem um código de 44 números só dela
Corpo: É a chave de acesso. Toda nota fiscal eletrônica emitida no Brasil recebe esse número único, que identifica o documento no sistema da Receita e da Sefaz do estado que autorizou a emissão.

## Slide 3 — Onde achar (preto)
Kicker: Onde achar
H2: O QR code da nota leva direto pra consulta
Corpo: No DANFE, o papel ou PDF que representa a nota, tem um QR code e, do lado, os 44 números escritos por extenso. Os dois levam pro mesmo documento.

## Slide 4 — Como conferir (branco)
Kicker: Como conferir
H2: O site da Sefaz confirma de graça em menos de um minuto
Corpo: Escaneia o QR code ou copia os 44 números no portal da Secretaria da Fazenda do estado emissor. A consulta é gratuita e mostra se o documento existe de verdade no sistema.

## Slide 5 — Sinal de alerta (preto)
Kicker: Sinal de alerta
H2: "Nota não localizada" é sinal de nota fria
Corpo: Se a consulta não acha o documento, ou mostra dados de uma empresa diferente da loja que vendeu, o papel que chegou na caixa não vale como comprovante real.

## Slide 6 — Por que importa (branco)
Kicker: Por que importa
H2: Sem nota de verdade, a garantia fica mais difícil de provar
Corpo: É a nota fiscal que sustenta o pedido de troca por defeito de fabricação dentro do prazo legal. Nota fria na mão é quase o mesmo que não ter nota nenhuma na hora de reclamar.

## Slide 7 — Vale lembrar (preto)
Kicker: Vale lembrar
H2: Ter nota não é a mesma coisa que ter nota de verdade
Corpo: O risco de comprar sem nota fiscal já é conhecido. O risco que passa batido é confiar numa nota que existe no papel, mas não existe no sistema. Os dois merecem atenção, não só o primeiro.

## Slide 8 — CTA FINAL (laranja)
Título: Um minuto de conferência evita uma dor de cabeça depois
Subtítulo: A Por Dentro Perfumes busca as melhores ofertas de perfume no Mercado Livre todo dia e manda pro grupo só o que vale.
Badge: Entra no grupo
Hint: Link na bio ↑

## Fontes consultadas (WebSearch, 2026-11-05)
- reclameaqui.com.br (múltiplas reclamações de perfume falsificado/com fragrância alterada
  comprado no Mercado Livre em 2026) — confirmou que falsificação continua sendo dúvida real
  de quem compra perfume online, reforçando o valor do ângulo de verificação.
- sindifisco-ms.org.br, cidesp.com.br, nfe.io, treeunfe.com.br — chave de acesso de 44
  dígitos, QR code da NFC-e/DANFE, consulta gratuita no portal da Sefaz do estado emissor
  (tema escolhido).
- checkfresh.com, skincarisma.com, tendance-parfums.com — símbolo PAO (pote aberto + número
  de meses) e prazo de validade de perfume fechado x aberto (candidato reprovado por coincidir
  com `carrossel-perfume-tem-validade`, 16/09).
- quantocustaviajar.com, nomadglobal.com, olhardigital.com.br — cota de US$ 1.000 pra compras
  internacionais e declaração na alfândega ao trazer item do exterior (pesquisa não gerou
  candidato por não se aplicar a compra dentro do Mercado Livre).
