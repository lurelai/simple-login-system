const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.sendFile( path.join(__dirname, '../views/index.html') )
})
    
app.listen(8080)

