// const http  = require('http')
// const routes = require('./routes')
// const server = http.createServer(routes)

// server.listen(5000)

const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/adminRoute')

const app = express()

app.use(bodyParser.urlencoded())
app.use("/admin",adminRoutes)


app.use("/",(req,res,next) => {
    res.status(404).send("<h1>Page Not FOund</h1>")
})
app.listen(5000)