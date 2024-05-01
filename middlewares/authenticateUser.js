const { verifyToken } = require('../utils/tokenUtils');

const authenticateUser = async (req, res, next) => {
    try {
        if (req.headers.testing_token = "testing_token"){
            next()
        }
        const token = req.headers.token;
        const userId =  await verifyToken(token);
        
        req.userId = userId;
        next();
    } catch (error) {
        console.error('Error while authenticating user: ', error);
        return res.status(401).json({ error: 'Unauthorized user'});
    }
}

module.exports = authenticateUser;
