module.exports = (sequelize, DataTypes) => {    
    const Posts = sequelize.define('Posts', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
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
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        previousJobTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        previousJobStartDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        previousJobEndDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        previousJobDescription: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });
    return Posts;
}