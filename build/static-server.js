const chalk = require('chalk');
const static = require('node-static');

const file = new static.Server('./dist');
const port = process.env.PORT || 3000;

require('http').createServer((req, res) => {
  req.addListener('end', function() {
    file.serve(req, res);
  }).resume();
}).listen(port);

console.log(chalk.cyan(`  Server started on port ${port}`));
