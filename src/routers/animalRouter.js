import { Router } from "express";

import { animalController } from "../controllers/animalController";
import { catchErrors } from "../middlewares/catchErrors";

const animalRouter = Router();

//* Rendu de la page avec tout les animaux disponibles
animalRouter.get('/animaux', catchErrors(animalController.availableAnimalsList));

//* Rendu de la page de détail d'un animal
animalRouter.get('/animaux/:id(\\d+)', catchErrors(animalController.detailAnimal));


//! Vérifier que l'utilisateur.ice est connecté.e
animalRouter.post('/animaux/:id(\\d+)/demande', catchErrors(animalController.hostRequest))

