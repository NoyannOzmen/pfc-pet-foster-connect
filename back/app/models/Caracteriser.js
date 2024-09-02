import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Caracteriser extends Model {}

Caracteriser.init(
    {
        code_animal: DataTypes.INTEGER,
        code_tag: DataTypes.INTEGER,
    },
    {
        sequelize: sequelize,
        tableName: 'animal_tag',
    }
);

export { Caracteriser };