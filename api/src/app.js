const express = require("express")
const morgan = require("morgan")
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const cors = require("cors")
const routes = require("./routes/index.js")

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cookieParser());
app.use(routes)

module.exports = app