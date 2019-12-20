const Matkul = require ('../models/matkul')

exports.home = ( req, res) => {
    res.send("wellcome to API Shop")
}

exports.listMatkul = async ( req, res) => {
    let data = await Matkul.find ()
    res.send(JSON.stringify({ 
        "status" : 200,
        "error" : null,
        "response" : data
    }))
}

exports.detailMatkul = async ( req, res) => {
    let data = await Matkul.findById (req.params.id)
    res.send(JSON.stringify({ 
        "status" : 200,
        "error" : null,
        "response" : data
    }))
}

exports.tambahMatkul = async ( req, res) => {
    const matkuls = new Matkul(req.body)
    const status = await matkuls.save()
    res.send(JSON.stringify({ 
        "status" : 200,
        "error" : null,
        "response" : status
    }))
}

exports.ubahMatkul = async ( req, res) => {
    const {id} = req.params
    const status = await Matkul.update({id : id}, req.body)
    res.send(JSON.stringify({ 
        "status" : 200,
        "error" : null,
        "response" : status
    }))
}

exports.hapusMatkul = async ( req, res) => {
    let {id} = req.params
    const status = await Matkul.remove({_id : id})
    res.send(JSON.stringify({ 
        "status" : 200,
        "error" : null,
        "response" : status
    }))
}