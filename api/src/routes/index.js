const { Router } = require("express");
const routes = Router()
const dateRoutes = require("./dateRoutes.js")

routes.use("/date", dateRoutes)

module.exports = routes