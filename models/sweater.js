const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creating different types of clothing

const Sweater = sequelize.define( 'Sweater',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'sweater',
      }
);

module.exports = Sweater;

