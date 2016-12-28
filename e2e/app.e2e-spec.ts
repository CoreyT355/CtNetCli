import { TestNgCliPage } from './app.po';

describe('test-ng-cli App', function() {
  let page: TestNgCliPage;

  beforeEach(() => {
    page = new TestNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
