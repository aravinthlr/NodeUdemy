const Products = require('../models/Product')

exports.getAddProduct = (req,res,next) => {
    //res.sendFile(path.join(rootDir,'views','addProduct.html'))
    res.render('add-product',{title:"hi"})
}

exports.postAddProduct = (req,res,next) => {
    const product = new Products(req.body.title)
    product.save()
    res.redirect("/")
}

exports.getProducts = (req,res,next) => {
    Products.fetchAll((products) => {
        res.render('shop',{title:"hi",prods:products})
    })
    
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
}