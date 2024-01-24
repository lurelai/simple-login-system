const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    const { userName, userPassword } = req.body

    if(userName === 'Lucas' && userPassword === 'Ariel')
        res.send('Logged')

    else
        res.send('Not Logged')
})

module.exports = router;

