import { A51moviesPage } from './app.po';

describe('a51movies App', () => {
  let page: A51moviesPage;

  beforeEach(() => {
    page = new A51moviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
