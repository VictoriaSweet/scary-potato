const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Plant extends Model { }

Plant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        plant_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edible: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        poisonous: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        cycle: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        watering: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        sunlight: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        indoor: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'plant',
    }
);

module.exports = Plant;