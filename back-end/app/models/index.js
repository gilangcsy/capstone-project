//Memamnggil data-data kongigurasi database
const dbConfig = require('../configs/db.config');

const Sequelize = require('sequelize');

//Konifgurasi database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    timezone: dbConfig.timezone,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Memanggil model-model yang sudah dibuat
db.user = require('./user.model')(sequelize, Sequelize);
db.post = require('./post.model')(sequelize, Sequelize);

db.user.hasMany(db.post);
db.post.belongsTo(db.user);


module.exports = db;