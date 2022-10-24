const router = require('express').Router();
const User = require('../../models/user');
const Post = require('../../models/post');
const Comment = require('../../models/comment');

router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll ({
            //include: [{ model:Comment }]
        });
        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        //include: [{ model: Comment }],
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
     
  });

  router.post('/', async (req, res) => {
    // create a new post
    try {
      const postData = await Post.create(req.body);
      res.status(200).json({message: `Successfully created post: ${req.body.title}`});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    // update a post by its `id` value
    try {
      const postData = await Post.update(req.body,{
        where: {id: req.params.id}
      });
  
      if (!postData){
        res.status(404).json({message: 'No post with this id found'})
      }
      res.status(200).json({message: `Successfully updated post`})
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    // delete a post by its `id` value
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json({message: `Successfully deleted post`});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;