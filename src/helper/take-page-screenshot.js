import uploadScreenshotToGCS from './upload-file';

const fileStringList = [];

const takePageScreenShot = async (page, fileName, upload) => {
  const fileString = await page.screenshot({ encoding: 'binary', fullPage: true });
  fileStringList.push({ fileString, fileName });
  if (upload) {
    await uploadScreenshotToGCS(fileStringList, page);
  }
};

export default takePageScreenShot;
