const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Metro Backend Working!' })
})

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
})
