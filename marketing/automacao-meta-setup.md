# Setup — Automação de postagem no Instagram (Meta Graph API direto)

> **Caminho alternativo, não é o ativo agora.** A Por Dentro Perfumes não
> tem CNPJ, e esse caminho exige Verificação de Negócios no Meta (que pede
> documento de empresa) pra liberar a permissão `instagram_content_publish`.
> O caminho em uso hoje é `automacao-buffer-setup.md`. Esse guia fica
> registrado caso um dia vocês abram CNPJ (MEI já resolve) e queiram migrar
> pro Meta App direto — economiza a dependência de terceiro.

Guia único, roda uma vez só. Depois disso, postar carrossel vira `node scripts/postar-instagram.js <pasta>`.

A API do Instagram não aceita upload de arquivo do computador — ela busca a
imagem por uma URL pública. Então tem duas frentes: (1) liberar acesso via
Meta e (2) ter um lugar público pra hospedar os PNGs do carrossel.

---

## Parte A — Conta Instagram Business + Página do Facebook

1. No app do Instagram: **Configurações → Conta → Mudar para conta profissional**
   → escolher "Criador" ou "Empresa" (qualquer um serve pra API).
2. Ainda em Configurações → **Contas conectadas** → conectar a uma Página do
   Facebook. Se não tiver Página, o próprio fluxo oferece criar uma nova —
   pode ser bem simples, só serve de ponte técnica.

## Parte B — Criar o Meta App

1. Ir em [developers.facebook.com/apps](https://developers.facebook.com/apps) → **Criar app**.
2. Tipo de app: **Business**.
3. Depois de criado, em "Adicionar produtos ao app" → adicionar **Instagram**
   (Instagram Graph API).
4. Em **Funções do app → Funções** (ou "Roles"), adicionar você mesmo (o
   usuário dono da conta Instagram) como **Administrador**. Isso é o que
   permite postar sem precisar passar pela revisão longa do App Review —
   válido pra usar a própria conta, que é o caso aqui.

## Parte C — Gerar o token de acesso

1. Ir em [Graph API Explorer](https://developers.facebook.com/tools/explorer/).
2. Selecionar o App criado no passo B.
3. Em "Permissões", adicionar:
   - `instagram_basic`
   - `instagram_content_publish`
   - `pages_show_list`
   - `pages_read_engagement`
4. Gerar o token de usuário (User Access Token) — token curto, válido ~1h.
5. Trocar por token de longa duração (60 dias) rodando isso no navegador ou
   Postman (substituir `{app-id}`, `{app-secret}` — pegar em Configurações
   do App → Básico — e `{short-token}`):

   ```
   https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={short-token}
   ```

   A resposta traz o `access_token` de longa duração — esse é o
   `META_PAGE_ACCESS_TOKEN` do `.env`. Ele expira em 60 dias; quando expirar,
   repetir esse passo.

## Parte D — Pegar os IDs

Com o token de longa duração, no navegador ou Postman:

1. **Page ID:**
   ```
   https://graph.facebook.com/v21.0/me/accounts?access_token={token}
   ```
   Pegar o `id` da Página conectada ao Instagram → `META_PAGE_ID`.

2. **Instagram Business Account ID:**
   ```
   https://graph.facebook.com/v21.0/{page-id}?fields=instagram_business_account&access_token={token}
   ```
   O `id` dentro de `instagram_business_account` → `META_IG_USER_ID`.

## Parte E — Hospedar as imagens publicamente

O jeito mais simples sem contratar nada novo: **GitHub Pages** no próprio
repositório do MazyOS.

1. Rodar `/salvar` (se ainda não tiver feito) pra criar o repositório remoto
   próprio no GitHub — precisa ser **público** pro GitHub Pages gratuito
   funcionar sem plano pago.
2. No GitHub: **Settings → Pages → Deploy from a branch → main → /root** (ou
   `/site`, se preferir servir só a pasta do site).
3. Isso publica em `https://<seu-usuario>.github.io/<repo>/` — esse é o
   `SITE_URL` do `.env`.
4. Antes de postar um carrossel, copiar os PNGs pra dentro da pasta servida
   publicamente (ex: `site/img/posts/<slug>/slide-01.png`), commitar e dar
   push. Esperar ~1 min o GitHub Pages publicar antes de rodar o script de
   postagem.

## Parte F — Preencher o .env

Copiar `.env.example` pra `.env` na raiz e preencher os 4 valores.
`.env` já está no `.gitignore` — nunca vai pro repositório.

## Testar

```bash
node --env-file=.env scripts/postar-instagram.js marketing/conteudo/<pasta-do-carrossel>
```

O script espera encontrar `<pasta>/instagram/slide-*.png` e `<pasta>/legenda.md`.

## Observações

- Token expira em 60 dias — repetir a Parte C quando a API começar a devolver erro de token inválido.
- Limite da API: até 25 posts (de qualquer tipo) por conta Instagram a cada 24h.
- Carrossel aceita de 2 a 10 imagens.
