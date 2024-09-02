import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';

class Animal extends Model {}

Animal.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    couleur: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sexe: {
      type: DataTypes.ENUM,
      values: ['Mâle', 'Femelle', 'Inconnu'],
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    statut: {
      type: DataTypes.ENUM,
      values: ['Au refuge', "En famille d'accueil", 'Adopté'],
      allowNull: true,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'animal'
  }
);

export { Animal };

/**
 * A Animal
 * @typedef  {object} Animal
 * @property {string} id.required - Identifiant
 * @property {string} nom.required - Nom
 * @property {string} couleur - Couleur
 * @property {number} age - Age
 * @property {string} photo - Photo
 * @property {string} sexe - Enum sexe
 * @property {string} description - Description
 * @property {string} statut - Enum statut
 */