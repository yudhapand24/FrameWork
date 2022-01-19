const { response } = require("express");
const express = require("express");
const BatuRouter = require("./router/batu");
const app = express();


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

var myLogger = function(req, res, next) {
    console.log("LOGGED");
    next();
};
app.use(myLogger);

const requestTime = function(req, res, next) {
    date = new Date();
    console.log(date);
    next();
}
app.use(requestTime);
app.set('view engine', 'ejs')

app.get("/", function(req, res) {
    const tanggal = "Hello Selamat Datang Di Tempat Penjualan Batu - Batuan Gaesss!!!!  </br>" + "<p><small>Rquest at:" + date + "</small>";
    res.send(tanggal);
});
app.use(BatuRouter)

app.get("/", function(req, res) {
    const Batu = {
        No: 0001,
        Nama: "",
    };
    respon.render('home')
});

app.listen(3000, function() {
    console.log('server berjalan lancar');
});