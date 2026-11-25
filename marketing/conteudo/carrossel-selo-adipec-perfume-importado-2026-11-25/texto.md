# Carrossel — O selo que prova se o importador é sério (2026-11-25)

Gerado pela rotina automática `/carrossel-diario`. Tipo: carrossel texto puro (8 slides).
Ângulo: existe um selo de autenticidade específico para perfume importado (selo ADIPEC,
com app oficial de verificação), diferente dos três métodos já cobertos em linhas
anteriores (lote gravado no frasco, nota fiscal, perícia física pós-entrega).

## Passo 1 — Sequência de capa

**Correção feita no meio da execução.** No início da rotina, `git pull`/`git fetch`
falhavam com erro de infraestrutura (`credential service temporarily unavailable`,
503), e a pasta mais recente visível localmente era
`carrossel-frete-regiao-norte-nordeste-perfume-2026-11-23` (capa **preta**). Com base
só nisso, a capa de hoje foi gerada **branca** por alternância. Na hora do push, o
serviço voltou e o `git fetch` revelou uma pasta nova no remoto que não existia
localmente ainda: `carrossel-vale-presente-perfume-2026-11-24` (rodou ontem, capa
**branca**, confirmado em `<!-- SLIDE 1 — CAPA — branco -->`). Isso quebrava a regra
de nunca repetir cor de capa em sequência (branco → branco). Corrigido antes do commit
final: todas as cores de fundo do `carrossel.html` foram invertidas (capa passou a
**preta**, e a alternância interna dos slides seguiu junto), mantendo o CTA final
laranja como já era. Sequência real confirmada no repositório: 20/11 branco, 21/11
preto, 22/11 branco, 23/11 preto, 24/11 branco → hoje (25/11) **preto**.

## Passo 0 — Trava de frescor

Lida `marketing/conteudo/_temas-cobertos.md` inteira antes de pesquisar (131 linhas, de
julho a novembro de 2026, inclusive as `[descartado]`). Buscas via WebSearch: ajuste de
preço pós-Black Friday / garantia de menor preço no Mercado Livre; selo de autenticidade
e QR Code de fabricante em perfume; miniatura/travel size de perfume como categoria de
compra.

## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| Selo ADIPEC (selo de autenticidade dos importadores filiados, com app oficial de verificação por QR Code) | `carrossel-lote-perfume-antes-de-comprar` (04/11, código de lote gravado no frasco/caixa), `carrossel-nota-fiscal-verificar-autenticidade` (05/11, chave de acesso/DANFE/Sefaz), `carrossel-perfume-original-ou-falso` (13/09, perícia física pós-entrega: celofane, código de barras, lote, vidro, peso, líquido) | **APROVADO (escolhido)**: nenhuma das três linhas menciona ADIPEC, associação de importadores ou qualquer app de verificação. São quatro camadas diferentes de checagem (importação / fabricação / venda / perícia física) e o leitor sai sabendo de uma que as outras três nunca mencionam, incluindo a pegadinha de que a AUSÊNCIA do selo não prova falsificação |
| Ajuste de preço depois de comprar na Black Friday (garantia de menor preço, reembolso de diferença) | `carrossel-quando-perfume-fica-mais-barato` (26/09, calendário de preço/promoção) e `carrossel-preco-mudou-carrinho-direito-consumidor` (09/11, direito sobre o preço mostrado na TELA antes de pagar) | REPROVADO: a busca não confirmou nenhuma política oficial do Mercado Livre de reembolsar diferença de preço depois da compra concluída; só achei reclamações de usuários e nada de fonte oficial. Publicar um direito que não foi confirmado seria arriscar informação errada, e o ângulo de preço já está bem coberto pelas duas linhas acima |
| Miniatura/travel size de perfume como categoria própria de compra | `carrossel-tamanho-frasco-perfume` (12/09, descartado por decisão do Bruno, mesmo ângulo de preço por ml entre tamanhos de frasco) e `carrossel-desconto-por-quantidade-mercado-livre` (18/10, conta de preço por unidade) | REPROVADO: mesma promessa ao leitor do tema descartado em 12/09 (comparar tamanho de frasco pelo preço por ml), só troca "qual tamanho de frasco fechado" por "miniatura vs frasco cheio"; a reflexão central (preço por ml decide, não o preço total) já apareceu em várias linhas de custo-benefício |

Tema escolhido: **O selo que prova se o importador é sério**
Slug: `carrossel-selo-adipec-perfume-importado-2026-11-25`.

Nota sobre as fontes: ADIPEC (Associação dos Distribuidores e Importadores de Perfumes,
Cosméticos e Similares) confirmada em fonte oficial (adipec.com.br, página "Autenticidade
do Selo") e em listagem de app nas lojas oficiais (App Store, desenvolvedora Leonhard
KURZ Stiftung & Co. KG, fabricante do selo). A ressalva de que a ausência do selo não
prova falsificação (duty free, importador não filiado) apareceu em mais de uma fonte de
varejo e foi mantida como ressalva explícita no carrossel, evitando a leitura de que selo
= original e sem selo = falso.

## Slide 1 — CAPA (preto)
Kicker: Mercado Livre
Título: O selo que prova se o importador é sério
Subtítulo: Não é lote. Não é nota fiscal. Dá pra conferir pelo celular.

## Slide 2 — O que é o selo ADIPEC (branco)
Kicker: O que é o selo ADIPEC
H2: Holograma colado na caixa, feito pra provar importação legal
Corpo: ADIPEC é a associação dos importadores autorizados de perfume no Brasil. O selo dela vai na embalagem de quem é filiado e, nas versões mais novas, vem com QR Code pra conferir na hora.

## Slide 3 — Como conferir (preto)
Kicker: Como conferir
H2: Baixa o app Selo ADIPEC e aponta pro QR Code
Corpo: O aplicativo oficial lê o QR Code do selo novo e também reconhece as versões antigas. Sem QR Code, o site da ADIPEC tem formulário e e-mail pra checar o código manualmente.

## Slide 4 — O que o selo prova (branco)
Kicker: O que o selo prova
H2: Importador fiscalizado, não produto cem por cento garantido
Corpo: O selo mostra que quem trouxe aquele perfume pro Brasil é filiado e passou por fiscalização da associação. Isso reduz risco, mas não é prova sozinha de que o frasco é original.

## Slide 5 — A pegadinha (preto)
Kicker: A pegadinha
H2: Perfume sem selo não é sinônimo de falsificado
Corpo: Quem compra em duty free ou de importador não filiado nunca vai ter esse selo, mesmo com o perfume sendo original de fábrica. Ausência de selo pede mais atenção, não é prova de golpe.

## Slide 6 — Combine com outras checagens (branco)
Kicker: Combine com outras checagens
H2: Selo, lote e nota fiscal provam coisas diferentes
Corpo: O selo fala da importação. O lote, gravado no fundo do frasco, fala da fabricação. A nota fiscal fala da venda. Nenhum substitui o outro, juntos fecham o quadro.

## Slide 7 — Onde olhar no anúncio (preto)
Kicker: Onde olhar no anúncio
H2: Foto real da caixa responde isso antes da pergunta
Corpo: Anúncio sério costuma mostrar foto própria da caixa, selo incluso. Se não aparecer, pergunta direto pro vendedor antes de pagar: importador filiado à ADIPEC tem como provar isso.

## Slide 8 — CTA FINAL (laranja)
Título: A gente já confere isso antes de mandar pro grupo
Subtítulo: A Por Dentro Perfumes busca as melhores ofertas de perfume no Mercado Livre todo santo dia. Você não procura nada, só aproveita.
Badge: Entra no grupo
Hint: Link na bio ↑

## Fontes consultadas (WebSearch, 2026-11-25)
- adipec.com.br — site oficial da ADIPEC, página "Autenticidade do Selo" confirma a
  associação e a checagem de autenticidade.
- App Store (listagem do app "Selo ADIPEC") — confirma app oficial de Android/iOS,
  desenvolvido pela Leonhard KURZ Stiftung & Co. KG (fabricante do selo com holograma e
  QR Code), que lê o QR Code do selo novo e reconhece versões anteriores.
- belezanaweb.com.br e fontes de varejo/blogs de perfumaria — confirmam, com mais de uma
  fonte concordando, que (1) o selo sozinho não é garantia de originalidade e (2) perfume
  comprado em duty free ou de importador não filiado à ADIPEC pode ser original sem ter
  o selo. Usado só esse consenso, sem cravar detalhe que aparecia numa fonte só.
- Comentário de terceiro (Amazon, pergunta de cliente) mencionando ausência do selo em
  produto vendido e entregue por marketplace — tratado como relato isolado, não como
  prova de política de alguma plataforma, e não usado como fato no carrossel.
