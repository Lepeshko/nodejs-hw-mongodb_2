const fs = require('node:fs/promises');

fs.writeFile('write.txt', 'I love Node.js')
  .then(() => console.log('Done'))
  .catch((error) => console.log.error(error));
