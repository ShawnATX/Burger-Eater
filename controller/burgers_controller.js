const express = require("express");
const burgerModel = require("../models/burgerModel");
const router = express.Router();


router.get("/index", function(req, res) {
    burgerModel.getAll(function(data) {
        var burgers = {
            burgers: data
        };
        res.render("index", burgers);
    })
});

router.post("/api/burger", ( req, res) => {
    if (req.body.name === ""){
        res.send("name missing");
    }else{

        const { name } = req.body;
        burgerModel.addBurger(name, function(data){
            res.send(data);
        } 
        )
    }
});

router.put("/api/burger/", (req, res) => {
    const burger = req.body;
    burgerModel.updateBurger(burger, function(response) {
        res.send(response);
    })
});


module.exports = router;
