const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes');
require('dotenv').config();
require('./config/dataBase');


const app = express()
app.use(cors())
app.use(express.json())



app.use('/', Router)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})