import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Espece extends Model {}

Espece.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    race: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'espece'
  }
);

export { Espece };