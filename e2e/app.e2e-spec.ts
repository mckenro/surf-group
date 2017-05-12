import { SurfGroupPage } from './app.po';

describe('surf-group App', () => {
  let page: SurfGroupPage;

  beforeEach(() => {
    page = new SurfGroupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
