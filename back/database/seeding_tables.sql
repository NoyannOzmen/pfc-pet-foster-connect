BEGIN;

INSERT INTO "ANIMAL"
  ("nom", "couleur", "age", "photo", "sexe", "description", "statut", "code_association", "code_espece")
VALUES
  ( 'Chat', 'Noir', 4, "", "Mâle", "Un chat", "Au refuge", 1, 1)
;

INSERT INTO "ASSOCIATION"
  ("nom", "responsable", "rue", "commune", "code_postal", "pays", "siret", "telephone", "code_utilisateur")
VALUES
  ('PetSmart', 'B. Campbell', '38 rue des pinèdes', 'Paris', '75020', 'France', '732 829 320 00074', '01 45 49 36 17', 1)
;

INSERT INTO "ESPECE"
  ("nom", "race")
VALUES
  ('Chat', "Angora")
;

INSERT INTO "FAMILLE"
  ("nom", "telephone", "rue", "commune", "code_postal", "pays", "hebergement", "code_utilisateur")
VALUES 
  ('Lopez', '02 48 37 14 15', '1 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 2)
;

INSERT INTO "TAG"
  ("nom", "description")
VALUES
  ('Besoin spécifiques', 'Nécessite des ajustements particuliers')
;

INSERT INTO "UTILISATEUR"
  ("email", "mot_de_passe")
VALUES
  ( 'b.campbell@pet-smart.fr', 'boomstick'),
  ( 'j.lopez@mail.io', 'saintesmaries' )
;

COMMIT;