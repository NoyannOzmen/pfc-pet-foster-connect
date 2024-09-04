import bcrypt from 'bcrypt';

import { Famille, Utilisateur,Association } from '../models/Models.js';

export const sessionController = {
    
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

            return res.render('login', {error : "utilisateur ou mot de passe incorrect"})

        } else {

        //* On supprime les hash des mots de passe de user avant de l'envoyer dans la session par sécurité

            delete user.dataValues.mot_de_passe;
            delete user.__previousDataValues.mot_de_passe;

            req.session.user = user;

        }
        return res.redirect('/')
    }
}