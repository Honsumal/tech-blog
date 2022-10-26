const router = require('express').Router();
const Post = require('../../models/post')
const Comment = require('../../models/comment');

let today = new Date()

router.post('/', async (req, res) => {
  // create a new comment
  // try {
    const commentData = await Comment.create(
      {
        "content": req.body.comment,
        "user_id": req.session.user_id,
        "post_id": req.session.post_id,
        "post_time": today,
      }
      );
    res.status(200).json({message: `Successfully posted comment`});
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});


// router.delete('/:id', async (req, res) => {
//   // delete a comment by its `id` value
//   try {
//     const commentData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!commentData) {
//       res.status(404).json({ message: 'No comment found with that id!' });
//       return;
//     }

//     res.status(200).json({message: `Successfully deleted comment`});
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;