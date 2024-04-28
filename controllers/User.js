const User = require('../models/User');
const UserService = require('../services/User');
const { hashPassword, verifyPassword } = require('../utils/passwordUtils');
const { generateToken } = require('../utils/tokenUtils');

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

    async signIn(req, res) {
        try {
            const { username, password } = req.body;
    
            if(!username || !password){
                console.error('All the fields are reqiured');
                return res.status(400).json({ error: 'All the fields are required'});
            }
    
            const user = await userService.getUserByUsername(username);
            if(!user){
                console.error('User with given username not found');
                return res.status(404).json({error: 'User not found'});
            }
            
            // Verify password
            const isPasswordMatch = verifyPassword(password, user.password);
            if(!isPasswordMatch){
                console.error('User password does not match the hashed password');
                return res.status(401).json({ error: 'Invalid password'});
            }
            // Generate token
            const token = await generateToken(user.id);

            // Remove password from the user response
            const { password: hashedPassword, ...userOutput} = user.toObject();
            userOutput.token = token;
    
            return res.json(userOutput);
        } catch (error) {
            console.error('Error while User signing in:', error);
            return res.status(500).json({ error: 'Internal server error'});
        }
    }
}

module.exports = UserController;