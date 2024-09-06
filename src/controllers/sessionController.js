import bcrypt from 'bcrypt';

import { Famille, Utilisateur,Association } from '../models/Models.js';

export const sessionController = {
    
    async displayLogin(req, res) {
        res.status(200).render("connexion");
    },

    async login(req,res) {
        
        // On récupère l'email et le mot de passe
        const credentials = req.body;
        //TODO VERIFICATION DES CREDENTIALS AVEC JOI

        const {email, mot_de_passe} = credentials
        
        const user = await Utilisateur.findOne({


        //! ATTENTION : Peut être que les associations ont un problème au niveau lien association/user famille/user
        //! A TESTER

            where : {
                email:email
            },
            include : [
                {
                    model:Association,
                },
                {
                    model:Famille
                }
            ]
        })
        
        if (!user) {
            return res.render('connexion', {error : "utilisateur ou mot de passe incorrect"})

        }
        
        //* Bcrypt compare le hash du mot de passe récupéré depuis la requète avec celui en BDD
        const hasMatchingPassword = bcrypt.compare(mot_de_passe, user.mot_de_passe);

        if(!hasMatchingPassword) {

            return res.render('connexion', {error : "utilisateur ou mot de passe incorrect"})

        } else {

        //* Check si user est association OU famille en vérifiant si les sous-champs id existent.
        //* Normalement l'include ne devrait renvoyer que l'un OU l'autre.
        //* On ajoute ensuite en session :
        //*     - loggedIn : true pour vérifier facilement si la session est celle d'un.e user logged in
        //*     - role : Pour vérifier le rôle du user et personnaliser l'affichage dans les vues accès restreint
        //*     - nom : pour afficher sur toutes les vues le nom du user
        //*     - id : Pour faciliter les futurs appels BDD pour afficher les infos des profils etc...

            if (user.association.id) {
                req.session.loggedIn=true;
                req.session.role='association';
                req.session.nom=user.association.nom;
                req.session.id=user.id;
            }
            if (user.famille.id) {
                req.session.loggedIn=true;
                req.session.role='famille';
                req.session.nom=user.famille.nom;
                req.session.id=user.id;
            }

        }
        return res.redirect('/')
    },

    async logout(req,res) {

        req.session.destroy();
        res.redirect('/')
    }
};