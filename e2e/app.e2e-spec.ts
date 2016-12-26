import { CanvasAppPage } from './app.po';

describe('canvas-app App', function() {
  let page: CanvasAppPage;

  beforeEach(() => {
    page = new CanvasAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
