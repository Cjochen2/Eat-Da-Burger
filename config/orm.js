// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    insertOne: function(table, cols, val, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES (?)";
      connection.query(queryString, [table, cols, val], function(err, result) { 
        if (err) throw err;
        cb(result);
      });
    },
    updateOne: function(table, col, val, id, key, cb) {
      var queryString = "UPDATE " + table + " SET ?? = ? WHERE ?? = ?"
  
      connection.query(queryString,[col, val, id, key],
        function(err, result) {
          if (err) throw err;
          cb(result);
        }
      );
    }
  };
  
  module.exports = orm;