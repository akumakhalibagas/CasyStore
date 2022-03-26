var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'b4iuoe2oo3eutt0ti3qi-mysql.services.clever-cloud.com',
  port     : '3306',
  user     : 'uoqf2vlddmhozvho',
  password : '5iAxzyojhDByWXDaeG6M',
  database : 'b4iuoe2oo3eutt0ti3qi'
});

connection.connect(function(err) {
    if (err){
      console.log(err);
      //throw err;
    } else {
      console.log('DB connected :)');
    }
});

module.exports = connection;