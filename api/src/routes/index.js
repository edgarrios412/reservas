const { Router } = require("express");
const routes = Router()
const dateRoutes = require("./dateRoutes.js")
const userRoutes = require("./userRoutes.js")

routes
.use("/date", dateRoutes)
.use("/user", userRoutes)

module.exports = routes