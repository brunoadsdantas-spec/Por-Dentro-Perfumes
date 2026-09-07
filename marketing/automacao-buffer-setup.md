# Setup — Automação de postagem no Instagram via Buffer

Guia único, roda uma vez só. Depois disso, postar carrossel vira
`node scripts/postar-instagram.js <pasta>`.

Esse é o caminho escolhido pela Por Dentro Perfumes por não ter CNPJ — o
Buffer já é um app aprovado pelo Meta, então você só autoriza sua conta
(sem criar app próprio, sem Verificação de Negócios). O outro caminho
(Meta App direto) fica documentado em `automacao-meta-setup.md` caso um
dia vocês abram CNPJ e queiram migrar.

A API do Buffer também busca a imagem por URL pública (não aceita upload
de arquivo), então a Parte C abaixo (hospedar as imagens) é igual à do
outro caminho.

---

## Parte A — Conta Instagram Business

1. No app do Instagram: **Configurações → Conta → Mudar para conta profissional**
   → escolher "Criador" ou "Empresa".
2. Não precisa vincular a uma Página do Facebook pra isso funcionar — no
   Buffer isso hoje é opcional (só necessário se quiser localização/analytics
   avançado, que a gente não usa aqui).

## Parte B — Criar conta no Buffer e conectar o Instagram

1. Criar conta grátis em [buffer.com](https://buffer.com).
2. Dentro do Buffer, conectar o canal do Instagram (segue o fluxo de login
   deles — vai pedir pra autorizar via Instagram/Facebook, é normal).
3. Confirmar que o canal aparece na lista de "Channels" do Buffer.

## Parte C — Gerar a API key

1. Dentro do Buffer, ir em **Settings → API**.
2. **Create a new API key** (não precisa do fluxo OAuth completo — isso é
   só necessário pra apps que vão logar em conta de outras pessoas, não é
   o nosso caso).
3. Copiar a key gerada → vai virar `BUFFER_API_KEY` no `.env`.

## Parte D — Pegar o Channel ID do Instagram

Com a API key em mãos, rodar essa consulta (pode ser via `curl`, Postman, ou
o [Buffer API Explorer](https://developers.buffer.com) se tiver um):

```bash
curl https://api.buffer.com \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SUA_API_KEY" \
  -d '{"query":"query { account { organizations { id name } } }"}'
```

Pega o `id` da organização, depois:

```bash
curl https://api.buffer.com \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SUA_API_KEY" \
  -d '{"query":"query { channels(input: { organizationId: \"ID_DA_ORGANIZACAO\" }) { id name service } }"}'
```

Procura na resposta o canal com `service: "instagram"` — o `id` dele é o
`BUFFER_CHANNEL_ID` do `.env`.

## Parte E — Hospedar as imagens publicamente

Igual ao outro caminho — GitHub Pages no repositório do MazyOS:

1. Rodar `/salvar` (se ainda não tiver feito) pra criar o repositório
   remoto próprio no GitHub — **público**, pro GitHub Pages gratuito
   funcionar.
2. No GitHub: **Settings → Pages → Deploy from a branch → main → /root**
   (ou `/site`).
3. Publica em `https://<seu-usuario>.github.io/<repo>/` — isso é o
   `SITE_URL` do `.env`.
4. Antes de postar, copiar os PNGs do carrossel pra dentro dessa pasta
   servida publicamente (ex: `site/img/posts/<slug>/slide-01.png`),
   commitar, dar push, esperar ~1 min o Pages publicar.

## Parte F — Preencher o .env

Copiar `.env.example` pra `.env` na raiz e preencher:

```
BUFFER_API_KEY=...
BUFFER_CHANNEL_ID=...
SITE_URL=https://seuusuario.github.io/repo
```

`.env` já está no `.gitignore` — nunca vai pro repositório.

## Testar

```bash
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<pasta-do-carrossel>
```

O script cria o post na fila do Buffer (modo `addToQueue`, publica no
próximo horário disponível). Quer publicar imediatamente em vez de
agendar? Avisar que dá pra ajustar o script pra isso.

## Observações

- Free plan do Buffer: 1 API key, até 3.000 chamadas/mês — muito acima do
  que uma postagem diária consome.
- Carrossel aceita de 2 a 10 imagens (limite do próprio Instagram pra apps
  de terceiros).
- Diferente do Meta App direto, o token do Buffer não expira a cada 60
  dias — a conexão OAuth deles cuida disso.
