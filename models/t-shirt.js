const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Creating different types of clothing

const TeeShirt = sequelize.define( 'TeeShirt',
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
    }
);

module.exports = TeeShirt;

