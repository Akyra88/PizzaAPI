const express = require ('express');
const router = express.Router();

// get a list of pizzeria places from the db
router.get('/pizzerias', function(req, res){
    res.send({type: 'GET'});
});

// add a new pizzeria to the db
router.post('/pizzerias', function(req, res){
    console.log('You made a POST request: ', req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
});
});
// update a pizzeria in the db
router.put('/pizzerias/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a pizzeria from the db
router.delete('/pizzerias/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;