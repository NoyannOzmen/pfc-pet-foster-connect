import { Animal } from "../models/Animal"
import { Demande } from "../models/Demande"


export const animalController = {
    
    async availableAnimalsList(req,res) {
        
        //* On veut récupérer tout les animaux qui sont dans les refuges, en incluant les tags et les associations qui les gèrent
        const animals = await Animal.findAll({
            where: {
                statut:'Au refuge'
            },
            include : ['especes']
        })
        res.render('listeAnimaux', {
            animals,
        })
        
        
    },
    
    async detailAnimal(req,res){
        
        const animalId=req.params.id
        
        const animalData = await Animal.findByPk(animalId,{
            include : ['tags','associations']
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
        
        //!Il faut récupérer la familleId depuis la session
        const familyId=1
        
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
