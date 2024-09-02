import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Famille extends Model {}

Famille.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: true,
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