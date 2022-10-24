const router = require('express').Router();
const User = require('../../models/user');
const Post = require('../../models/post');
const Comment = require('../../models/comment');

router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll ({
            include: [{ model:Post }]
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [{ model: Post }],
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
     
  });

  router.post('/', async (req, res) => {
    // create a new user
    try {
      const userData = await User.create(req.body);
      res.status(200).json({message: `Successfully created user: ${req.body.username}`});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.put('/:id', async (req, res) => {
    // update a user by its `id` value
    try {
      const userData = await User.update(req.body,{
        where: {id: req.params.id}
      });
  
      if (!userData){
        res.status(404).json({message: 'No user with this id found'})
      }
      res.status(200).json({message: `Successfully updated user`})
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    // delete a user by its `id` value
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
  
      res.status(200).json({message: `Successfully deleted user`});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;