const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


const mongoose = require('mongoose');
const port = process.env.PORT || 5000


//middleware
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5000'],
    credentials:true
}))

//routes
const bookRoutes = require('./src/books/book.route')
app.use('/api/books', bookRoutes)



async function main(){
    await mongoose.connect(process.env.DB_URL, {
        
    }
    );
    app.get('/', (req, res) => {
        res.send('Book Server is running!')
      })
}


main().then(()=> console.log("mongodb connect successfully")).catch((err)=> console.log(err))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})