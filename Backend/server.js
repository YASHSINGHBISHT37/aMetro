const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the Metro App')
})

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})