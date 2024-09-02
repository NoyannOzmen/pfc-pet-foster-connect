import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

class Tag extends Model {}

Tag.init(
  {
    nom: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  },
  {
    sequelize: sequelize,
    tableName: 'tag'
  }
);

export { Tag };