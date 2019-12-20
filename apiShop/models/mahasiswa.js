var mongoose = require('mongoose')

var MahasiswaSchema = mongoose.Schema({
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

var Mahasiswa = module.exports = mongoose.model('mahasiswas', MahasiswaSchema)