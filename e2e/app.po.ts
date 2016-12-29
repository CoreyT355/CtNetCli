import { browser, element, by } from 'protractor';

export class TestNgCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ctnet-app h1')).getText();
  }
}
