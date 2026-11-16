# Carrossel — Vendedor sem nenhuma avaliação: dá pra confiar? (2026-11-16)

Gerado pela rotina automática `/carrossel-diario`. Tipo: carrossel texto puro (9 slides).
Ângulo: reputação cinza (ausência de histórico, menos de 10 vendas) é um problema
diferente de reputação vermelha (histórico ruim já registrado), e exige um critério de
decisão próprio em vez de ser tratada com o mesmo medo + leitura do anúncio +
custo-benefício + Mercado Livre.

## Passo 1 — Sequência de capa

Pasta mais recente em `marketing/conteudo/` é `carrossel-preco-suspeito-sinal-falsificacao-2026-11-15`,
capa **preta** (confirmado no `carrossel.html` dela, `<div class="slide bg-black">` no
slide 1). Nenhum carrossel agendado no Buffer com data confirmada que saia antes desse.
Seguindo a regra de alternância de `/carrossel` (escuro → próxima é claro), a capa de
hoje é **branca**.

## Passo 0 — Trava de frescor

Lida `marketing/conteudo/_temas-cobertos.md` inteira antes de pesquisar (98 linhas, de
julho a novembro de 2026, inclusive as `[descartado]`). Buscas via WebSearch: cancelar
pedido pago antes do envio pelo lado do comprador; recurso "compre junto"/combo
sugerido no checkout; distribuidor autorizado (texto do anúncio) x selo Loja Oficial;
notificação de queda de preço no app pra item favoritado; vendedor novo sem nenhuma
avaliação (cor cinza) é seguro comprar; como avaliar vendedor sem histórico nenhum.

## Trava de frescor (Passo 0)

| Candidato | Linha coberta mais próxima | Veredito |
|---|---|---|
| Comprador cancelar um pedido já pago, antes do vendedor despachar (sem abrir devolução formal) | `carrossel-venda-cancelada-vendedor-mercado-livre` (15/10, cancelamento pelo VENDEDOR por falta de estoque) e `carrossel-direito-de-arrependimento-perfume` (30/09, devolução depois da ENTREGA) | REPROVADO: mesma promessa ao leitor nas pontas (sair de uma compra que não quer mais), só com o momento mudado pra antes do envio; as fontes encontradas sobre o fluxo exato pelo lado do comprador eram só blogs secundários e divergiam entre si (inclusive um relato de usuário dizendo que o Mercado Livre não cancelou antes do envio), risco de publicar passo a passo não confirmado |
| "Compre junto" / sugestão automática de combo no checkout | nenhuma linha cobre | REPROVADO: a busca não confirmou que esse recurso existe no Mercado Livre nesse formato (resultados só traziam Meli+, cupons e assinatura); não dá pra montar carrossel sobre mecânica que não foi possível verificar |
| "Distribuidor autorizado" escrito no título do anúncio é alegação do vendedor, não verificada pela plataforma, diferente do selo Loja Oficial | `carrossel-loja-oficial-mercado-livre` (22/10, o que o selo Loja Oficial garante e o que não garante) e `carrossel-reputacao-vendedor-mercado-livre` (05/10, cor/medalha do vendedor) | REPROVADO: ângulo coincide com os dois anteriores (ambos já ensinam "nem toda alegação de confiança no anúncio é verificada pela plataforma, selo oficial é diferente de nota/medalha"); a fonte também não confirmou nenhum caso concreto de perfume pra sustentar o contraste sozinho |
| Notificação de queda de preço pro item favoritado no app | nenhuma linha cobre | REPROVADO: a busca não encontrou confirmação de que o app oferece esse alerta ao comprador (resultados eram sobre API pra integradores e monitoramento de concorrência pro lado do vendedor); informação não verificada o suficiente pra virar conteúdo |
| Vendedor com reputação cinza (sem nenhuma avaliação, menos de 10 vendas): como decidir comprar dele mesmo sem histórico pra julgar | `carrossel-reputacao-vendedor-mercado-livre` (05/10, ensina a ler a cor JÁ ATIVA verde/amarelo/vermelho e a medalha MercadoLíder) | **APROVADO (escolhido)**: a linha de 05/10 nunca fala em cinza nem em vendedor sem histórico algum, ela pressupõe que a reputação já existe pra ser lida. O cinza é um problema diferente: não tem nota pra interpretar, só ausência de dado, e tratar isso como "reputação ruim" (igual ao vermelho) é o erro que o carrossel de hoje corrige. Fontes confirmam que o termômetro só liga depois de ~10 vendas concluídas, que existe um programa (Decola) pra vendedor novo ativar reputação mais rápido, e que a página do vendedor mostra vendas dos últimos 60 dias mesmo sem cor nenhuma |

Tema escolhido: **Vendedor sem nenhuma avaliação: dá pra confiar?**
Slug: `carrossel-vendedor-sem-reputacao-ativa-2026-11-16`.

Nota sobre as fontes: não há artigo único e oficial do Mercado Livre sobre o tema, as
fontes são blogs de e-commerce (ecommercenapratica.com, nuvemshop, tray). O carrossel só
usa os pontos em que duas ou mais fontes concordavam (cinza = reputação inativa por
volume baixo de vendas, existência do Decola, sinais alternativos de confiança) e evita
cravar número de dias ou regra que só uma fonte promocional mencionava.

## Slide 1 — CAPA (branco)
Kicker: Mercado Livre
Título: Vendedor sem nenhuma avaliação: dá pra confiar?
Subtítulo: Cinza na reputação não é defeito. É falta de dado ainda.

## Slide 2 — O que o cinza significa (preto)
Kicker: O que o cinza significa
H2: Reputação cinza é ausência de nota, não nota ruim
Corpo: O termômetro de reputação do Mercado Livre só liga depois de um volume mínimo de vendas concluídas. Antes disso o vendedor aparece cinza, não vermelho: ainda não tem histórico suficiente pra julgar, bom ou mau.

## Slide 3 — Cinza não é vermelho (branco)
Kicker: Cinza não é vermelho
H2: Tratar os dois igual é o erro mais comum
Corpo: Vermelho é histórico ruim que já aconteceu. Cinza é histórico que ainda não existe. Fugir dos dois do mesmo jeito faz você perder vendedor novo e honesto só por excesso de cautela.

## Slide 4 — Onde olhar além da cor (preto)
Kicker: Onde olhar além da cor
H2: A página do vendedor fala mesmo sem termômetro
Corpo: Mesmo sem nota colorida, o perfil mostra vendas recentes, qualidade do atendimento e prazo médio de entrega. Esses números continuam valendo pra decidir.

## Slide 5 — Pode ser só o começo (branco)
Kicker: Pode ser só o começo
H2: Vendedor pode estar numa fase de arranque, não escondendo nada
Corpo: O Mercado Livre tem programas que deixam loja nova ativar reputação mais rápido, avaliando entrega no prazo e ausência de reclamação nos primeiros meses. Cinza às vezes é só o relógio que não rodou ainda.

## Slide 6 — O combo que pede atenção (preto)
Kicker: O combo que pede atenção
H2: Cinza junto com preço bem abaixo do mercado é o sinal real
Corpo: Vendedor novo sozinho não é alarme. Vendedor novo com preço fora da curva e descrição genérica, sim. Olhe os três juntos antes de decidir, nunca um isolado.

## Slide 7 — Teste pequeno primeiro (branco)
Kicker: Teste pequeno primeiro
H2: Começa com um item barato, não com o frasco mais caro
Corpo: Pedir um decant ou um perfume de valor menor antes de arriscar o frasco cheio caro é a forma mais simples de testar um vendedor sem nenhum histórico ainda.

## Slide 8 — Peça uma prova simples (preto)
Kicker: Peça uma prova simples
H2: Foto real do produto na mão, não só da imagem do catálogo
Corpo: Vendedor com histórico zerado que manda foto própria do frasco, com embalagem e lacre batendo, já reduz bastante o risco. Foto genérica repetida do catálogo não prova nada sobre esse vendedor específico.

## Slide 9 — CTA FINAL (laranja)
Título: A gente já testou o vendedor pra você
Subtítulo: A Por Dentro Perfumes busca as melhores ofertas de perfume no Mercado Livre todo santo dia. Você não procura nada, só aproveita.
Badge: Entra no grupo
Hint: Link na bio ↑

## Fontes consultadas (WebSearch, 2026-11-16)
- ecommercenapratica.com (reputação no Mercado Livre) — termômetro de reputação só fica
  ativo depois de um volume mínimo de vendas concluídas; antes disso o vendedor aparece
  cinza, reputação ainda não ativa.
- nuvemshop.com.br (Mercado Livre é confiável?) — pra avaliar um vendedor, observar a
  cor de reputação, ler avaliações de outros compradores e conferir o tempo de atuação
  na plataforma.
- tray.com.br (Mercado Livre é confiável?) — sinais de anúncio de risco somados (preço
  muito abaixo do mercado, descrição genérica, vendedor sem histórico), não um sinal
  isolado.
- Menção ao Programa Decola (Mercado Livre, pra vendedor novo ativar reputação mais
  rápido avaliando prazo de entrega e ausência de reclamação/cancelamento) apareceu em
  mais de uma fonte secundária; usada aqui só na ideia geral (existe caminho de
  ativação mais rápida pro vendedor novo), sem cravar prazo ou regra exata que não foi
  possível confirmar em fonte oficial.
- Página de informações do vendedor no Mercado Livre mostrando vendas recentes,
  qualidade de atendimento e prazo de entrega mesmo sem nota colorida, citada em fonte
  secundária (academia.nubimetrics.com).
