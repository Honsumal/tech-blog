const Post = require('../models/post')

const postData = [
    {
        id: 1,
        title: 'Biden announces restrictions on selling semiconductors to China',
        content: 'Biden announces restrictions on selling semiconductors to China',
        user_id: 1,
        post_time: 1666678006
    },{
        id: 2,
        title: 'Cheese prices plummet after discovery on the moon',
        content: 'Cheese prices plummet after recent discovery on the moon makes researchers postulate that microbes can can survive outer space can also survive pasteurization',
        user_id: 2,
        post_time: 1666678006
    }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;