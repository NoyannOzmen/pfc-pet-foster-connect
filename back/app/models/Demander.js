import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Demander extends Model {}

Demander.init(
    {
        code_famille: DataTypes.INTEGER,
        code_animal: DataTypes.INTEGER,
        statut_demande: DataTypes.ENUM
    },
    {
        sequelize: sequelize,
        tableName: 'demande',
    }
);

export { Demander };