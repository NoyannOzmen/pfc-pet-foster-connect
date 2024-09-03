import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Espece extends Model {}

Espece.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'espece'
  }
);

export { Espece };

/**
 * A Espece
 * @typedef  {object} Espece
 * @property {string} id.required - Identifiant
 * @property {string} nom.required - Nom
 */