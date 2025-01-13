const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
const port = process.env.PORT || 5000


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