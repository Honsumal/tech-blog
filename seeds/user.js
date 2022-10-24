const User = require('../models/user')

const userData = [
    {
        id: 1,
        username: 'melonlord',
        password: 'th3bestearthbend3r',
        email: 'melonlord@gmail.com'
    },{
        id: 2,
        username: 'boomerang',
        password: 'yu3them00nspir1t',
        email: 'ideaman@gmail.com'
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;