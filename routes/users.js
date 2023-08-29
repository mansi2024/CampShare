const express = require('express');
const router = express.Router();
const User = require('../model/user');
const passport = require('passport');
const catchAsync = require('../Utils/catchAsync');
const users = require('../controllers/users');


router.get('/register',users.userRender);

router.post('/register',catchAsync(users.registerUser));

router.get('/login',users.loginForm);
router.post('/login',passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),catchAsync(users.Registered));


router.get('/logout', (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
});

module.exports = router;
