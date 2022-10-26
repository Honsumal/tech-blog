const router = require('express').Router();
const {User, Post, Comment} = require('../models')

router.get('/', async (req, res) => {
  const dbPostData = await Post.findAll({include: [{ model: User, attributes: ['username']}]})

  const posts = dbPostData.map((post) => post.get({ plain: true }));

  res.render('homepage', {posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id});
});

router.get('/post/:id', async (req,res) => {
  dbPostData = await Post.findByPk(req.params.id)
})

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'signup' template
  res.render('signup');
});


module.exports = router;
