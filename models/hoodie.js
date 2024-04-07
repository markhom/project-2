const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creating different types of clothing

const Hoodie = sequelize.define( 'Hoodie',
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
        modelName: 'hoodie',
      }
);

module.exports = Hoodie;

