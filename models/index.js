const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('Connected with database!')
})
.catch(err => {
    console.log("Couldn't connect with database!" + err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//creating tables here

db.users = require('./user.model')(sequelize, DataTypes)
db.customers = require('./customer.model')(sequelize, DataTypes)
db.architects = require('./architect.model')(sequelize, DataTypes)
db.architect_reviews = require('./architect_review.model')(sequelize, DataTypes)
db.roles = require('./role.model')(sequelize, DataTypes)
db.contact_us = require('./contactus.model')(sequelize, DataTypes)

//force: false for everytime not create the table forcely
db.sequelize.sync({ force: false })
.then(() => {
    console.log('Dtabase re-sync done')
})

//One to many relationship between  Architects and Architect's reviews

db.architects.hasMany(db.architect_reviews, {
    foreignKey: 'architect_id',
    as: 'review' 
})

db.architect_reviews.belongsTo(db.architects, {
    foreignKey: 'architect_id',
    as: 'architect'
})


module.exports = db;