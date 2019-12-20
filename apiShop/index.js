const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

// connection mongodb
mongoose.connect('mongodb://localhost/ujian_api')
.then(db => console.log ('db connected'))
.catch(err => console.log (err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

require ('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
    console.log('berhasil menjalankan port 8000')
})