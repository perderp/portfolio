const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const indexRouter = require('./src/router/indexRouter')

app.set('view engine' , 'ejs')
app.set('views', path.join(__dirname, './src/views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/public',express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

const PORT = process.env.PORT || 4000 
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
