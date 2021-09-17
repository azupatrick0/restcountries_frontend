const fs = require('fs');
const appRootPath = require('app-root-path');

const editHomeMDFileToIncludeLink = (link, title) => {
  const data = fs.readFileSync(appRootPath.resolve(`/src/helper/test-reports-links.md`), { encoding:'utf8', flag:'r' });
  
  if (!data.includes(link)) {
    console.log(`adding ${link} to test-reports-links.md`);
    fs.writeFileSync(appRootPath.resolve('/src/helper/test-reports-links.md'),
    `
  ${data}

  ${title} [[${title} report link](${link})]
    `
    );
  } else {
    console.log('link already exists, not including');
  }
}

export default editHomeMDFileToIncludeLink;