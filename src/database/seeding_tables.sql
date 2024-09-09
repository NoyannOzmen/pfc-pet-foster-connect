BEGIN;

INSERT INTO "utilisateur"
  ("id", "email", "mot_de_passe")
VALUES
  ( 1, 'b.campbell@pet-smart.fr', 'boomstick'),
  ( 2, 'j.lopez@mail.io', 'saintesmaries' )
;

INSERT INTO "association"
  ("id", "nom", "responsable", "rue", "commune", "code_postal", "pays", "siret", "telephone", "utilisateur_id")
VALUES
  ( 1, 'PetSmart', 'B. Campbell', '38 rue des pinèdes', 'Paris', '75020', 'France', '732 829 320 00074', '01 45 49 36 17', 1)
;

INSERT INTO "famille"
  ("id", "nom", "telephone", "rue", "commune", "code_postal", "pays", "hebergement", "utilisateur_id")
VALUES 
  ( 1, 'Lopez', '02 48 37 14 15', '1 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 2)
;

INSERT INTO "espece"
  ("id", "nom" )
VALUES
  ( 1, 'Chat' )
;

INSERT INTO "animal"
  ("id", "nom", "race", "couleur", "age", "sexe", "description", "statut", "association_id", "espece_id")
VALUES
  ( 1, 'Chat', 'Angora', 'Noir', 4, 'Mâle', 'Un chat', 'Accueilli', 1, 1),
  (2, 'Animal2', 'Angora', 'Rouge',20,'Mâle','un autre chat','En refuge',1,1),
  (3, 'Animal3', 'Angora', 'bleu',20,'Mâle','un autre chat','En refuge',1,1),
  (4, 'Animal4', 'Angora', 'à pois verts',20,'Mâle','un autre chat','En refuge',1,1),
  

;

INSERT INTO "media"
  ("id", "url", "ordre", "animal_id", "association_id")
VALUES
  ( 1, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 1, NULL ),
  ( 3, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 2, NULL ),
  ( 4, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 3, NULL ),
  ( 5, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 4, NULL )
  ( 2, 'https://www.refuge-a-chats.io', 1, NULL, 1)
;

INSERT INTO "tag"
  ("id", "nom", "description")
VALUES
  ( 1,'Besoin spécifiques', 'Nécessite des ajustements particuliers')
;

SELECT
    setval(
        'utilisateur_id_seq',
        (
            SELECT
                MAX(id)
            from
                "utilisateur"
        )
    );

SELECT
    setval(
        'association_id_seq',
        (
            SELECT
                MAX(id)
            from
                "association"
        )
    );

SELECT
    setval(
        'famille_id_seq',
        (
            SELECT
                MAX(id)
            from
                "famille"
        )
    );

SELECT
    setval(
        'espece_id_seq',
        (
            SELECT
                MAX(id)
            from
                "espece"
        )
    );

SELECT
    setval(
        'animal_id_seq',
        (
            SELECT
                MAX(id)
            from
                "animal"
        )
    );

SELECT
    setval(
        'media_id_seq',
        (
            SELECT
                MAX(id)
            from
                "media"
        )
    );


SELECT
    setval(
        'tag_id_seq',
        (
            SELECT
                MAX(id)
            from
                "tag"
        )
    );

COMMIT;