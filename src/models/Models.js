import { Animal } from './Animal.js';
import { Caracteriser } from './Caracteriser.js';
import { Demander } from './Demander.js';
import { Famille } from './Famille.js';
import { Tag } from './Tag.js';

Tag.belongsToMany(Animal, {
  foreignKey: 'code_tag',
  otherKey: 'code_animal',
  through: Caracteriser,
  as: "animaux"
});

Animal.belongsToMany(Tag, {
  foreignKey: 'code_animal',
  otherKey: 'code_tag',
  through : Caracteriser,
  as: "tags"
});

Tag.belongsToMany(Animal, {
  foreignKey: 'code_tag',
  otherKey: 'code_animal',
  through: Caracteriser,
  as: "animaux"
});
 
Animal.belongsToMany(Famille, {
  foreignKey: 'code_animal',
  otherKey: 'code_famille',
  through : Demander,
  as: "demandes"
});

Famille.belongsToMany(Animal, {
  foreignKey: 'code_famille',
  otherKey: 'code_animal',
  through: Demander,
  as: "animaux"
});


export { Animal, Caracteriser, Demander, Famille, Tag }