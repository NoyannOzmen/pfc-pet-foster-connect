curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.bashrc
nvm --version
nvm install --lts
node --version
sudo apt install postgresql
sudo -i -u postgres psql
CREATE USER <nom_user> WITH PASSWORD <password>;
CREATE DATABASE <nom_de_votre_bdd>;
ALTER DATABASE <nom_de_votr_bdd> OWNER TO <nom_user>;

ssh-keygen -t ed25519 -C "your_email@example.com"