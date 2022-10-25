const router = require('express').Router();
const User = require('../../models/user');
const Post = require('../../models/post');
const Comment = require('../../models/comment');

router.post('/signup', async (req, res) => {
  // create a new user
  try {
    const userData = await User.create(req.body);
    
    req.session.save(() => {
      req.session.loggedIn = true
      res.status(200).json(userData);
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true
      res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, the session is destroyed
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// router.put('/:id', async (req, res) => {
//   // update a user by its `id` value
//   try {
//     const userData = await User.update(req.body,{
//       where: {id: req.params.id}
//     });

//     if (!userData){
//       res.status(404).json({message: 'No user with this id found'})
//     }
//     res.status(200).json({message: `Successfully updated user`})
    
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;