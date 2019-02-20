const router = require('express').Router();
const Jewelry = require('../db').import('../models/jewelry');
const validate = require('../middleware/validateUserSession')

router.post('/create', validate, (req, res) => {
    Jewelry.create(req.body)
    .then(function(newJewelry) {
        res.send(newJewelry);
    },
    createError = err => res.send(500, err)
    )
})

router.delete('/delete/:id', validate, (req, res) => {
    Jewelry.destroy({ where: { id: req.params.id }})
        .then(jewelry => res.status(200).json(jewelry))
        .catch(err => res.json(req.errors))
})

router.get('/all', (req,res) => {
    Jewelry.findAll({include: [{all:true}]})
        .then(jewelry => res.status(200).json(jewelry))
        .catch(error => res.status(500).json(error))
})

router.get('/:id', (req,res) => {
    Jewelry.findOne({where:{id: req.params.id}})
        .then(jewelry => res.status(200).json(jewelry))
        .catch(error => res.status(500).json(error));
})

router.get('/available', (req, res) => {
    Jewelry.findAll({where: {available: true}})
        .then(jewelry => res.status(200).json(jewelry))
        .catch(err => res.status(500).json({error:err}))
})

module.exports = router;