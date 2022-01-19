const express = require('express')
const router = express.Router()
const Batucontroller = require('../controller/Batu')


router.route('/Batu')
    .get(Batucontroller.index)
    .post(Batucontroller.tambah)

router.put('/Batu/:id', function(req, res) {
    const id = req.params.id
    Batu.filter(bt => {
        if (bt.id == id) {
            bt.id = id
            bt.chBatu = req.body.chBatu
            bt.volBatu = req.body.volBatu

            return Batu
        }
    })
    res.json(Batu)
})
router.delete('/Batu/:id', function(req, res) {
    const id = req.params
    res.send(id)
})
module.exports = router