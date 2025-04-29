'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env];
const db = {};

let sequelize;
if (config.database_url) {
  sequelize = new Sequelize(config.database_url, {
    dialect: 'mysql',
    ssl: config.ssl || false,
  });
} else {
  sequelize = new Sequelize('careers', 'invtphtfov@omls-backend-server-database', 'orcimed@123', {
    host: 'omls-backend-server-database.mysql.database.azure.com',
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        require: true
      }
    },
    logging: false,
    pool: {
      max: 10,
      min: 1,
      acquire: 30000,
      idle: 10000
    }
  });
  
}

fs.readdirSync(__dirname)
  .filter(file =>
    file.endsWith('.js') &&
    file !== basename &&
    !file.endsWith('.test.js')
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
