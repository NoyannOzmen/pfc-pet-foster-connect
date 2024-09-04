# Session

Lorsque un.e utilisateur.ice se connecte, on stock en session :

- loggedIn : true pour vérifier facilement si la session est celle d'un.e user logged in
- role : Pour vérifier le rôle du user et personnaliser l'affichage dans les vues accès restreint
- nom : pour afficher sur toutes les vues le nom du user
- id : Pour faciliter les futurs appels BDD pour afficher les infos des profils etc...