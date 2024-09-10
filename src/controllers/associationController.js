/*
import Joi from 'joi';
import { Card, List } from '../models/index.js';
import { hexadecimalColorSchema } from './JOI-VALIDATE-HEX-STRING.js';
*/

import { Association, Espece, Animal } from "../models/Models.js";
import { Op } from "sequelize";

const associationController = {
    
    /* Liste des associations */
    async getAll(req, res) {
        // Récupérer toutes les associations en BDD
        const associations = await Association.findAll();

        const especes = await Espece.findAll();

        // Envoyer une réponse
        res.render("listeAssociations",{ associations, especes });
    },

    /* Liste des associations RECHERCHEES */

    async getSearched(req,res) {
        const species = req.body.espece;
        const departement = req.body.dptSelect;
        const shelter_nom = req.body.shelterNom;

        const especes = await Espece.findAll();

        const associations = await Association.findAll({
            include : [ { model : Animal, as : "pensionnaires", include : { model : Espece, as : "espece" } }],
            where : {
                [Op.or] : [
                    { nom : shelter_nom},               
                    { code_postal : { [Op.startsWith] : departement }},
                    { '$pensionnaires.espece.nom$' : species || { [Op.in] : species } },
                ]
            }
        });

        console.log(associations)
        return res.render("listeAssociations", { associations, especes });
    },
    
    /* Détails d'une Association */
    async getOne(req, res, next) {
        // * Est-ce suffisant pour garantir une sécurité ?
        const associationId = req.params.id;
        // Récupérer l'association' en BDD (avec potentiellement ses tags)
        const association = await Association.findByPk(associationId);
        // Si l'associaiton n'existe pas (ID=90000 => null) ==> 404
        if (!association) {
            return next();
        }
        // Envoyer une réponse
        res.render("detailAssociation", { association });
    },
    
    /* Création d'une association (à mettre dans le login/signup) */
    async store(req,res) {
    },
    
    /* MàJ Asso */
    async update(req,res) {
        const associationId = req.params.id;
        const association = await Association.findByPk(associationId);
        
        if (!association) {
            return next();
        }
        
        // Element à Update
        const { nom, responsable, rue, commune, code_postal, pays, siret, telephone } = req.body;
        
        const updatedAssociation = await association.update({
            nom : nom || association.nom,
            responsable : responsable || association.responsable,
            rue : rue || association.rue,
            commune : commune || association.commune,
            code_postal : code_postal || association.code_postal,
            pays : pays || association.pays,
            siret : siret || association.siret,
            telephone : telephone || association.telephone,
        });
        
        res.render("A Voir");
        
    }, 
    
    
    
    /* Supprimer une association */
    async destroy(req, res, next) {
        
        //*Vérification que l'utilisateur.ice connecté.e est bien cellui qui doit être supprimé.e
        //* (on ne veut pas que n'importe qui puisse supprimer un compte asso)
        
        if (!(parseInt(req.session.id)===parseInt(req.params.id))){
            
            res.status=401;
            return next(new Error('Unauthorized'))
            
        }
        
        // Récupérer l'Id de l'association à supprimer
        const associationId = req.params.id;
        
        const association = await association.findByPk(associationId);
        
        if (!association) {
            // Si pas entier ou pas existant dans la BDD => 404
            return next();
        }
        
        await association.destroy();
        
        // Sinon on supprime et on renvoie une 204 avec un body vide.
        res.status(204).end();
    },
    
    /* Lister les animaux d'une association */
    async getAllAnimals(req, res, next) {
        // * Est-ce suffisant pour garantir une sécurité ?
        const associationId = req.params.id;
        // Récupérer l'association' en BDD (avec potentiellement ses tags)
        const association = await Association.findByPk(associationId, {
            include: ['animaux']
        });
        // Si l'associaiton n'existe pas (ID=90000 => null) ==> 404
        if (!association) {
            return next();
        }
        // Envoyer une réponse
        res.render("detailAssociation",{ association });
    },
    
    /* Ajouter un animal à une asso */
    async addAnimal(req,res, next) {
        const associationId = req.params.id;
        const association = await Association.findByPk(associationId);
        
        if(!association) {
            return next();
        }
        
        await association.addAnimal(newAnimal);
        /* Sequelize Lazy Loading ? (Je crois) */
    },
    
    async dashboardAnimaux(req,res,next){
        
        //! A REMPLACER PAR REQ.SESSION.USERID !!
        const associationId = 1;
        
        const animals = await Animal.findAll({
            include: [
                'espece',
                'images_animal',
                {
                    model : Association,
                    as : 'refuge',
                    where: {
                        id : associationId,
                    },
                },
                
            ]
        });
        
        /*
        animaux : tableau d'animaux contenant notamment un objet espece,
        un tableau images_animal, un objet refuge, un object accueillant,
        un tableau tags et un tableau demande
        */
        
        res.render('profilAssociationAnimauxListe',{ animals });
    },
    async dashboardAnimauxSuivi (req, res ,next) {
        //! A REMPLACER PAR REQ.SESSION.USERID !!
        const associationId = 1;
        
        const animals = await Animal.findAll({
            where : {statut:'Accueilli'},
            include : [
                'espece',
                'images_animal',
                {
                    model : Association,
                    as : 'refuge',
                    where: {
                        id : associationId,
                    },  
                },
                'tags',
                'accueillant',

            ]
        })

        res.send(animals);
    }
};

export { associationController };
