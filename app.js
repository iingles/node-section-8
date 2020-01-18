//Core Node modules
const path = require('path')

//Third party Node packages
const express = require('express')
const bodyParser = require('body-parser')

//Main app constant
const app = express()

//Port constant 
const PORT = process.env.PORT || 3000

//Import routes
const adminRoutes = require ('./routes/admin.js')
const productRoutes = require('./routes/products.js')

//Controllers
const error = require('./controllers/error')

//View Engine - EJS
app.set('view engine', 'ejs')
app.set('views', 'views')

//Parse incoming request bodies
app.use(bodyParser.urlencoded({extended:false}))

//Allow read access to public folder by serving it statically
app.use(express.static(path.join(__dirname, 'public')))

//Use routes
app.use(adminRoutes)
app.use(productRoutes)

app.use(error.notFound)  

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})