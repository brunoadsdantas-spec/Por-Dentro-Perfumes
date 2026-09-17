const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// O executablePath fixo so existe no sandbox do agente de nuvem.
// Localmente o Playwright acha o Chromium sozinho.
const CLOUD_CHROMIUM = '/opt/pw-browsers/chromium';
const launchOpts = fs.existsSync(CLOUD_CHROMIUM)
  ? { executablePath: CLOUD_CHROMIUM }
  : {};

(async () => {
  const browser = await chromium.launch(launchOpts);
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const htmlPath = path.join(__dirname, 'carrossel.html');
  await page.goto('file://' + htmlPath.split('\\').join('/'));

  // Sem isso o screenshot congela a fonte de fallback (Helvetica) no lugar da Inter.
  await page.evaluate(() => document.fonts.ready);
  const interOk = await page.evaluate(() => document.fonts.check('900 82px Inter'));
  if (!interOk) throw new Error('Inter nao carregou — abortando pra nao gerar slide com fonte errada.');

  const outDir = path.join(__dirname, 'instagram');
  fs.mkdirSync(outDir, { recursive: true });

  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const n = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({ path: path.join(outDir, `slide-${n}.png`) });
  }

  await browser.close();
  console.log(`Renderizados ${slides.length} slides em instagram/`);
})();
