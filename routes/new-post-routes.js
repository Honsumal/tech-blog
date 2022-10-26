const withAuth = require('../utils/auth');
const router = require('express').Router();

router.get('/', withAuth, async(req,res) => {
        res.render('new-post', {loggedIn: req.session.loggedIn, user_id: req.session.user_id})
})
module.exports = router