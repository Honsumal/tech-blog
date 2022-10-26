const router = require('express').Router();
const withAuth = require('../utils/auth')
const {User, Post, Comment} = require('../models')

router.get('/', withAuth, async (req,res) => {
    const dbPostData = await Post.findAll({where: {user_id: req.session.user_id}});
  
    const posts = dbPostData.map((post) => post.get({ plain: true }))
  
    res.render('dashboard', {posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id});
  })

  router.get('/update', withAuth, async (req,res) => {
    const dbPostData = await Post.findAll({where: {id: req.session.post_id}});
  
    const posts = dbPostData.map((post) => post.get({ plain: true }))
  
    res.render('update', {posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id});
  })

  module.exports = router
