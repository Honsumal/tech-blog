const { belongsTo } = require('./comment');
const Comment = require('./comment');
const Post = require('./post');
const User = require('./user');

Comment.belongsTo (Post, {
    foreignKey: 'post_id'
});

Comment.belongsToMany (User, {
    through: {
        model: Post,
        foreignKey: 'user_id',
        unique: false,
    }
});

Post.hasMany (Comment, {
    foreignKey: 'post_id',
});

Post.belongsTo (User, {
    foreignKey: 'user_id'
})

User.hasMany (Post, {
    foreignKey: 'user_id'
})