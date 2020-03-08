import { AppPage } from './app.po';
import { browser, logging, Key } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display search form', () => {
    page.navigateTo();
    expect(page.getSearchForm()).toBeDefined();
  });

  it('should submit search query', () => {
    page.navigateTo();
    page.getSearchForm().sendKeys('test');
    page.getSearchForm().sendKeys(Key.ENTER);
    expect(browser.getCurrentUrl()).toContain('/?search=test');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
