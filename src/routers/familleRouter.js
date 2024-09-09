import { Router } from "express";
import { familleController } from "../controllers/familleController.js";
import { catchErrors } from "../middlewares/catchErrors.js";

const familleRouter = Router();

//Affichage des détails d'une famille - ok

familleRouter.get('/famille/:id(\\d+)', catchErrors(familleController.getOne));

//Soumission du formulaire d'inscription d'une famille - ok
familleRouter.post('/famille', catchErrors(familleController.store));

//Mise à jour des informations d'une famille - ok
familleRouter.patch('/famille/:id(\\d+)', catchErrors(familleController.update));

//Suppression d'un compte famille - ok
familleRouter.delete('/famille/:id(\\d+)', catchErrors(familleController.destroy));

//Affichage des animaux possédé par une famille - ok
familleRouter.get('/famille/:id(\\d+)/animals', catchErrors(familleController.getAllAnimals));

//Ajout un animal à la famille
familleRouter.post('/famille/:id(\\d+)/animals', catchErrors(familleController.addAnimal));

//Affichage des demandes réalisé par une famille - ok
familleRouter.get('/famille/:id(\\d+)/requests', catchErrors(familleController.getAllRequests));
