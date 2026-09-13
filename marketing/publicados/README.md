# marketing/publicados/ — carrosséis que já foram ao ar

Arquivo morto do que já saiu no Instagram. Mesma estrutura de pasta de
`marketing/conteudo/`, só que aqui nada mais é fila: tudo que está nessa pasta
já foi publicado.

## A regra

- `marketing/conteudo/` — a **fila**: criado, revisado, agendado. Ainda não saiu.
- `marketing/publicados/` — o **histórico**: já saiu no feed.

A pasta só muda de lugar quando o post realmente foi ao ar, nunca quando é agendado.
Quem move é a skill `/aprovar-post`, no passo de confirmação de publicação.

## O que NÃO se move junto

- `marketing/conteudo/_temas-cobertos.md` fica onde está. É a fonte da verdade das
  duas pastas, e a rotina `/carrossel-diario` lê esse caminho fixo.
- As imagens públicas em `site/img/posts/<slug>/` ficam onde estão. São elas que o
  Instagram carregou no post, e o link quebra se saírem do lugar.

## Pra que serve

- Saber num olhar o que já está no feed sem abrir o Instagram
- Reaproveitar copy, estrutura de slide e `render.js` de peça que já rodou
- Manter `conteudo/` mostrando só o que ainda precisa de ação
