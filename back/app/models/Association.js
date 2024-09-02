import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Association extends Model {}

Association.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    responsable: {
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
    SIRET: {
      type: DataTypes.ENUM,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'association'
  }
);

export { Association };