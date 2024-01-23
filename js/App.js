const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
    res.sendFile( path.join(__dirname, '../index.html') )
})

app.post('/form', (req, res)=>{
    const { nome, senha } = req.body

    if(nome === 'Lucas' && senha === 'senha')
        res.send('okay')

    else
        res.send('not correct')

})

app.listen(8080)

