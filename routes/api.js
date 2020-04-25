const express = require ('express');
const router = express.Router();
const Pizzeria = require('../pizzaModel/pizza')


// get a list of pizzeria places from the db
router.get('/pizzerias', function (req, res, next){
     
Pizzeria.aggregate().near({
near: { 
type: "Point", coordinates: [parseFloat(req.query.lng),parseFloat(req.query.lat)] },
maxDistance: 100000, // in 10k meters
spherical: true,
distanceField: "dist"
}).then(function(pizzerias){
console.log(pizzerias)
res.send(pizzerias)
}).catch(next);
});

/*
// get a list of ninjas from the db
router.get('/pizzerias', function(req, res, next){
   
    Pizzeria.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(pizzerias){
        res.send(pizzerias);
    }).catch(next);
});*/


// add a new pizzeria to the db
router.post('/pizzerias', function(req, res, next){
   Pizzeria.create(req.body).then(function(pizzeria){
    res.send(pizzeria);
   }).catch(next);
});

// update a pizzeria in the db
router.put('/pizzerias/:id', function(req, res, next){
     Pizzeria.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Pizzeria.findOne({_id: req.params.id}).then(function(pizzeria){
            res.send(pizzeria);
        });
    }).catch(next);
});

// delete a pizzeria from the db
router.delete('/pizzerias/:id', function(req, res, next){
    Pizzeria.findByIdAndRemove({_id: req.params.id}).then(function(pizzeria){
        res.send(pizzeria);
    }).catch(next);
});

module.exports = router;