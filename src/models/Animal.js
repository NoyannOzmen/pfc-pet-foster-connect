import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelizeClient.js';

class Animal extends Model {}

Animal.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    race: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    couleur: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo_principale: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo_secondaire: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    photo_tertiaire: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sexe: {
      type: DataTypes.ENUM,
      values: ['Mâle', 'Femelle', 'Inconnu'],
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    statut: {
      type: DataTypes.ENUM,
      values: ['Au refuge', 'Accueilli', 'Adopté'],
      allowNull: false,
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
 * @property {string} race - Race
 * @property {string} couleur - Couleur
 * @property {number} age - Age
 * @property {string} photo - Photo
 * @property {string} sexe - Enum sexe
 * @property {string} description - Description
 * @property {string} statut - Enum statut
 */