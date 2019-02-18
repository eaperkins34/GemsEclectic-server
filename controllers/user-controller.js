var router = require('express').Router();
var Sequelize = require('../db');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var validateAdminSession = require('../middleware/validateAdminSession');
var User = Sequelize.import('../models/user')


router.post('/create', (req, res) => {
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
    })
    .then(
        createSuccess = (user) => {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: 60*60*24 })
            res.json({
                user: user,
                message: 'user created',
                sessionToken: token
            })
        },
        createErrpr => err> res.status(500).send(err)
    )
});

router.post('/login', (req, res, next) => {
    User.findOne({ where: {username: req.body.username}})
        .then( user => {
            if(user) {
                bcrypt.compare(req.body.password, user.password, (err, matches) => {
                    if(matches) {
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user:user,
                            message: 'successfully logged in',
                            sessionToken: token
                        })
                    } else {
                        res.status(502).json({message: "Auth failed"})
                    }
                })
            } else {
                res.status(500).send({error: "Failed to authenticate"})
            }
        })
    .catch(error => res.status(501).json(error))
})

module.exports = router;
