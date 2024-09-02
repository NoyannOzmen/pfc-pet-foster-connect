import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Animal_Tag extends Model {}

Animal_Tag.init(
    {
        animal_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER,
    },
    {
        sequelize: sequelize,
        tableName: 'animal_tag',
    }
);

export { Animal_Tag };