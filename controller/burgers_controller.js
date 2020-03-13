const express = require("express");
const burgerModel = require("../models/burgerModel");
const router = express.Router();


router.get("/", function(req, res) {
    console.log("get all express");
    burgerModel.getAll(function(data) {
        var burgers = {
            burgers: data
        };
        res.render("index", burgers);
    })
});

router.post("/api/burger", ( req, res) => {
    console.log("post new express");
    const { name } = req.body;
    burgerModel.addBurger(name, function(data){
        res.send(data);
    } 
    )
});

router.put("/api/burger/", (req, res) => {
    console.log("update express", req.body);
    const burger = req.body;
    burgerModel.updateBurger(burger, function(response) {
        console.log(response);
        res.send(response);
    })
});


module.exports = router;
