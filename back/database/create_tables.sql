BEGIN;

DROP TABLE IF EXISTS "ANIMAL", "ASSOCIATION", "ESPECE", "FAMILLE", "TAG", "UTILISATEUR", "CARACTERISER", "DEMANDE";

CREATE TABLE ANIMAL (
  PRIMARY KEY (code_animal),
  code_animal      INT NOT NULL,
  nom              TEXT,
  couleur          TEXT,
  age              INT,
  photo            TEXT,
  sexe             ENUM,
  description      TEXT,
  statut           ENUM,
  code_association INT NOT NULL,
  code_famille     INT,
  code_espece      INT NOT NULL
);

CREATE TABLE ASSOCIATION (
  PRIMARY KEY (code_association),
  code_association INT NOT NULL,
  nom              TEXT,
  responsable      TEXT,
  rue              TEXT,
  commune          TEXT,
  code_postal      TEXT,
  pays             TEXT,
  siret            TEXT,
  telephone        TEXT,
  code_utilisateur VARCHAR(42) NOT NULL,
  UNIQUE (code_utilisateur)
);

CREATE TABLE CARACTERISER (
  PRIMARY KEY (code_animal, code_tag),
  code_animal INT NOT NULL,
  code_tag    INT NOT NULL
);

CREATE TABLE DEMANDER (
  PRIMARY KEY (code_famille, code_animal),
  code_famille   INT NOT NULL,
  code_animal    INT NOT NULL,
  statut_demande ENUM
);

CREATE TABLE ESPECE (
  PRIMARY KEY (code_espece),
  code_espece INT NOT NULL,
  nom         TEXT NOT NULL,
  race        TEXT
);

CREATE TABLE FAMILLE (
  PRIMARY KEY (code_famille),
  code_famille     INT NOT NULL,
  nom              TEXT,
  telephone        TEXT,
  rue              TEXT,
  commune          TEXT,
  code_postal      TEXT,
  pays             TEXT,
  hebergement      TEXT,
  code_utilisateur VARCHAR(42) NOT NULL,
  UNIQUE (code_utilisateur)
);

CREATE TABLE TAG (
  PRIMARY KEY (code_tag),
  code_tag    INT NOT NULL,
  nom         TEXT,
  description TEXT
);

CREATE TABLE UTILISATEUR (
  PRIMARY KEY (code_utilisateur),
  code_utilisateur VARCHAR(42) NOT NULL,
  email            TEXT NOT NULL,
  mot_de_passe     TEXT NOT NULL
);

ALTER TABLE ANIMAL ADD FOREIGN KEY (code_espece) REFERENCES ESPECE (code_espece);
ALTER TABLE ANIMAL ADD FOREIGN KEY (code_famille) REFERENCES FAMILLE (code_famille);
ALTER TABLE ANIMAL ADD FOREIGN KEY (code_association) REFERENCES ASSOCIATION (code_association);

ALTER TABLE ASSOCIATION ADD FOREIGN KEY (code_utilisateur) REFERENCES UTILISATEUR (code_utilisateur);

ALTER TABLE CARACTERISER ADD FOREIGN KEY (code_tag) REFERENCES TAG (code_tag);
ALTER TABLE CARACTERISER ADD FOREIGN KEY (code_animal) REFERENCES ANIMAL (code_animal);

ALTER TABLE DEMANDER ADD FOREIGN KEY (code_animal) REFERENCES ANIMAL (code_animal);
ALTER TABLE DEMANDER ADD FOREIGN KEY (code_famille) REFERENCES FAMILLE (code_famille);

ALTER TABLE FAMILLE ADD FOREIGN KEY (code_utilisateur) REFERENCES UTILISATEUR (code_utilisateur);

COMMIT;