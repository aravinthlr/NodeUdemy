// const http  = require('http')
// const routes = require('./routes')
// const server = http.createServer(routes)

// server.listen(5000)

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminRoutes = require('./routes/adminRoute')
const shopRoutes = require('./routes/shopRoute')
const rootDir = require('./utils/path')
const errorController = require('./controllers/error')
const app = express()

app.use(bodyParser.urlencoded())
app.use("/admin",adminRoutes)
app.use(shopRoutes)

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine", "pug")
app.set("views","views")

app.use(errorController.get404Page)
app.listen(3000)