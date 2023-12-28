import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000
app.use(cors())
app.get('/', (req, res) => {
  res.send({ message: 'Hello World !' })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})