import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Demande extends Model {}

Demande.init(
    {
        famille_id: DataTypes.INTEGER,
        animal_id: DataTypes.INTEGER,
        statut_demande: {
            type: DataTypes.ENUM,
            values: ['En attente', 'Validée', 'Refusée'],
            allowNull: false,
          }
    },
    {
        sequelize: sequelize,
        tableName: 'demande',
    }
);

export { Demande };