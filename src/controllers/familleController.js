/*
import Joi from 'joi';
import { Card, List } from '../models/index.js';
import { hexadecimalColorSchema } from './JOI-VALIDATE-HEX-STRING.js';
*/
import { Espece, Famille } from "../models/Models.js";

const familleController = {
    
    /* Détails d'une famille */
    async getOne(req, res, next) {
        // * Est-ce suffisant pour garantir une sécurité ?
        const familleId = 1;
        console.log(familleId)
        // Récupérer la famille en BDD (avec potentiellement ses tags)
        const famille = await Famille.findByPk(familleId, { include : ['identifiant_famille'] });
        const especes = await Espece.findAll();
        // Si la famille n'existe pas (ID=90000 => null) ==> 404
        if (!famille) {
            return next();
        }
        // Envoyer une réponse
        res.render("profilFamilleInfos",{ famille, especes });
    },
    
    /* Création d'une famille (à mettre dans le login/signup) */
    async store(req,res) {
    },
    
    /* MàJ famille */
    async update(req,res) {
        const familleId = req.params.id;
        const famille = await Famille.findByPk(familleId);
        
        if (!famille) {
            return next();
        }
        // Element à Update
        const { nom, telephone, rue, commune, code_postal, pays, hebergement } = req.body;
        const updatedFamille = await famille.update({
            nom : nom || famille.nom,
            telephone : telephone || famille.telephone,
            rue : rue || famille.rue,
            commune : commune || famille.commune,
            code_postal : code_postal || famille.code_postal,
            pays : pays || famille.pays,
            hebergement : hebergement || hebergement.hebergement,
            
        });
        console.log('success')
        console.log(updatedFamille);

        res.redirect("/famille/" + familleId)
        
    }, 
    
    
    
    /* Supprimer une famille */
    async destroy(req, res, next) {
        // Récupérer l'Id de la famille à supprimer
        const familleId = req.params.id;
        
        const famille = await Famille.findByPk(familleId);
        
        if (!famille) {
            // Si pas entier ou pas existant dans la BDD => 404
            return next();
        }
        
        await famille.destroy();
        
        // Sinon on supprime et on renvoie une 204 avec un body vide.
        res.status(204).end();
    },
    
    /* Lister les animaux d'une famille */
    async getAllAnimals(req, res, next) {
        // * Est-ce suffisant pour garantir une sécurité ?
        const familleId = req.params.id;
        // Récupérer l'association' en BDD (avec potentiellement ses tags)
        const famille = await Famille.findByPk(familleId, {
            include: ['animaux']
        });
        // Si la famille n'existe pas (ID=90000 => null) ==> 404
        if (!famille) {
            return next();
        }
        // Envoyer une réponse
        res.render("detailFamille",{ famille });
    },
    
    /* Ajouter un animal à une famille */
    async addAnimal(req,res, next) {
        const familleId = req.params.id;
        const famille = await Famille.findByPk(familleId);
        
        if(!famille) {
            return next();
        }
        
        await famille.addAnimal(newAnimal);
        /* Sequelize Lazy Loading ? (Je crois) */
    },
    
    
    //afficher les demandes réalisé par une famille
    
    async getAllRequests(req, res, next) {
        
        const familleId = req.params.id;
        const famille = await Famille.findByPk(familleId);
        
        if(!famille) {
            return next();
        }
        
        await famille.getAllRequests();
        
    },
}

export { familleController }


