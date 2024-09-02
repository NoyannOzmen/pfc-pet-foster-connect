import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Animal extends Model {}

Animal.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: true,
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
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    statut: {
      type: DataTypes.ENUM,
      allowNull: true,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'animal'
  }
);

export { Animal };