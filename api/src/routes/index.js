const { Router } = require("express");
const routes = Router()
const dateRoutes = require("./dateRoutes.js")
const userRoutes = require("./userRoutes.js")
const serviceRoutes = require("./serviceRoutes.js")
const companyRoutes = require("./companyRoutes.js")

routes
.use("/date", dateRoutes)
.use("/user", userRoutes)
.use("/service", serviceRoutes)
.use("/company", companyRoutes)

module.exports = routes