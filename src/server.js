require ("./config/db.config")
require('dotenv').config();
const app = require('express')();
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require("./routes");

app.use(cors());
app.use(bodyParser.json())
//app.use(routes);
app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});
module.exports = app