const app = require('./app');
const Database = require('./database');

const database = new Database();

const startServer =  async () => {
    try {
        await database.connect();

        const PORT =  process.env.PORT || 8001;
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

        process.on('SIGINT', async () => {
            console.log('Server shutting down...');
            await database.disconnect();

            server.close(() => {
                console.log('Server successfully shut down');
                process.exit(0);
            })
        });

    } catch (error) {
        console.error('Error while starting server: ', error);
        await database.disconnect();
    }
};

startServer();