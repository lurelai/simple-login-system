const express = require('express')
const path = require('path')
const form = require('../routes/form.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/form', form)

app.get('/', (req, res)=>{
    res.sendFile( path.join(__dirname, '../views/index.html') )
})
    
app.listen(8080)

