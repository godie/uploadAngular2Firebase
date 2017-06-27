import { UploadFileFirebasePage } from './app.po';

describe('upload-file-firebase App', function() {
  let page: UploadFileFirebasePage;

  beforeEach(() => {
    page = new UploadFileFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
