var mongoose = require('mongoose')

var MatkulSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    categories : {
        type : String,
        required : true
    },
},
{
    timestamps : true
})

var Matkul = module.exports = mongoose.model('matkuls', MatkulSchema)