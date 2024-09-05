# INSTALLATION du projet sur un serveur

- `ssh nom@server.domain` afin de se rendre sur le terminal de notre machine distante
- configurer une clé SSH pour github si besoin ([procédure à suivre sur github](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))
- Depuis le serveur cloner le repo : `git clone {lien SSH}`
- `cd project-pet-foster-connect/` dans le repo local
- (optionnel : si besoin ne pas oublier de se rendre sur la bonne branche `git checkout dev`)
- `chmod +x ./scripts/installation.sh` --> Donne les droits d'execution au script d'installation
- `./scripts/installation.sh` --> Execute le script d'installation de l'environnement 
  - accepter quand demandé (Y)
  - CERTBOT : suivre les instructions 
    - Entrer le nom de domaine sur lequel le site sera hosté (__attention à bien le répercuter sur nginx.config__) 
  - La machine reboot

- __Revenir en SSH sur la machine__
- retourner dans le dossier du projet (cd..)
  - `touch .env` --> crée le fichier où seront stockées les variables d'environnement de production
  - éditer le .env avec les bonnes variables (avec nano, Vim...)
- `docker compose up`


# Mettre à jour le projet depuis le serveur

- SSH sur le serveur
- `cd project-pet-foster-connect/`
- `git pull`
- La première fois donner les permissions au script d'update `chmod +x ./scripts/deploy.sh`
- `./scripts/deploy.sh`

# Docker

Nous avons deux services qui sont lancés par Docker compose :
    - le container pfc-application : basé sur une image de node et qui fait tourner le serveur web
    - le container pfc-databse : basé sur une image postgres et qui fait tourner le service de BDD