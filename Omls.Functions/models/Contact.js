module.exports = (sequelize, DataTypes) => {    
  const Contact = sequelize.define('Contact', {
      name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              isEmail: true
          }
      },
      phone: {
          type: DataTypes.STRING,
          allowNull: false
      },
      message: {
          type: DataTypes.TEXT,
          allowNull: true
      }
  });
  return Contact;
}