const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

const PORT  = process.env.PORT || 5000

const MONGODB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@project.wytfk.mongodb.net/Salient?retryWrites=true&w=majority`



app.use((error,req,res,next)=>{
    
})

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('database connected');
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    })
})
.catch(e => {
    console.log(e);
})
