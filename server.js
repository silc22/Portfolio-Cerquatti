const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes');
require('dotenv').config();
require('./config/database');


const app = express()
app.use(cors())
app.use(express.json())


app.use('/api', Router)

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})