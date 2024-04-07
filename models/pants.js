const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creating different types of clothing

const Pants = sequelize.define( 'Pants',
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
        modelName: 'pants',
      }
);

module.exports = Pants;

