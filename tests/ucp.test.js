import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

describe('Digitel Site', () => {

  let driver;

  beforeAll( async() => {

    chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

    driver = await new webdriver.Builder()
             .withCapabilities(webdriver.Capabilities.chrome())
             .build();

  })

  it('Update Customer Profile (PRE-PROD)', async() => {

      jest.setTimeout(60000);

      driver.get('https://mydigitelpre13.tel-aviv.gov.il/Pages/ProfileUpdate.aspx');

      let elem = await driver.findElement(webdriver.By.name('UserName'));
      await elem.sendKeys('030614507');

      elem = await driver.findElement(webdriver.By.name('Password'));
      await elem.sendKeys('tyty1616');

      elem = await driver.findElement(webdriver.By.css('span[class=submit]'));
      await elem.click();
      // Page be re-loaded after click(),
      // so we need to await click() and re-enforce locators

      elem = await driver.findElement(webdriver.By.id('ctl00_ctl65_g_088dab0c_3a75_4d86_a248_4203f4a4c226_ctl00_txtEmail'));
      await elem.clear();
      await elem.sendKeys('oleg_kleyman@hotmail.com');

      elem = await driver.findElement(webdriver.By.id('ctl00_ctl65_g_088dab0c_3a75_4d86_a248_4203f4a4c226_ctl00_txtPhone'));
      await elem.clear();
      await elem.sendKeys('039210968');

      elem = await driver.findElement(webdriver.By.css('#ctl00_ctl65_g_088dab0c_3a75_4d86_a248_4203f4a4c226_ctl01_pnlButtons > a'));
      await elem.click();

      elem = await driver.findElement(webdriver.By.id('lblHeaderSuccessSpan'));
  })

  afterAll( async() => {

    await driver.quit();

  })

})
