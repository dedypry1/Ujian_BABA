const Cart = require('../models/cart')
const Matkul = require('../models/matkul')

 exports.home = (req,res) =>{ 
     res.send("Welcome To API Shop")
}

    exports.tambahMatkul = async (req,res) =>{ 
        const matkuls = new Matkul(req.body)
        const status = await matkuls.save()
        res.send(JSON.stringify({"status" :200, "error" :null}))
    }

exports.addToCart = async (req,res) => {
    const dosenCart = req.params.id
    const matkulCart = req.body.matkulCart
    const qty = Number.parseInt(req.body.qtyCart)

    const dataCart = await Cart.count({dosenCart : dosenCart, matkulCart : matkulCart})
    if(dataCart == 0){
        const data = {
            matkulCart : matkulCart,
            qtyCart : qty,
            dosenCart : dosenCart
        }
        console.log(data)
        const carts = new Cart(data)
        const saveCart = await carts.save()
        res.send(JSON.stringify({"status" : 200, "error" : null,"response" : "Success add to cart"}))
    }else{
        const dataCart = await Cart.find({ dosenCart : dosenCart, matkulCart : matkulCart}).lean()
        dataCart.qtyCart = Number.parseInt(dataCart.qtyCart) + qty
        const updateCart = await Cart.updateOne({_id : dataCart._id}, dataCart)
        res.send(JSON.stringify({"status" : 200, "error": null, "response" : "Success add to cart"}))
    }
    }

const showDataCart = async (idDosen) => {
    const data = await Cart.find({ dosenCart : idDosen}).populate('matkulCart').lean()
    data.forEach(row => {
        row.subTotal = Number.parseInt(row.matkulCart.price) * row.qtyCart
    })
    return data
}

exports.showCart = async (req,res) =>{
    const idDosen = req.params.id
    const data = await showDataCart(idDosen)
    res.send(JSON.stringify({"status": 200, "error" : null, "response" : data}))
}

exports.editCart = async (req,res) => {
    const dosenCart = req.params.id
    const matkulCart = req.body.matkulCart
    const qty = Number.parseInt(req.body.qtyCart)
    if(qty > 0){
        const dataCart = await Cart.findOneAndUpdate({dosenCart : dosenCart, matkulCart : matkulCart},{qtyCart : qty})
    }else if(qty <= 0){
        const deleteCart = await Cart.findByIdAndDelete({ dosenCart : dosenCart, matkulCart : matkulCart
        })
    }
    const data = await showDataCart(dosenCart)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : data}))
}

exports.deleteCart = async (req,res) =>{
    const dosenCart = req.params.id
    const matkulCart = req.body.matkulCart
    const deleteCart = await Cart.findByIdAndDelete({dosenCart : dosenCart, matkulCart: matkulCart})
    const data = await showDataCart(dosenCart)
    res.send(JSON.stringify({"status": 200, "error" : null, "response" : data}))
}

exports.removeCart = async (req,res) => {
    const dosenCart = req.params.id
    const hapusCart = await Cart.deleteMany({dosenCart : dosenCart})
    res.send(JSON.stringify({"status" : 200, "error" : null, "response" : "Cart Deleted"}))
}

exports.checkOut = async (req,res) => {
    const dosenCart = req.params.id
    const dataCart = await Cart.count({dosenCart : dosenCart})
    if(dataCart <= 0){
        res.status(400)
    }else{
        let total = 0
        const data = await showDataCart(dosenCart)
        data.forEach(row => {
            total = total + row.subTotal
        })
        const dataSave = {
            dosenOrder : dosenCart,
            totalOrder : total
        }

        data.forEach(async rows => {
            const dataDetail = {
                idOrder : saveOrder._id,
                matkulOrder : rows.matkulCart._id,
                qtyOrder : rows.qtyCart,
                subTotalOrder : rows.subTotal
            }
            const details = new OrderDetail(dataDetail)
            const saveDetail = await details.save()
        })
        const hapusCart = await Cart.deleteMany({dosenCart : dosenCart})
        res.send(JSON.stringify({ "status" : 200, "error" : null, "response" : "Alhamdulillah dapet Rejeki"}))
    }
}
