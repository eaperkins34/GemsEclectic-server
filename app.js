require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db')

sequelize.sync();

app.use(bodyParser.json())
app.use(require ('./middleware/headers'))

require('./models')

app.use('/jewelry', require('./controllers/jewelry-controller'))

app.listen(process.env.PORT, () => {
    console.log(`server is listening on port: ${process.env.PORT}`)
})