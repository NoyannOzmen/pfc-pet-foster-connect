BEGIN;

INSERT INTO "utilisateur"
  ("id", "email", "mot_de_passe")
VALUES
  ( 1, 'b.campbell@pet-smart.fr', '$2b$08$hKV4.9nQ2cch50Ub6DVhi.VRMaJVaVVtN5ivbfGVo/9VWt07LTE3e'),
  ( 2, 'j.lopez@mail.io', '$2b$08$IgpTOYSy6gqvFEiBTkEpy.R.UGbcKON/TvP5LLK9LYf7ZUTkutd76'),
  ( 3, 'j.venchi@maimail.io', '$2b$08$HTY4jfz8o5SmYfwnWGseb.CC9dWjO2umeuMRHXbCtYGPdHu0q.Rbq'),
  ( 4, 'c.pagrav@proton.fr', '$2b$08$EiGT8Z2c/xHKsZb/ofUJt.ostO/EwqlLx1c5E6pyAbPhx055CEq1S'),
  ( 5, 'llm@wanadoux.fr', '$2b$08$GqKC4IdBIWqFy/nHKZWgMOMyaDze383c7dpUpLYtWNEb9Lv1TxtoS'),
  ( 6, 'cha@perlipop.et', '$2b$08$xyziNtII/luJphK4Wv4QTuWcnMBzgfeSsPf.whw1H06O1rDRhFW2u'),
  ( 7, 'zeb@manege.com', '$2b$08$q2UqhQfdPDHL7C7bZCpNd.sq9PoQ5A0rDGjBQ6yaxCPgB.W1ozy2W')
;

INSERT INTO "association"
  ("id", "nom", "responsable", "rue", "commune", "code_postal", "pays", "siret", "telephone", "utilisateur_id")
VALUES
  ( 1, 'PetSmart', 'B. Campbell', '38 rue des pinèdes', 'Paris', '75020', 'France', '732 829 320 00074', '01 45 49 36 17', 1),
  ( 2, 'SPB', 'J. Venchi', '60, place du capitole', 'Toulouse', '31000', 'France', '735 654 140 00072', '02 14 18 39 45', 3),
  ( 3, 'L''arche de Chloé', 'C. Pagrav', '145 avenue Eblé', 'Limoges', '87000', 'France', '722 344 180 00070', '01 59 64 14 15', 4)
;

INSERT INTO "famille"
  ("id", "nom", "telephone", "rue", "commune", "code_postal", "pays", "hebergement", "utilisateur_id")
VALUES 
  ( 1, 'Lopez', '02 48 37 14 15', '1 Place de la gare', 'Argelès', '66008', 'France', 'Maison', 2),
  ( 2, 'Martin', '04 24 32 78 46', '63, rue d''Avron', 'Clermont-Ferrand', '63113', 'France', 'Appartement', 5),
  ( 3, 'Chatmere', '03 28 56 89 45', '5 impasse de la tour', 'Niort', '79191', 'France', 'Maison', 6),
  ( 4, 'Zébulon', '06 01 45 59 56', '27 boulevard Colle', 'Metz', '57463', 'France', 'Maison', 7)
;

INSERT INTO "espece"
  ("id", "nom" )
VALUES
  (1, 'Chat' ),
  (2, 'Chien'),
  (3, 'Ornithorynque'),
  (4, 'Capybara'),
  (5, 'Champignon'),
  (6, 'Mystère'),
  (7, 'Oiseau'),
  (8, 'Reptile'),
  (9, 'Amphibien'),
  (10, 'Rongeur')
;

INSERT INTO "animal"
  ("id", "nom", "race", "couleur", "age", "sexe", "description", "statut", "association_id", "espece_id")
VALUES
  (2, 'Choupette', 'Siamois', 'Blanc',20,'Femelle','une petit choupette','En refuge',1,1),
  (3, 'Léon', 'Bengal', 'Tigré',4,'Mâle','le professionnel','En refuge',1,1),
  (4, 'Boubou', 'Ragdoll', 'Crème',8,'Mâle','une boule de poils pleine de vie','En refuge',1,1),
  (5, 'Mimi', 'Zigoto', 'à pois bleus', 1000,'Femelle','missingN0','En refuge',1,6),
  (6, 'Dingo', 'Dingo', 'jaune',20,'Mâle','un chien fou','En refuge',1,2),
  (7, 'Sympa','','Marron',5,'Inconnu','Cool Raoul','En refuge',1,4),
  (8, 'Fun-Guy', 'Bolet', 'Blanc Gris',340,'Inconnu','Il porte des lunettes de soleil','En refuge',1,5),
  (9, 'Médor', 'Jack-russell', 'blanc et noir',4,'Mâle','Un ptit chien','Adopté',2,2),
  (10, 'Médou', 'Airedale Terrier', 'sale',14,'Mâle','Un gros chien','Adopté',3,2),
  (11, 'Philippe', 'Corgi', 'Orange', 1,'Mâle','Un tout p''tit chien','Adopté',2,2)
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
  (1,1,2,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (2,1,3,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (3,1,5,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (4,3,8,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (5,2,3,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (6,3,3,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (7,4,3,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY')),
  (8,4,8,'En attente', TO_DATE('01/01/2000','DD/MM/YYYY'),TO_DATE('30/01/2010','DD/MM/YYYY'))
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
  ( 2, 'https://cdn-icons-png.flaticon.com/512/8183/8183261.png', 1, NULL, 1)
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

SELECT
    setval(
        'demande_id_seq',
        (
            SELECT
                MAX(id)
            from
                "demande"
        )
    );

COMMIT;