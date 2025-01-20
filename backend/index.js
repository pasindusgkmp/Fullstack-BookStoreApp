const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


const mongoose = require('mongoose');
const port = process.env.PORT || 5000


//middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials:true
}))

//routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
//const userRoutes = require('./src/users/user.route.jsx')
const userRoutes = require('./src/users/user.route')

app.use('/api/books', bookRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)



async function main(){
    await mongoose.connect(process.env.DB_URL, {
        
    }
    );
    app.get('/', (req, res) => {
        res.send('Book Server is running!')
      })
}


main().then(()=> console.log("mongodb connected successfully")).catch((err)=> console.log(err))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})