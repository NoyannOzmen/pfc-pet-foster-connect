import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Media extends Model {}

Media.init(
  {
    animal_id: DataTypes.INTEGER,
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ordre: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'media'
  }
);

export { Media };

/**
 * A Tag
 * @typedef  {object} Media
 * @property {string} id.required - Identifiant
 * @property {string} url.required - Photo principale
 * @property {string} ordre.required - Ordre d'affichage
 */