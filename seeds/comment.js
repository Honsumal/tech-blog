const Comment = require('../models/comment')

let today = new Date()

const commentData = [
    {
        id: 1,
        content: "Ah cripes, there go my savings",
        user_id: 2,
        post_id: 1,
        post_time: today
    },
    {
        id: 2,
        content: `insightful`,
        user_id: 1,
        post_id: 2,
        post_time: today
    },
    {
        id: 3,
        content: `You should probably consider diversifying your investments ... or not investing your savings like that`,
        user_id: 1,
        post_id: 1,
        post_time: today
    },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;