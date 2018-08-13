var connection = require("./connection.js");

//TODO REVISE THIS FILE!!!

var orm = {
    selectAll: function(tableName, cb){
        var queryString = "SELECT * FROM ?";

        connection.query(queryString, 
            [tableName], 
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    },
    insertOne: function(tableName, colToSet, cb){
        var queryString = "INSERT INTO ? (?) VALUES (?)";

        connection.query(queryString, 
            [
                tableName,
                {
                    burger_name: colToSet
                }
            ],
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    },
    updateOne: function(tableName, colToSet, idToUpdate, cb) {
        var queryString = "UPDATE ? SET ? WHERE ?";

        connection.query(queryString, 
            [
                tableName, 
                {
                    burger_name: colToSet
                }, 
                {
                    id: idToUpdate
                }
            ], 
            function(err, result) {
                if (err) throw err;
                cb(result);
            }
        );
    }
};

module.exports = orm;