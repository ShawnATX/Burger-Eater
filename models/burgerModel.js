const orm = require("../config/orm");

const burgerModel = {
    getAll: function(callback) {
        orm.selectAll(function(res){
            callback(res);
        })
    },

    addBurger: function(burger, callback){
        orm.insertOne(burger, function(response){
            callback(response);
        })   
    },

    updateBurger: function (burger, callback) {
        orm.updateOne(burger, function(response){
            callback(response);
        })
    }

};

module.exports = burgerModel;