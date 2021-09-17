import { Storage } from '@google-cloud/storage';
import updateWiki from './update-wiki';

const uploadScreenshotToGCS = async (fileStringList, page) => {
  try {
    const bucketName = 'sourcemapsbucket';
    const storage = new Storage({ keyFilename: 'key.json' });
    const bucket = storage.bucket(bucketName);
    const today = new Date().toISOString().split('T')[0];
    const timestampStringToMilliseconds = new Date().getTime();
    if (fileStringList.length) {
      fileStringList.map(async (data) => {
        const file = bucket.file(`tests-screenshots/${today}/restcountries-frontend/${timestampStringToMilliseconds}/${data.fileName}`);
        await file.save(data.fileString, {
          metadata: { contentType: 'image/png' }
        });
        console.log(
          `${data.fileName} screenshot uploaded successfully, upload url here => https://storage.googleapis.com/sourcemapsbucket/tests-screenshots/${today}/restcountries-frontend/${timestampStringToMilliseconds}/${data.fileName}`
        );
      });
      await updateWiki(fileStringList, today, timestampStringToMilliseconds);
    }
  } catch (error) {
    console.log(`error occured while uploading screenshot ===>>>`, error);
  }
};

export default uploadScreenshotToGCS;
