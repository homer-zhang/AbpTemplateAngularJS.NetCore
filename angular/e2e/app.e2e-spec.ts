import { DevTemplatePage } from './app.po';

describe('Dev App', function() {
  let page: DevTemplatePage;

  beforeEach(() => {
    page = new DevTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
