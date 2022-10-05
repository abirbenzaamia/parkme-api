const cool = require('cool-ascii-faces');
const app = require('./server')
const port = 3000 ;

const startServer = () => {
    app.listen(port,() => {
        console.log(`Server running on port ${port} `);
    })
};
startServer();