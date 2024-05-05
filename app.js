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
const app = express()

app.use(bodyParser.urlencoded())
app.use("/admin",adminRoutes)
app.use(shopRoutes)


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
app.listen(5000)