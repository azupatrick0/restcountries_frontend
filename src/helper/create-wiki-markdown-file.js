/* eslint-disable array-callback-return */
import editHomeMDFileToIncludeLink from './edit-home-markdown-file';
const fs = require('fs');
const { render } = require('mustache');
const appRootPath = require('app-root-path');

const createWikiMarkdownFile = (screenshotURls) => {
  console.log('Creating wiki markdown file...');
  const mdTemplate = `
  # {{name}}
  
  {{action}}

  ![screenshot]({{testscreenshot}})
  `;
  let output = '';
  screenshotURls.map(screenshotURl => {
    const obj = {
      name: `${screenshotURl.split('/')[8]} / ${screenshotURl.split('/')[9]}`,
      testscreenshot: screenshotURl,
      action: `Do ${screenshotURl.split('/')[9].split('-')[1]}`
    };
    output = output + render(mdTemplate, obj);
  });
  const mdFileName = `${screenshotURls[0].split('/')[8].toLowerCase()}`;
  fs.writeFileSync(appRootPath.resolve(`/src/helper/${mdFileName}.md`), output);
  console.log('Markdown file written to filesystem successfully');
  editHomeMDFileToIncludeLink(`https://github.com/azupatrick0/restcountries_frontend/wiki/${mdFileName}`, `${mdFileName}`);
  return mdFileName;
}

export default createWikiMarkdownFile;