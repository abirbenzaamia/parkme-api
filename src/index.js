
const app = require('./server')
const port = 3000 || process.env.PORT;

const startServer = () => {
    app.listen(port,() => {
        console.log(`Server running on port ${port} `);
    })
};
startServer();