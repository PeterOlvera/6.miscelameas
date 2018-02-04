import { MiscelaneasPage } from './app.po';

describe('miscelaneas App', () => {
  let page: MiscelaneasPage;

  beforeEach(() => {
    page = new MiscelaneasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
