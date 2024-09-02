import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Utilisateur extends Model {}

Utilisateur.init(
  {
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mot_de_passe: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'utilisateur'
  }
);

export { Utilisateur };