const User = require('../models/User');

class UserService {
    async SignUp(userInput) {
        return await User.create(userInput);
    };

    async getUserByUsername(username) {
        return await User.findOne({username});
    };

    async createUser(userInput) {
        return await User.create(userInput);
    }
}

module.exports = UserService;