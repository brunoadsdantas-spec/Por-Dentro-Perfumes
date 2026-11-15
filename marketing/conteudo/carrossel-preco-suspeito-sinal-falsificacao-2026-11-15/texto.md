# Carrossel — Preço bom demais: original ou sinal de alerta? (2026-11-15)

Gerado pela rotina automática `/carrossel-diario`. Tipo: carrossel texto puro (9 slides).
Ângulo: usar o preço do anúncio, sozinho, como primeiro filtro de autenticidade antes de
abrir o anúncio a fundo (leitura do anúncio pré-compra) + custo-benefício + Mercado Livre.

## Passo 1 — Sequência de capa

Pasta mais recente em `marketing/conteudo/` é `carrossel-perfume-brinde-anuncio-2026-11-14`,
capa **branca** (confirmado no `texto.md` dela, "Slide 1 — CAPA — branco"). Nenhum carrossel
agendado no Buffer que saia antes desse. Seguindo a regra de alternância de `/carrossel`
(claro → próxima é escuro), a capa de hoje é **preta**.

## Passo 0 — Trava de frescor

Lida `marketing/conteudo/_temas-cobertos.md` inteira antes de pesquisar (mais de 95 linhas,
de julho a novembro de 2026, inclusive as `[descartado]`). Buscas via WebSearch: dúvidas
comprar perfume Mercado Livre pré-venda/lançamento; Mercado Livre Global Selling compra
direto do exterior; lacre violado/relacrado sinal de falsificação; vendedor pede cancelar
pedido e comprar de novo; selo "compra internacional" preço já inclui imposto; estoque
esgota com pagamento pendente (boleto); selo "mais vendido"; Ponto Mercado Livre em loja
parceira; preço diferente app x site; desconto por quantidade (2+ unidades); perfume
reformulado por restrição de ingrediente (IFRA) cheira diferente do original; preço muito
baixo como sinal de falsificação.

## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| Selo "Compra Internacional" (loja oficial internacional vendendo direto pelo Mercado Livre, preço já com imposto embutido, sem cobrança posterior dos Correios) | `carrossel-dropshipping-entrega-internacional-mercado-livre` (23/10) e `carrossel-perfume-imposto-importacao` (17/10) | REPROVADO: esse exato candidato já foi levantado e reprovado na rotina de 14/11 ("Selo de loja internacional oficial vendendo perfume direto do exterior pelo Mercado Livre"), com o mesmo motivo — mesma promessa ao leitor (entender o que muda ao comprar perfume vindo de fora do Brasil), o selo é só uma variação de quem vende, não um ângulo novo sobre prazo ou custo |
| Perfume reformulado (marca mudou a fórmula por restrição de ingrediente, ex. IFRA) como tema isolado: por que um frasco genuíno pode cheirar diferente do que o comprador lembra, sem ser falso nem vencido | `carrossel-perfume-descontinuado-vale-mais-caro` (19/10) | REPROVADO: esse exato candidato já foi levantado e reprovado na própria trava de frescor de 19/10 ("Perfume reformulado como tema isolado, fora do contexto de descontinuação"), com o motivo de que reformulação sozinha não sustenta 7-10 slides de conselho prático; o slide 6 daquele carrossel ("O nome pode ser o mesmo, o cheiro não") já cobre a ideia central |
| Estoque esgota enquanto o pedido fica "aguardando pagamento" no boleto | `carrossel-pagar-boleto-mercado-livre` (25/10) | REPROVADO: a linha de 25/10 já ensina que "estoque não fica reservado pra quem ainda não pagou" e que "o pedido cancela se passar do vencimento" — é a mesma promessa, sem ângulo novo |
| Preço muito abaixo da referência de loja oficial como primeiro sinal de alerta de falsificação, ANTES de checar lacre, lote ou nota fiscal (ângulo pré-compra, triagem rápida por valor, distinto da perícia física pós-compra de `perfume-original-ou-falso` e da verificação por código de lote de `lote-perfume-antes-de-comprar`) | `carrossel-perfume-original-ou-falso` (13/09, perícia física pós-entrega: lacre, código de barras, lote, vidro, peso, líquido, evolução do cheiro) e `carrossel-lote-perfume-antes-de-comprar` (04/11, verificação pré-compra pelo código de lote/fabricação) | **APROVADO (escolhido)**: nenhuma linha anterior ensina a usar o VALOR do anúncio, isolado, como primeiro filtro antes de examinar qualquer detalhe físico do produto. `original-ou-falso` exige o produto já em mãos; `lote-perfume` exige abrir a conversa com o vendedor pedindo foto do código. Este tema atua um passo antes de ambos: decidir, só pelo preço comparado à referência da loja oficial, se vale a pena nem continuar olhando o anúncio. Buscas (Buscapé, Itatiaia) confirmam o heurístico como orientação real de consumo, sem exigir número de desconto cravado (fica em comparação qualitativa com a referência oficial, não em percentual fixo) |

Tema escolhido: **Preço bom demais: original ou sinal de alerta?**
Slug: `carrossel-preco-suspeito-sinal-falsificacao-2026-11-15`.

Nota sobre as fontes: não há fórmula oficial do Mercado Livre nem percentual padronizado
de desconto que prove falsificação. Buscapé e Itatiaia (fontes de consumo em português)
confirmam o heurístico de comparar com o preço de loja oficial/revendedora autorizada como
sinal de alerta, sem cravar número. O carrossel segue esse mesmo cuidado: nunca afirma "X%
de desconto = falso", só orienta a comparação qualitativa, coerente com a regra de nunca
cravar valor em conteúdo publicado.

## Slide 1 — CAPA (preto)
Kicker: Mercado Livre
Título: Preço bom demais: original ou alerta?
Subtítulo: Antes de abrir o anúncio a fundo, o valor já conta metade da história.

## Slide 2 — O primeiro filtro (branco)
Kicker: O primeiro filtro
H2: Preço vem antes de qualquer selo ou foto
Corpo: Antes de checar lacre, lote ou nota fiscal, dá pra desconfiar só pelo valor. Perfume original tem custo de fábrica, imposto e margem que não desaparecem só porque o anúncio está no Mercado Livre.

## Slide 3 — A régua (preto)
Kicker: A régua
H2: Compare com o preço de loja oficial, não com a média do feed
Corpo: Olha o valor praticado pela marca ou por uma revendedora autorizada do mesmo perfume. Essa referência mostra se o desconto do anúncio é promoção real ou maquiagem de preço.

## Slide 4 — Desconto real existe (branco)
Kicker: Desconto real existe
H2: Vendedor grande vende mais barato sem truque
Corpo: Loja que compra em volume, usa Mercado Envios Full ou quer bater meta do mês corta preço sem virar prejuízo. Isso é concorrência, não é sinal de problema.

## Slide 5 — Quando o preço já denuncia (preto)
Kicker: Quando o preço já denuncia
H2: Diferença grande demais da referência é o primeiro sinal
Corpo: Produção, frasco, caixa e imposto custam o mesmo pro vendedor sério e pro golpista. Um desconto bem maior que o do resto do mercado não cabe numa conta honesta.

## Slide 6 — Antes de desistir do anúncio (branco)
Kicker: Antes de desistir
H2: Preço baixo sozinho não é prova de nada
Corpo: Vendedor com nota alta, loja oficial ou fim de promoção também bate preço bom de verdade. O valor é o primeiro alerta, não o veredito final.

## Slide 7 — O que fazer com a suspeita (preto)
Kicker: O que fazer com a suspeita
H2: Olha o vendedor antes de fechar o pedido
Corpo: Preço fora da curva pede mais atenção na reputação de quem vende, não menos. Reclamação recente sobre esse mesmo anúncio pesa mais do que o valor isolado.

## Slide 8 — Depois de suspeitar (branco)
Kicker: Depois de suspeitar
H2: Lacre, lote e nota fiscal continuam valendo
Corpo: Preço bom demais é só o primeiro filtro. Se o anúncio passar dele, a checagem física quando o produto chegar continua sendo a palavra final entre original e falso.

## Slide 9 — CTA FINAL (laranja)
Título: A gente já confere o preço bom de verdade
Subtítulo: A Por Dentro Perfumes busca as melhores ofertas de perfume no Mercado Livre todo santo dia. Você não procura nada, só aproveita.
Badge: Entra no grupo
Hint: Link na bio ↑

## Fontes consultadas (WebSearch, 2026-11-15)
- buscape.com.br ("Como saber se o perfume é original? Veja as melhores dicas") — preço bem
  abaixo do praticado por lojas oficiais é sinal claro de alerta, porque perfume autêntico
  tem preço ligado ao custo de ingrediente e produção.
- itatiaia.com.br (coluna de consumo) — descontos muito acima do praticado pelo mercado
  merecem atenção; diferença extrema de preço pode indicar produto sem origem conhecida.
- promobit.com.br — reforça comprar de loja oficial/revendedora autorizada como referência
  de preço, e cita a venda de falsificado como crime (Lei 9.279/96, usado aqui só como
  contexto, não como foco do carrossel).
- Candidatos reprovados (compra internacional, reformulação isolada, estoque com boleto
  pendente) confirmados como já testados/cobertos ao reler as travas de frescor dos
  carrosséis de 14/11, 19/10 e 25/10 nas próprias pastas de `marketing/conteudo/`, não só
  pelo resumo de `_temas-cobertos.md`.
