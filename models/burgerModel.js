const orm = require("../config/orm");

const burgerModel = {
    getAll: function(callback) {
        orm.selectAll(function(res){
            callback(res);
        })
    }
}

module.exports = burgerModel;