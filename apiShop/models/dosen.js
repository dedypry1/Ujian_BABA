var mongoose = require('mongoose')

var DosenSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    nik : {
        type : Number,
        required : true
    },
    
    alamat : {
        type : String,
        required : true
    },
    jurusan : {
        type : String,
        required : true
    },
    foto : {
        type : String
    },
},
{
    timestamps : true
})

var Dosen = module.exports = mongoose.model('dosens', DosenSchema)