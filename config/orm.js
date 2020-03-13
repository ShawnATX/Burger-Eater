const connection = require("./connection");


const orm = {

    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) {
                res.status(500).end()
            }
            callback(result);
        })
    },

    insertOne: function(data, callback) {


    },

    updateOne: function(data) {

    }
}


module.exports = orm;