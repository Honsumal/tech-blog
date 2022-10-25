const router = require('express').Router();
const Post = require ('../models/post')
const Comment = require('../models/comment')

router.get('/', async (req,res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    }
    const dbPostData = await Post.findAll({
        include: [{ model: Comment,
        attributes: ['content', 'user_id']}],
        where: {user_id: req.session.user_id}
    });
  
    const posts = dbPostData.map((post) => post.get({ plain: true }))
  
    res.render('dashboard', {posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id});
  })

  module.exports = router
