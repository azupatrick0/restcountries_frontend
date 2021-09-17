const git = require('simple-git')();
const appRootPath = require('app-root-path');

const pushToGit = async (file) => {
  git.addConfig('user.email', 'azupatrick0@gmail.com', true, 'local');
  git.addConfig('user.name', 'azupatrick0', true, 'local');
  const remotes = await git.getRemotes();
  console.log('remotes', remotes);
  const repo = 'https://github.com/azupatrick0/restcountries_frontend.wiki.git';
  if (remotes.length) {
    if (!remotes.map((remote) => remote.name).includes('upstream')) {
      console.log('upstream not found, creating...');
      await git.addRemote('upstream', repo);
      await git.fetch(['--unshallow']);
    }
  }
  await git.add('./*.md');
  await git.add(appRootPath.resolve(`/src/helper/${file}.md`));
  await git.add(appRootPath.resolve(`/src/helper/test-reports-links.md`));
  await git.commit(`updated ${file} markdown file`);
  await git.push(['upstream', 'HEAD:master', '--force']);
  console.log('push to upstream succeeded');
};

export default pushToGit;
