const app = require('./app');
const dotenv = require('dotenv').config();

const startServer =  async () => {
    try {
        const PORT =  process.env.PORT || 8001;
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error('Error while starting server: ', error);
    }
};

startServer();