const express = require('express');
const router = express.Router();
const User = require('../../database/models/register');
const User1 = require('../../database/models/contact');
const passport = require('../../passport')
const bcrypt = require('bcryptjs');

router.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({
        name,
        email,
        password
    })
    bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
                .catch(err => console.log(err))
        }))
})

router.post('/contact', (req, res) => {
    const { name, email, msg } = req.body;
        const newUser = new User1({
            name,
            email,
            msg
        })
           newUser.save()
})

router.post(
    '/login',
    function (req, res, next) {
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        res.send(req.user);
    }
)

router.post('/updateinfo', (req, res) => {
    const { name, email, email1, password } = req.body;
        const newUser = new User({
            name,
            email,
            password
        })
        bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                User.updateOne(
                    { email: email1 },
                    {
                        $set: {
                            "name": newUser.name,
                            "password": newUser.password,
                            "email": newUser.email
                        }
                    },
                ).catch(err => console.log(err))
            }))
    }
)

router.post('/deleteaccount', (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    User.deleteOne(
        { email: email }, {}).then(console.log("Account Deleted"))

})

module.exports = router;