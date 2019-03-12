'use strict'; 

var mysql      = require('mysql');
module.exports = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'test_pass',
  database : 'api-angeles'
});
