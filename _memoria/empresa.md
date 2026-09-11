# Empresa

> Memória central do negócio. O Claude lê esse arquivo antes de cada resposta.

**Nome:** Por Dentro Perfumes (@pordentroperfumes)
**Negócio:** Divulgação de ofertas de perfumes via programa de afiliados
**O que faz:** Busca ofertas raras de perfumes com ótimo custo-benefício no Mercado Livre e divulga pro público
**Perfil:** Solopreneur / criador solo (marca pessoal com apoio de equipe pequena)
**Atende clientes:** Jovens adultos e adolescentes que gostam de perfumes e compram no Mercado Livre
**Equipe:** 3 pessoas — uma cuida da automação das ofertas, outra da produção e automação dos carrosséis, e o usuário cuida das skills do Claude e economia de tokens
**Ferramentas:** Mercado Livre (fonte das ofertas), grupo de WhatsApp (canal principal de divulgação), automação de carrosséis, Buffer (postagem automática do carrossel no Instagram — escolhido em vez de Meta App direto porque a empresa não tem CNPJ; setup em `marketing/automacao-buffer-setup.md`; validado de ponta a ponta em 10/09/2026, com agendamento em hora marcada via `scripts/postar-instagram.js --em`), GitHub Pages (hospeda as imagens dos carrosséis em URL pública, exigência do Buffer pra buscar a imagem)
**Principais entregas:** Postagens diárias de ofertas de perfume no grupo do WhatsApp, carrosséis pra redes sociais, carrossel diário automático gerado pela rotina `/carrossel-diario` (13h, revisão humana antes de postar)

## Contexto adicional
