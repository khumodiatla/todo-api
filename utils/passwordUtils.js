const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing user password: ', error);
        throw error;
    }
}

const verifyPassword = (password, hashedPassword) => {
    try {
        return bcrypt.compareSync(password, hashedPassword);
    } catch (error) {
        console.error('Error while verifying user password against the hashedPassword: ', error);
        throw error;
    }
}

module.exports = {
    hashPassword,
    verifyPassword
};