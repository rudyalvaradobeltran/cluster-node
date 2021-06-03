const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Executing... Random number: '+Math.floor(Math.random() * 100))
    console.clear()
    res.send('Hello')
})
app.listen(5000)
console.log('Running...')