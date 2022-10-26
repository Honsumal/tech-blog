const Comment = require('../models/comment')

let today = new Date()

const commentData = [
    {
        id: 1,
        content: 'Ah cripes, there go my savings',
        user_id: 2,
        post_id: 1,
        post_time: today
    },
    {
        id: 2,
        content: `that's a clickbait title -.-`,
        user_id: 1,
        post_id: 2,
        post_time: today
    },
    {
        id: 3,
        content: `your savings are in semi-conductors?`,
        user_id: 1,
        post_id: 1,
        post_time: today
    }
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;