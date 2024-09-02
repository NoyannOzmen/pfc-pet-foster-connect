import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Caracteriser extends Model {}

Caracteriser.init(
    {
        animal_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelize,
        tableName: 'animal_tag',
    }
);

export { Caracteriser };