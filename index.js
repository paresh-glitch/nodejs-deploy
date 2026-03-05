import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({msg: 'hello from server'})
})

app.listen(PORT, () => {
    console.log(`erver is up and running on PORT ${PORT}`)
})