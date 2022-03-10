const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes');
require('dotenv').config();
require('./config/dataBase');


const app = express()
app.use(cors())
app.use(express.json())



app.use('/api', Router)


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/client/build/index.html"));
    });
}


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})