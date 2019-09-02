var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burg", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(col, vals, cb) {
      orm.insertOne("burg", col, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(col, val, id, key, cb) {
      orm.updateOne("burg", col, val, id, key, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (burgController.js).
  module.exports = burger;