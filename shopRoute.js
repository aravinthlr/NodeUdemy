const express = require('express')
const router = express.Router()

router.get("/",(req,res,next) => {
    res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>")
})

module.exports = router