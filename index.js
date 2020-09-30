const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('json spaces', 4)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const productRoutes = require('./routes/products')

app.use('/products', productRoutes)

app.listen(3000, () => console.log('Server on port 3000'))
