const { chromium } = require('playwright');



const actorsCreator = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36 Edg/90.0.818.66',
  });
  const page = await context.newPage();

  // Espera hasta que la página esté completamente cargada
  await Promise.all([
    page.goto('https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx'),
    page.waitForLoadState('networkidle'),
  ]);

  // Obtén todos los enlaces de la página
  const links = await page.$$eval('a', (elements) => elements.map((el) => el.href));

  // Muestra todos los enlaces encontrados
  console.log('Enlaces encontrados:');
  links.forEach((link) => console.log(link));

  // Busca el enlace con el texto "iniciar sesión"
  const loginLink = await page.waitForSelector('a:has-text("iniciar sesión")', { state: 'visible', timeout: 60000 });

  // Hace clic en el enlace "iniciar sesión"
  await loginLink.click();

  // Espera hasta que la página después del clic esté completamente cargada
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.waitForLoadState('networkidle'),
  ]);

  // Encuentra el único campo de entrada en la página
  const input = await page.$('input');

  // Ingresa el texto en el campo de entrada
  await input.type('gaston.n7@outlook.com');

  // Encuentra el único botón de envío en la página
  const submitButton = await page.$('input[type="submit"]');

  // Hace clic en el botón de envío
  await submitButton.click();

  // Espera hasta que la página después del clic esté completamente cargada
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.waitForLoadState('networkidle'),
  ]);



  // PASSWORD:
  // Agrega una espera explícita antes de escribir en el campo de contraseña
await page.waitForTimeout(1000);

// Encuentra el único campo de contraseña en la página
const passwordInput = await page.$('input');


// Introduce la contraseña con un retraso entre cada pulsación de tecla
await passwordInput.type('taringa22', {delay:100});

  // Encuentra el único botón de envío en la página
  const submitButton2 = await page.$('input[type="submit"]');

  // Hace clic en el botón de envío
  await submitButton2.click();


  // Espera hasta que la página después del clic esté completamente cargada
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.waitForLoadState('networkidle'),
  ]);

  // MANTENER SESIÓN INICIADA
  const sesionInput = await page.$('input[type="button"]');
  await sesionInput.click();


  // INGRESO PREGUNTA:
  // Encuentra el textarea por su clase
  const textarea = await page.waitForSelector('.text-area.body-2');

  // Ingresa el texto en el textarea
  await textarea.type('quien es Maradona?');

  // Presiona la tecla Enter
  await textarea.press('Enter');

  // Espera hasta que la página después de presionar Enter esté completamente cargada
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.waitForLoadState('networkidle'),
  ]);


  // ESTÁ PARTE NO FUNCIONA: ENCUENTRA Y RETORNA RESPUESTA
  // Encuentra todos los div con la clase "ac-textBlock" dentro de los elementos cib-chat-turn
  const textBlocks = await page.$$eval('cib-chat-turn div.ac-textBlock');

  // Muestra los textos de los div encontrados
  return textBlocks

  // Cierra el navegador
  //await browser.close();
};

module.exports = {
  actorsCreator
};


/* 
div.ac-textBlock p

 */