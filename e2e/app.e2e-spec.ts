import { EssentialprojectPage } from './app.po';

describe('essentialproject App', () => {
  let page: EssentialprojectPage;

  beforeEach(() => {
    page = new EssentialprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
