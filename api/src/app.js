const express = require("express")
const morgan = require("morgan")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require("cors")

const app = express()

app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cookieParser());
app.use(morgan('dev'));


app.get("/",(req,res) => {
    res.send("Hola mundo")
})

module.exports = app