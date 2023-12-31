const express = require('express');
const invoiceRoutes = require('./routes/invoiceItems.js')
const dotenv = require('dotenv').config()
const handleDbConnect = require('./middlewares/handleDB.js')

const app = express()
const port = 5000

handleDbConnect()
app.use(express.json())

app.use('/', invoiceRoutes)
app.listen(port,()=> {
    console.log("listening at 5000")
})


