import { Animal, Association, Demande, Espece, Animal_Tag, Tag } from "../models/Models.js";
import { Op } from "sequelize";


export const animalController = {
    
    async homePage(req,res) {
        
        //* On veut récupérer tout les animaux qui sont dans les refuges, en incluant leurs frimousses, leurs tags et la localisation des associations qui les gèrent
        const animals = await Animal.findAll({
            where: {
                statut:'En refuge'
            },
            include : ['espece', 'refuge', 'tags', 'images_animal']
        })
        
        const especes = await Espece.findAll();
        const tags = await Tag.findAll();
        
        res.render('accueil', {
            animals, especes, tags
        })    
    },
    
    async availableAnimalsList(req,res) {
        
        //* On veut récupérer tout les animaux qui sont dans les refuges, en incluant les tags et les associations qui les gèrent
        const animals = await Animal.findAll({
            /*             where: {
                statut:'En refuge'
            }, */
            include : ['tags','refuge','espece', 'images_animal']
        })
        
        const especes = await Espece.findAll();
        const tags = await Tag.findAll();
        
        res.render('listeAnimaux', {
            animals,
            especes,
            tags
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
        const animalId = req.params.id
        
        const animal = await Animal.findByPk(animalId, {
            include : [
                'tags',
                'espece',
                'images_animal',
                { model : Association, as : "refuge",
                include: ['images_association', 'identifiant_association'] }
            ]
        });
        
        if (!animal) {
            res.status(404).render('404');
        }
        
        res.render('detailAnimal',{
            animal
        })
        
    },
    
    async hostRequest(req, res, next){
        
        const animalId = req.params.id;
        // On sait que l'id est celui d'un user famille car on a vérifié le rôle avant
        /* const familyId=req.session.id */
        const familyId = 1;
        
        //* Ceci est un test en attendant la feature Auth
/*         
        //* Si l'animal n'existe pas on sort du middleware
        const isItHere = await Animal.findByPk(animalId);
        if (!isItHere){
            next();
        } */
        
 /*        const demandeData = {
            
            famille_id:familyId,
            animal_id:animalId,
            statut_demande:'En attente',
            
            //!à récupérer depuis le formulaire
            date_debut:'13/09/2024',
            date_fin:'31/12/3000'
    }

        console.log(JSON.stringify(demandeData));
         */

        //* S'il y a déjà une demande de la famille pour l'animal on sort du middleware
        const found = await Demande.findOne({
            where :{ 
                [Op.and] : [
                    {famille_id: familyId},
                    {animal_id: animalId}
                ]
            }
        });

        console.log(found)
/*         
        if (found) {
            next();
        } */
        if (found === null) {
            //* On crée et sauvegarde l'instance de la demande
            const newRequest = await Demande.create({
                famille_id : familyId,
                animal_id : animalId,
                statut_demande:'En attente',
                date_debut:'09/13/2024',
                date_fin:'12/31/3000'
            });

            console.log(newRequest);
            await newRequest.save();

            console.log('Ok!')
            res.redirect('/animaux/' + animalId);
        } else {
            //! Rediriger vers une page d'erreur ? Afficher un message d'erreur?
            console.log('Non');
            res.redirect('/');
        }
        
    },
    
    async addAnimal (req,res,next) {
        
        //! ATTENTION A BIEN CHANGER POUR RECUPERER L'ID DE L'ASSOCIATION DEPUIS req.session !!!!!!
        const associationId = 1;
        
        //* On récupère le nombre de tag en BDD
        const tagNumber = await Tag.count();
        const tagIdArray = [];
        //* Pour récupérer les id des tag sélectionnés par l'utilisateur on boucle autant de fois que de tag en BDD
        //* On vérifie si la propriété de req.body.tag_number existe
        //* Si elle existe on ajoute la valeur de l'id du tag dans le tableau
        for (let i = 0; i < tagNumber; i++) {
            
            const hasProperty = Object.hasOwn(req.body, `tag_${i+1}`);
            if (hasProperty){
                tagIdArray.push(parseInt(req.body[`tag_${i+1}`]));
            }
            
        }
        
        const {
            nom_animal,
            age_animal,
            sexe_animal,
            test_animal,
            espece_animal,
            race_animal,
            couleur_animal,
            description_animal
        } = req.body
        
        
        const refuge = await Association.findByPk(associationId);
        if (!refuge){
            next();
        }
        
        //* On crée un nouveau profil animal ET un nouveau média (d'où le include)
        const newAnimal = await Animal.create(
            {
                nom : nom_animal,
                couleur: couleur_animal,
                age:age_animal,
                sexe:sexe_animal,
                race:race_animal,
                description:description_animal,
                statut:'En refuge',
                association_id:associationId,
                espece_id:espece_animal,
                images_animal : {
                    url:test_animal,
                    ordre:1
                }
                
            },
            {
                include : [
                    'images_animal',
                ]
            }
            );
            
            if (tagIdArray) {
                
                for (const tagId of tagIdArray) {

                    const tag = await Tag.findByPk(tagId);
                    await newAnimal.addTag(tag)

                }
                
            }
            
            
            
            res.send('ok')
            
            
        }
        
    }
    