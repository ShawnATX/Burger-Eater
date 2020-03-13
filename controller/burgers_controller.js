const express = require("express");
const burgerModel = require("../models/burgerModel");
const router = express.Router();


router.get("/", function(req, res) {
    console.log("hello!");
    burgerModel.getAll(function(data) {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    })
})


module.exports = router;
