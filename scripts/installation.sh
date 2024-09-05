# Installation de Docker et Docker compose

sudo apt update
sudo apt upgrade

sudo apt install nginx
#Copier le fichier de configuration nginx
sudo cp ./scripts/nginx.conf /etc/nginx/sites-available/pet-foster-connect


sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/okanban /etc/nginx/sites-enabled/okanban
sudo nginx -t
sudo systemctl restart nginx

#Installation de Certbot pour le certificat SSL
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx


sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker $USER
sudo reboot


