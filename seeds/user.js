const User = require('../models/user')
const bcrypt = require('bcrypt')

const userData = [
    {
        id: 1,
        username: 'Meer',
        password: bcrypt.hashSync('dasamsam', 10),
        email: 'melonlord@gmail.com'
    },{
        id: 2,
        username: 'Pang',
        password: bcrypt.hashSync('bigpang', 10),
        email: 'ideaman@gmail.com'
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;