import { Animal } from "../models/Animal"

export const animalController = {

    async availableAnimalsList(req,res) {

        //* On veut récupérer tout les animaux qui sont dans les refuges, en incluant les tags et les associations qui les gèrent
        const animals = await Animal.findAll({
            where: {
                statut:'Au refuge'
            },
            include : ['tags','associations']
        })
        res.render('listeAnimaux', {
            animals,
        })


    },

    async detailAnimal(req,res,next){

        const animalId=req.params.id

        const animalData = await Animal.findByPk(animalId);

    }

}
