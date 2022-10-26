const Post = require('../models/post')

let today = new Date()

const postData = [
    {
        id: 1,
        title: 'Google and Microsoft hit by global economic slowdown',
        content: 'As the global economy tends towards a recession, even tech giants such as Google and Microsoft are reporting diminished revenue growths.',
        user_id: 1,
        post_time: today
    },{
        id: 2,
        title: 'Meta stocks continue to fall',
        content: 'Investor confidence plummeted in February, and has continued to decline throughout the rest of the year as revenue continued to drop. Despite this, facebook is continuing to grow in parts of the world and has thus avoided a decline in usership.',
        user_id: 2,
        post_time: today
    }
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;