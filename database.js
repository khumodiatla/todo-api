const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

class Database {
    async connect() {
        try {
            await mongoose.connect(process.env.MONGO_URL);
            console.log('Connected successfully to the MongoDB database');
        } catch (error) {
            console.error('Error while connecting to the database: ', error);
        }
    } 
    async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('Disconnected successfully from the MongoDB database');
        } catch (error) {
            console.error('Error while disconnecting to the database: ', error);
        }
    }
};

module.exports = Database;