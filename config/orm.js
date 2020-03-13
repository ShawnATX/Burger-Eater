const connection = require("./connection");

const getDevouredResult = (devoured) => {
    if (devoured) {
        return 1;
    }
    else {
        return 0;
    }
};


const orm = {

    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) {
                res.status(500).end()
            }
            callback(result);
        })
    },

    insertOne: function(burger, callback) {
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ( ?, false)", [burger], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    updateOne: function(burger, callback) {
        const devoured = getDevouredResult(burger.devoured);
        const {id} = burger;
        console.log(devoured);
        connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, id], function(err, response) {
            if (err) throw err;
            callback(response);
        })

    }
}


module.exports = orm;