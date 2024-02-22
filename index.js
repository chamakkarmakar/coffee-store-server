const express = require ("express")
const cors = require ("cors")
const app = express()
const port = process.env.PORT || 5000;

// middleware 
app.use(cors())
app.use(express.json())

// Root 
app.get('/', (req, res) => {
    res.send('coffee management store')
  })

  app.listen(port, () => {
    console.log(`coffee listening on port ${port}`)
  })
