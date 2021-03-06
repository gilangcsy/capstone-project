const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Inisiasi port yang akan dipakai
const PORT = 3000;

//Memanggil model
const db = require('./app/models/index');

//Deklarasi express.js
const app = express();

//use box icons for FE => devMode (by ayub)
// app.use("/icons", express.static(path.join(__dirname, "../node_modules/boxicons")));

app.use(cors());
app.use(bodyParser.json());

// app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

// Migrasi tabel yang ada dalam setiap model
db.sequelize.sync({ force: false });

//Inisasi routing pada halaman awal
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Capstone App!',
  });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/post.routes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
