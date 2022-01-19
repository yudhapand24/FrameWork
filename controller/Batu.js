let Batu = [
    { id: 01, chBatu: '1030', volBatu: 100 },
    { id: 02, chBatu: '1031', volBatu: 100 }
]

module.exports = {
    index: function(req, res) {
        if (Batu.length > 0) {
            res.json({
                status: true,
                data: Batu,
                method: req.method,
                URL: req.url,
                tanggal: new Date
            })
        } else {
            res.json({
                status: false,
                massage: 'DATA Batu MASIH KOSONG'
            })
        }
    },
    tambah: function(re, res) {
        Batu.push(req.body)
        res.send({
            status: true,
            data: Batu,
            massage: 'DATA Batu BERHASIL DITAMBAHKAN',
            method: req.method,
            url: req.url
        })
    }
}