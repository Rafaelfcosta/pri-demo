const express = require('express')
const bodyParser = require('body-parser')

const index = require('./app/routes/index')
const demoRouter = require('./app/routes/demoRouter')

const app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/', index)
app.use('/demo', demoRouter)

app.listen(port, () => {
  console.log('We are live on ' + port)
})
