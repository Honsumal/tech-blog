const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

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