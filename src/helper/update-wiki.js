import createWikiMarkdownFile from './create-wiki-markdown-file';
import pushToGit from './push-to-git';

const updateWiki = async (fileStringList, today, timestampStringToMilliseconds) => {
  const repo = 'https://github.com/azupatrick0/restcountries_frontend.wiki.git';
  
  try {
    const files = fileStringList.map(data => `https://storage.googleapis.com/sourcemapsbucket/tests-screenshots/${today}/restcountries-frontend/${timestampStringToMilliseconds}/${data.fileName}`);
    const mdFileName = createWikiMarkdownFile(files);
    await pushToGit(mdFileName);
    console.log(`wiki ${repo} updated at ${new Date()}`);
  } catch (e) {
    console.log('error updating wiki', e)
  }
}

export default updateWiki;