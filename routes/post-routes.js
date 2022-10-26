const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

//GET request for single Post
router.get('/:id', withAuth, async (req,res) => {

    const dbPostData = await Post.findAll({include: [{ model: Comment,
    attributes: ['content', 'user_id', 'post_time']}], where: {id: req.params.id}})

    const posts = dbPostData.map((post) => post.get({ plain: true }))

    const comments = posts[0].comments

    req.session.save(() => {
        req.session.post_id = req.params.id

        if (posts[0].user_id === req.session.user_id){
            res.render('own-post', {posts, comments, loggedIn: req.session.loggedIn, user_id: req.session.user_id, post_id: req.session.post_id})

        } else {
            res.render('post', {posts, comments, loggedIn: req.session.loggedIn, user_id: req.session.user_id, post_id: req.session.post_id})
        }
    })
})

module.exports = router