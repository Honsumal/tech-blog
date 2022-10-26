const router = require('express').Router();

router.get('/', async(req,res) => {
    res.render('new-post', {loggedIn: req.session.loggedIn, user_id: req.session.user_id})
})
module.exports = router