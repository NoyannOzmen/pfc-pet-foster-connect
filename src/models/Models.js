import { Animal } from './Animal.js';
import { Animal_Tag } from './Animal_Tag.js';
import { Association, Association} from './Association.js';
import { Demande } from './Demande.js';
import { Espece } from './Espece.js';
import { Famille } from './Famille.js';
import { Tag } from './Tag.js';
import { Utilisateur, Utilisateur, Utilisateur, Utilisateur} from './Utilisateur.js';

/* Relations One-to-One : Association <-> Utilisateur <-> Famille */

Association.belongsTo(Utilisateur, {
  foreignKey: 'utilisateur_id',
  as: 'identifiant',
})

Famille.belongsTo(Utilisateur, {
  foreignKey: 'utilisateur_id',
  as: 'identifiant',
})



/* Relation One-to-Many : Association <-> Animal */

Association.hasMany(Animal, {
  foreignKey: 'association_id',
  as : 'animaux'
});

Animal.belongsTo(Association, {
  foreignKey: 'association_id',
  as: 'refuge'
});

/* Relation One-to-Many : Espèce <-> Animal */

Espece.hasMany(Animal, {
  foreignKey: 'espece_id',
  as : 'animaux'
});

Animal.belongsTo(Espece, {
  foreignKey: 'espece_id',
  as: 'espece'
});

/* Relation One-to-Many : Famille <-> Animal */

Famille.hasMany(Animal, {
  foreignKey: 'famille_id',
  as : 'animaux'
});

Animal.belongsTo(Famille, {
  foreignKey: 'famille_id',
  as: 'accueillant'
});


/* Relation One-to-Many : Espèce <-> Animal */

Espece.hasMany(Animal, {
  foreignKey: 'espece_id',
  as : 'animaux'
});

Animal.belongsTo(Espece, {
  foreignKey: 'espece_id',
  as: 'espece'
});

/* Relation Many-to-Many : Tag <-> Animal */

Tag.belongsToMany(Animal, {
  foreignKey: 'code_tag',
  otherKey: 'code_animal',
  through: Animal_Tag,
  as: "animaux"
});

Animal.belongsToMany(Tag, {
  foreignKey: 'code_animal',
  otherKey: 'code_tag',
  through : Animal_Tag,
  as: "tags"
});

/* Relation Many-to-Many : Animal <-> Famille */

Animal.belongsToMany(Famille, {
  foreignKey: 'code_animal',
  otherKey: 'code_famille',
  through : Demande,
  as: "demandes"
});

Famille.belongsToMany(Animal, {
  foreignKey: 'code_famille',
  otherKey: 'code_animal',
  through: Demande,
  as: "animaux"
});


export { Animal, Animal_Tag, Association, Demande, Espece, Famille, Tag, Utilisateur }