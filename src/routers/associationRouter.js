import { Router } from "express";
import { associationController } from "../controllers/associationController.js";
import { catchErrors } from "../middlewares/catchErrors.js";
import { auth } from "../middlewares/auth.js";
import { isRole } from "../middlewares/isRole.js";

//TODO NE PAS OUBLIER D'AJOUTER LES MIDDLEWARE D'AUTHENTIFICATION AUX ROUTES CONCERNEES

const associationRouter = Router();

//Affichage de la liste complète des associations
associationRouter.get('/api/associations', catchErrors(associationController.getAll));

//Affichage des détails d'une association
associationRouter.get('/api/associations/:id(\\d+)', catchErrors(associationController.getOne));

//Soumission du formulaire d'inscription d'association
associationRouter.post('api/associations', catchErrors(associationController.store));

//Mise à jour des informations d'une association
associationRouter.patch('/api/associations/:id(\\d+)',[auth,isRole.association], catchErrors(associationController.update));

//Suppression d'un compte association
associationRouter.delete('/api/associations/:id(\\d+)',[auth,isRole.association], catchErrors(associationController.destroy));

//Affichage des animaux proposés par une association
associationRouter.get('/api/associations/:id(\\d+)/animals', catchErrors(associationController.getAllAnimals));

//Ajout un animal à l'association
associationRouter.post('/api/associations/:id(\\d+)/animals',[auth,isRole.association], catchErrors(associationController.addAnimal));

<<<<<<< HEAD
export {associationRouter};
=======
export { associationRouter };
>>>>>>> dev
