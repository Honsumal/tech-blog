const router = require('express').Router();
const {User, Post, Comment} = require('../models')

//GET request
router.get('/:id', async (req,res) => {
    const dbPostData = await Post.findAll({include: [{ model: Comment,
        attributes: ['content', 'user_id', 'post_time']}], where: {id: req.params.id}})

    const posts = dbPostData.map((post) => post.get({ plain: true }))

    const comments = posts[0].comments

    res.render('post', {posts, comments, loggedIn: req.session.loggedIn, user_id: req.session.user_id})
  })

module.exports = router