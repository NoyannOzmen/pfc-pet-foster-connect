BEGIN;

DROP TABLE IF EXISTS "ANIMAL", "ASSOCIATION", "ESPECE", "FAMILLE", "TAG", "UTILISATEUR", "ANIMAL_TAG", "DEMANDE";

CREATE TYPE sexe AS ENUM ('Mâle', 'Femelle', 'Inconnu');

CREATE TYPE statut AS ENUM ('En refuge', "En famille d'accueil", 'Adopté');

CREATE TYPE statut_demande AS ENUM ('En attente', 'Validée', 'Refusée');


CREATE TABLE ANIMAL (
  PRIMARY KEY (animal_id),
  animal_id        INT NOT NULL,
  nom              TEXT NOT NULL,
  couleur          TEXT,
  age              INT,
  photo            TEXT,
  sexe             sexe,
  description      TEXT,
  statut           statut,
  association_id   INT NOT NULL,
  famille_id       INT,
  espece_id        INT NOT NULL
);

CREATE TABLE ASSOCIATION (
  PRIMARY KEY (association_id),
  association_id   INT NOT NULL,
  nom              TEXT NOT NULL,
  responsable      TEXT,
  rue              TEXT,
  commune          TEXT,
  code_postal      TEXT,
  pays             TEXT,
  siret            TEXT,
  telephone        TEXT,
  utilisateur_id   VARCHAR(42) NOT NULL,
  UNIQUE (utilisateur_id)
);

CREATE TABLE ANIMAL_TAG(
  PRIMARY KEY (animal_id, tag_id),
  animal_id INT NOT NULL,
  tag_id    INT NOT NULL
);

CREATE TABLE DEMANDE (
  PRIMARY KEY (famille_id, animal_id),
  famille_id      INT NOT NULL,
  animal_id       INT NOT NULL,
  statut_demande  statut_demande
);

CREATE TABLE ESPECE (
  PRIMARY KEY (espece_id),
  espece_id   INT NOT NULL,
  nom         TEXT NOT NULL,
  race        TEXT
);

CREATE TABLE FAMILLE (
  PRIMARY KEY (famille_id),
  famille_id       INT NOT NULL,
  nom              TEXT NOT NULL,
  telephone        TEXT,
  rue              TEXT,
  commune          TEXT,
  code_postal      TEXT,
  pays             TEXT,
  hebergement      TEXT,
  utilisateur_id   VARCHAR(42) NOT NULL,
  UNIQUE (utilisateur_id)
);

CREATE TABLE TAG (
  PRIMARY KEY (tag_id),
  tag_id      INT NOT NULL,
  nom         TEXT,
  description TEXT
);

CREATE TABLE UTILISATEUR (
  PRIMARY KEY (utilisateur_id),
  utilisateur_id   VARCHAR(42) NOT NULL,
  email            TEXT NOT NULL,
  mot_de_passe     TEXT NOT NULL
);

ALTER TABLE ANIMAL ADD FOREIGN KEY (espece_id) REFERENCES ESPECE (espece_id);
ALTER TABLE ANIMAL ADD FOREIGN KEY (famille_id) REFERENCES FAMILLE (famille_id);
ALTER TABLE ANIMAL ADD FOREIGN KEY (association_id) REFERENCES ASSOCIATION (association_id);

ALTER TABLE ASSOCIATION ADD FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEUR (utilisateur_id);

ALTER TABLE CARACTERISER ADD FOREIGN KEY (tag_id) REFERENCES TAG (tag_id);
ALTER TABLE CARACTERISER ADD FOREIGN KEY (animal_id) REFERENCES ANIMAL (animal_id);

ALTER TABLE DEMANDER ADD FOREIGN KEY (animal_id) REFERENCES ANIMAL (animal_id);
ALTER TABLE DEMANDER ADD FOREIGN KEY (famille_id) REFERENCES FAMILLE (famille_id);

ALTER TABLE FAMILLE ADD FOREIGN KEY (utilisateur_id) REFERENCES UTILISATEUR (utilisateur_id);

COMMIT;