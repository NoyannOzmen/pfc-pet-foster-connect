import { Router } from "express";
import { assoController } from "../controllers/associationController.js";
import { catchErrors } from "../middlewares/catchErrors.js";

const assoRouter = Router();

//Affichage de la liste complète des associations
associationRouter.get('/api/associations', catchErrors(associationController.getAll));

//Affichage des détails d'une association
associationRouter.get('/api/associations/{id}', catchErrors(associationController.getOne));

//Soumission du formulaire d'inscription d'association
associationRouter.post('/assos', catchErrors(associationController.create));

//Mise à jour des informations d'une association
associationRouter.patch('/api/associations/{id}', catchErrors(associationController.update));

//Suppression d'un compte association
associationRouter.delete('/api/associations/{id}', catchErrors(associationController.destroy));