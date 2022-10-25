const router = require('express').Router();
const withAuth = require('../utils/auth')
const {User, Post, Comment} = require('../models')

router.get('/', async (req,res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const dbPostData = await Post.findAll({where: {user_id: req.session.user_id}});

     const userData = await User.findByPk (req.session.user_id)
  
    const posts = dbPostData.map((post) => post.get({ plain: true }))
  
    res.render('dashboard', {posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id});
  })

  module.exports = router
