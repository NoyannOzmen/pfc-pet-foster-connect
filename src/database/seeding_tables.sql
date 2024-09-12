BEGIN;

INSERT INTO "utilisateur"
  ("id", "email", "mot_de_passe")
VALUES
  ( 1, 'b.campbell@pet-smart.fr', 'boomstick'),
  ( 2, 'j.lopez@mail.io', 'saintesmaries' ),
  ( 3, 'j.lolopez@mail.io', 'saintesmaries' ),
  ( 4, 'jiji.lopez@mail.io', 'saintesmaries' ),
  ( 5, 'Juju.lopez@mail.io', 'saintesmaries' ),
  ( 6, 'jiju.lopez@mail.io', 'saintesmaries' ),
  ( 7, 'jaja.lopez@mail.io', 'saintesmaries' )
;

INSERT INTO "association"
  ("id", "nom", "responsable", "rue", "commune", "code_postal", "pays", "siret", "telephone", "utilisateur_id")
VALUES
  ( 1, 'PetSmart', 'B. Campbell', '38 rue des pinèdes', 'Paris', '75020', 'France', '732 829 320 00074', '01 45 49 36 17', 1),
  ( 2, 'Asso2', 'B. Campbell', '38 rue des pinèdes', 'Toulouse', '31000', 'France', '732 829 320 00072', '01 45 49 36 13', 3),
  ( 3, 'Asso3', 'BB. Campbell', '39 rue des pinèdes', 'Limoges', '87000', 'France', '732 829 320 00070', '01 45 49 36 10', 4)
;

INSERT INTO "famille"
  ("id", "nom", "telephone", "rue", "commune", "code_postal", "pays", "hebergement", "utilisateur_id")
VALUES 
  ( 1, 'Lopez', '02 48 37 14 15', '1 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 2),
  ( 2, 'Martin', '02 48 37 14 15', '2 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 5),
  ( 3, 'Chatmere', '02 48 37 14 15', '3 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 6),
  ( 4, 'Zébulon', '02 48 37 14 15', '4 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 7)
;

INSERT INTO "espece"
  ("id", "nom" )
VALUES
  ( 1, 'Chat' ),
  (2, 'Chien'),
  (3, 'Ornythorinque'),
  (4, 'Capybara'),
  (5, 'Champignon'),
  (6, 'Mystère')
;

INSERT INTO "animal"
  ("id", "nom", "race", "couleur", "age", "sexe", "description", "statut", "association_id", "espece_id")
VALUES
  (2, 'Animal2', 'Angora', 'Rouge',20,'Mâle','un autre chat','En refuge',1,1),
  (3, 'Animal3', 'Angora', 'bleu',20,'Mâle','un autre chat','En refuge',1,1),
  (4, 'Animal4', 'Angora', 'à pois verts',20,'Mâle','un autre chat','En refuge',1,1),
  (5, 'Mimi', 'Zigoto', 'à pois bleus', 1000,'Femelle','missingN0','En refuge',1,6),
  (6, 'DINGO', 'dingo', 'jaune',20,'Mâle','un chien fou','En refuge',1,2),
  (7, 'Sympa', '/', 'marron',20,'Mâle','Cool Raoul','En refuge',1,4),
  (8, 'Fun-Guy', 'Coulemelle', 'Blanc Gris',20340,'Inconnu','Il porte des lunettes de soleil','En refuge',1,5),
  (9, 'Médor', 'Jack-russell', 'blanc et noir',4,'Mâle','Un ptit chien','Adopté',2,2),
  (10, 'Médor', 'Jack-russell', 'blanc et noir',4,'Mâle','Un ptit chien','Adopté',3,2),
  (11, 'Médor', 'Jack-russell', 'blanc et noir',4,'Mâle','Un ptit chien','Adopté',2,2)
;

INSERT INTO "animal"
  ("id", "nom", "race", "couleur", "age", "sexe", "description", "statut", "association_id", "espece_id","famille_id")
  VALUES
  (1, 'Chat', 'Angora', 'Noir', 4, 'Mâle', 'Un chat', 'Accueilli', 1, 1, 1),
  (12, 'Chacha', 'Angora', 'Noir', 4, 'Mâle', 'Un chat', 'Accueilli', 1, 1, 2),
  (13, 'Chachacha', 'Angora', 'Noir', 4, 'Mâle', 'Un chat', 'Accueilli', 1, 1, 1)
;



  INSERT INTO "demande"
  ("id","famille_id","animal_id","statut_demande","date_debut","date_fin")
  VALUES
  (1,1,2,'En attente', '01/01/2000','30/01/2010'),
  (2,1,3,'En attente',' 01/01/2000','30/01/2010'),
  (3,1,5,'En attente', ' 01/01/2000','30/01/2010'),
  (4,1,3,'En attente', ' 01/01/2000','30/01/2010'),
  (5,2,3,'En attente', ' 01/01/2000','30/01/2010'),
  (6,3,3,'En attente', ' 01/01/2000','30/01/2010'),
  (7,4,3,'En attente', ' 01/01/2000','30/01/2010'),
  (8,4,8,'En attente', ' 01/01/2000','30/01/2010')
  ;

INSERT INTO "media"
  ("id", "url", "ordre", "animal_id", "association_id")
VALUES
  ( 1, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 2, NULL ),
  ( 3, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 2, NULL ),
  ( 4, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 3, NULL ),
  ( 5, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 4, NULL ),
  ( 6, 'https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_960_720.jpg', 1, 4, NULL ),
  ( 7, 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_960_720.jpg', 2, 1, NULL ),
  ( 8, 'https://cdn.pixabay.com/photo/2023/12/15/21/47/cat-8451431_960_720.jpg', 3, 1, NULL ),
  ( 9, 'https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_960_720.jpg', 1, 4, NULL ),
  ( 10, 'https://cdn.pixabay.com/photo/2017/06/17/22/55/ufo-2413965_960_720.jpg', 1, 5, NULL ),
  ( 11, 'https://cdn.pixabay.com/photo/2022/07/09/11/27/capybara-7310694_960_720.jpg', 1, 7, NULL ),
  ( 12, 'https://cdn.pixabay.com/photo/2017/11/23/21/06/coulemelle-2973661_960_720.jpg', 1, 8, NULL ),
  ( 13, 'https://cdn.pixabay.com/photo/2022/04/05/20/21/jack-russell-terrier-7114378_960_720.jpg', 1, 9, NULL ),
  ( 14, 'https://cdn.pixabay.com/photo/2022/04/05/20/21/jack-russell-terrier-7114378_960_720.jpg', 1, 10, NULL ),
  ( 15, 'https://cdn.pixabay.com/photo/2022/04/05/20/21/jack-russell-terrier-7114378_960_720.jpg', 1, 11, NULL ),
  ( 16, 'https://cdn.pixabay.com/photo/2019/11/18/00/38/dog-4633734_960_720.jpg', 1, 6, NULL ),
  ( 17, 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_960_720.jpg', 2, 12, NULL ),
  ( 18, 'https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_960_720.jpg', 2, 13, NULL ),
  ( 19, 'https://cdn.pixabay.com/photo/2017/06/17/22/55/ufo-2413965_960_720.jpg', 1, NULL, 2 ),
  ( 20, 'https://cdn.pixabay.com/photo/2017/06/17/22/55/ufo-2413965_960_720.jpg', 1, NULL, 3 ),





  ( 2, 'https://www.refuge-a-chats.io', 1, NULL, 1)
;

INSERT INTO "tag"
  ("id", "nom", "description")
VALUES
  ( 1,'Besoin spécifiques', 'Nécessite des ajustements particuliers'),
  ( 2,'Hargneux', 'Très méchant'),
  ( 3, 'Propre', 'Super propre, va aux toilettes tout seul'),
  ( 4,'Mystique', 'Possède des pouvoirs psys !'),
  ( 5,'Maudit', 'Nécessite des ajustements particuliers')
;

  INSERT INTO "animal_tag"
  ("id","animal_id","tag_id")
  VALUES 
  (1,1,1),
  (2,8,5),
  (3,8,4),
  (4,8,3),
  (5,2,2),
  (6,3,4)
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

SELECT
    setval(
        'animal_tag_id_seq',
        (
            SELECT
                MAX(id)
            from
                "animal_tag"
        )
    );

COMMIT;