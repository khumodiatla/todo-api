const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken =  async (userId) => {
    try {
        return jwt.sign({userId}, process.env.JWT_SECRET, {
            expiresIn: '30m'
        });
    } catch (error) {
        console.error('Error generating a token: ', error);
        throw error;
    }
}

const verifyToken = async (token) => {
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        
        return decoded.userId;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    generateToken,
    verifyToken
};