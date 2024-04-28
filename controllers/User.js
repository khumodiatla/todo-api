const UserService = require('../services/User');
const hashPassword = require('../utils/passwordUtils');

const userService = new UserService();

class UserController{

    async SignUp(req, res){
        try {
            const { username, email, firstname, lastname, password } = req.body;

            if(!username || !email || !firstname || !lastname || !password){
                console.error('All the fields are required');
                return res.status(400).json({ error: 'All the fields are required'});
            }

            const existingUser =  await userService.getUserByUsername(username);
            if(existingUser){
                console.error('User with that username already exists');
                return res.status(400).json({ error: 'User with that username already exists'});
            }
            
            const hashedPassword =  await hashPassword(password);

            const userInput = {
                username,
                email,
                firstname,
                lastname,
                password: hashedPassword
            }
            const newUser = await userService.createUser(userInput);

            const { __v, password: userPassword, ...userOutput } = newUser.toObject();

            return res.status(201).json(userOutput);
        } catch (error) {
            console.error('Error while User signing up: ', error);
            return res.status(500).json({ error: 'Internal Server error'});
        }
    }
}

module.exports = UserController;