const { open } = require('sqlite');
const sql3 = require('sqlite3');

module.exports = async () =>
  await open({
    filename: 'database.sqlite',
    driver: sql3.Database
  });
