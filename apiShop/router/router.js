const matkulsController = require ('../controller/matkulsController')
const mahasiswasController = require ('../controller/mahasiswasController')
const dosensController = require ('../controller/dosensController')
const cartController =require ('../controller/cartController')


module.exports = app => {
    app.get('/', matkulsController.home)
    app.get('/', dosensController.home)
    app.get('/', mahasiswasController.home)
    app.get('/', cartController.home)




    // api matkul
    app.get('/matkuls', matkulsController.listMatkul)
    app.get('/matkuls/:id', matkulsController.detailMatkul)
    app.post('/matkuls/', matkulsController.tambahMatkul)
    app.put('/matkuls', matkulsController.ubahMatkul)
    app.delete('/matkuls/:id',matkulsController.hapusMatkul)

    // api dosens
    app.get('/dosens', dosensController.listDosen)
    app.get('/dosens/:id', dosensController.detailDosen)
    app.post('/dosens/', dosensController.tambahDosen)
    app.put('/dosens', dosensController.ubahDosen)
    app.delete('/dosens/:id',dosensController.hapusDosen)

    // api mahasiswas
    app.get('/mahasiswas', mahasiswasController.listMahasiswa)
    app.get('/mahasiswas/:id', mahasiswasController.detailMahasiswa)
    app.post('/mahasiswas/', mahasiswasController.tambahMahasiswa)
    app.put('/mahasiswas', mahasiswasController.ubahMahasiswa)
    app.delete('/mahasiswas/:id',mahasiswasController.hapusMahasiswa)

    //api cart
    app.post('/cart/:id', cartController.addToCart)
    app.get('/cart/:id', cartController.showCart)
    app.put('/cart/:id', cartController.editCart)
    app.delete('/cart/:id', cartController.deleteCart)
    app.get('/cart/remove/:id', cartController.removeCart)

    //api checkout
    app.get('/cart/checkout/:id', cartController.checkOut)






}