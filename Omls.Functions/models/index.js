const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const fs = require('fs');
const basename = path.basename(__filename);
const db = {};
const certPath = path.resolve(__dirname, '../config/ssl/DigiCertGlobalRootG2.crt.pem');
const sequelize = new Sequelize('careers', 'invtphtfov@omls-backend-server-database.mysql.database.azure.com', 'orcimed@123', {
  host: 'omls-backend-server-database.mysql.database.azure.com',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      ca: fs.readFileSync(certPath),
      rejectUnauthorized: true
    }
  },
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('✅ MySQL connection to Azure established successfully.');
  })
  .catch(err => {
    console.error('❌ Unable to connect to Azure MySQL:', err);
  });

// Load models
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
