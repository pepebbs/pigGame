import { PigGamePage } from './app.po';

describe('pig-game App', function() {
  let page: PigGamePage;

  beforeEach(() => {
    page = new PigGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
