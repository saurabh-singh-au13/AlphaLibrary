
require('./db')
require('dotenv').config()
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = 5000
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL2, { useNewUrlParser: true})

// const db = mongoose.connection
// db.on('error',(err)=>{
//     console.error("connection error please do check;", err);
// });
// db.once('open', () => console.log('connected to mongoose'))


app.use('/', indexRouter)

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
  })
  