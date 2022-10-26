const router = require('express').Router();
const User = require('../../models/user');
const Post = require('../../models/post');
const Comment = require('../../models/comment');

let today = new Date()

// router.get('/', async (req,res) => {
//     try {
//         const postData = await Post.findAll ({
//             //include: [{ model:Comment }]
//         });
//         res.status(200).json(postData)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });

// router.get('/:id', async (req, res) => {
//     try {
//       const postData = await Post.findByPk(req.params.id, {
//         //include: [{ model: Comment }],
//       });
  
//       if (!postData) {
//         res.status(404).json({ message: 'No post found with that id!' });
//         return;
//       }
  
//       res.status(200).json(postData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
     
//   });

  router.post('/', async (req, res) => {
    // create a new post
    try {
      const postData = await Post.create({
        "title": req.body.title,
        "content": req.body.content,
        "user_id": req.session.user_id,
        "post_time": today
      });
      res.status(200).json({message: `Successfully created post:`});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/', async (req, res) => {
    // update a post by its `id` value
    try {
      const postData = await Post.update(req.body,{
        where: {id: req.session.post_id}
      });
  
      if (!postData){
        res.status(404).json({message: 'No post with this id found'})
      }
      res.status(200).json({message: `Successfully updated post`})
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/', async (req, res) => {
    // delete a post by its `id` value
    try {
      const postData = await Post.destroy({
        where: {
          "id": req.session.post_id
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