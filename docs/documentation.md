# Session

Lorsque un.e utilisateur.ice se connecte, on stock en session :

- loggedIn : true pour vérifier facilement si la session est celle d'un.e user logged in
- role : Pour vérifier le rôle du user et personnaliser l'affichage dans les vues accès restreint
  - 'association'
  - 'famille'
- nom : pour afficher sur toutes les vues le nom du user
- id : Pour faciliter les futurs appels BDD pour afficher les infos des profils etc...

## authentification

Lorsque l'on veut accéder à une route à accès restreint on lui passe [auth, isRole.{middlewareRole}] afin de vérifier que :
- l'utilisateur.ice est bien connecté 
- l'utilisateur.ice est bien du type (famille,association) requis pour accéder à la ressource