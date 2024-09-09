import { Animal, Association, Demande, Espece, Animal_Tag, Tag } from "../models/Models.js";
import { Op } from "sequelize";


export const animalController = {
    
    async availableAnimalsList(req,res) {
        
        //* On veut récupérer tout les animaux qui sont dans les refuges, en incluant les tags et les associations qui les gèrent
        const animals = await Animal.findAll({
/*             where: {
                statut:'En refuge'
            }, */
            include : ['espece']
        })

        const especes = await Espece.findAll();
        const tags = await Tag.findAll();

        res.render('listeAnimaux', {
            animals, especes, tags
        })    
    },

    /* Liste des animaux recherchés */

    async getSearched(req,res) {

        const {
            especeDropdown,
            dptSelect,
            sexe,
            minAge,
            maxAge,
            tag
        } = req.body;

        const especes = await Espece.findAll();
        const tags = await Tag.findAll();

        const animals = await Animal.findAll({
            include : [ 
                { model : Association, as : "refuge"},
                { model : Espece, as : "espece" },
                { model : Tag, as : "tags" }
            ],
            where : {
                [Op.and] : [
                    { '$espece.nom$' : especeDropdown },
                    { sexe : sexe },             
                    { '$refuge.code_postal$' : { [Op.startsWith] : dptSelect }},
                    { age : { [Op.between]:  [minAge, maxAge] }},
                    { '$tags.nom$' : { [Op.not] : tag } || { [Op.notIn] : tag } },
                ]
            }
        });

        console.log(animals)
        return res.render("listeAnimaux", { animals, especes, tags });
    },
    
    async detailAnimal(req,res){
        
        const animalId=req.params.id
        
        const animalData = await Animal.findByPk(animalId,{
            include : ['tags','refuge','espece']
        });
        if (!animalData) {
            res.status(404).render('404');
        }
        
        res.render('detailAnimal',{
            animalData
        })
        
    },
    
    async hostRequest(req,res){
        
        const animalId=req.params.id
        
        // On sait que l'id est celui d'un user famille car on a vérifié le rôle avant
        const familyId=req.session.id
        
        //* Si l'animal n'existe pas on sort du middleware
        if (!Animal.findByPk(animalId)){
            next();
        }
        
        const demandeData = {
            
            famille_id:familyId,
            animal_id:animalId,
            statut_demande:'En attente',

            //!à récupérer depuis le formulaire
            date_debut:'01/01/2000',
            date_fin:'01/02/2000'
        }

        //* S'il y a déjà une demande de la famille pour l'animal on sort du middleware
        if (Demande.findOne({where :{ famille_id:familyId, animal_id:animalId } })) {
            next();
        }
        
        //* On crée et sauvegarde l'instance de la demande
        const hostRequest = await Demande.create(demandeData);

        if (hostRequest) {
            res.redirect(`/animals/${animalId}`);
        } else {
            //! Rediriger vers une page d'erreur ? Afficher un message d'erreur?
            next();
        }
        
        
        
        
    },
    
}
