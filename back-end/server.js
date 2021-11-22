const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Inisiasi port yang akan dipakai
const PORT = 3000;

//Memanggil model
const db = require('./app/models/index');

//Deklarasi express.js
const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

// Migrasi tabel yang ada dalam setiap model
db.sequelize.sync({ force: false });

//Inisasi routing pada halaman awal
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Capstone App!'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})