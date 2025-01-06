const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

require('./Models/db')

const TaskRouter = require('./Routes/TaskRouter')
const PORT = process.env.PORT || 8080 

const bodyParser = require('body-parser')


app.use(bodyParser.json()) 
app.use('/tasks',TaskRouter)
  

app.listen(PORT,()=>{
    console.log(`server is running on port = ${PORT}` )
}) 



