const gitDir = '/restcountries_frontend.wiki';

//const git = require('simple-git')
// .pull()
// .tags((err, tags) => console.log("Latest available tag: %s", tags.latest));
const gitTest = async () => {
  // await git.init();
  // const remotes = await git.getRemotes();
  // console.log(remotes, '===>>>>>')
  // // await git.removeRemote('originwiki');
  // // await git.addRemote('origin', repo);
  // // await git.pull('origin', 'master');
  // git.rm('--all')
  // //await git.add(`landing.md`);
  // // const data = fs.readFileSync(appRootPath.resolve(`/src/utils/${files[0].split('/')[8].toLowerCase()}.md`), { encoding:'utf8', flag:'r' });
  // // console.log('data =====>>>>', data)
  // await git.add('test.md');
  // await git.commit(`updated test md file`);
  // await git.push('origin', 'HEAD:master');


  const USER = 'something';
const PASS = 'somewhere';
const REPO = 'github.com/username/private-repo';

const git = require('simple-git');
const remote = `https://${USER}:${PASS}@${REPO}`;
const repo = 'https://github.com/azupatrick0/restcountries_frontend.wiki.git'

git().silent(false)
  .clone(repo)
  .then(a => {
    var exec = require('child_process').exec
    exec('git add --all', function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
           console.log('exec error: ' + error);
      }
    })
  })
  .catch((err) => console.error('failed: ', err));
}

gitTest()
