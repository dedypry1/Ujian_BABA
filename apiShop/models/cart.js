var mongoose = require ('mongoose')

var CartSchema = mongoose.Schema({
    dosenCart : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'dosen'
    },
    matkulCart : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'matkul'
    },
    qtyCart : {
        type : String,
        required : true
    },
},
{
    timestamps : true
})

var Cart = module.exports = mongoose.model ('carts', CartSchema)