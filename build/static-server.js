const chalk = require('chalk');
const static = require('node-static');

const file = new static.Server('./dist');
const port = process.env.PORT || 3000;

require('http').createServer((req, res) => {
  req.addListener('end', function() {
    if (req.url.indexOf('.') === -1) { // SPA - Load `index.html` for every sub directory
      file.serveFile('./index.html', 200, {}, req, res);
    } else { // load files normally
      file.serve(req, res);
    }
  }).resume();
}).listen(port);

console.log(chalk.cyan(`  Server started on port ${port}`));
