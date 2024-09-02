import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Famille extends Model {}

Famille.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rue: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    commune: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    code_postal: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pays: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hebergement: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'famille'
  }
);

export { Famille };

/**
 * A Association
 * @typedef  {object} Association
 * @property {string} id.required - Identifiant
 * @property {string} nom.required - Nom
 * @property {string} telephone - N° téléphone
 * @property {string} rue - Rue
 * @property {string} commune - Commune
 * @property {string} code_postal - Code Postal
 * @property {string} ville - Ville
 * @property {string} pays - Pays
 * @property {string} hebergement - Type d'hébergement
 */