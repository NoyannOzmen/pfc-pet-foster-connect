import { Router } from "express";

import { animalController } from "../controllers/animalController";
import { catchErrors } from "../middlewares/catchErrors";
import { auth } from "../middlewares/auth";
import { isRole } from "../middlewares/isRole";

const animalRouter = Router();

//* Rendu de la page avec tout les animaux disponibles
animalRouter.get('/animaux', catchErrors(animalController.availableAnimalsList));

//* Rendu de la page de détail d'un animal
animalRouter.get('/animaux/:id(\\d+)', catchErrors(animalController.detailAnimal));


//* Route de demande d'accueil d'un animal par un.e user
animalRouter.post('/animaux/:id(\\d+)/demande',[auth,isRole.famille], catchErrors(animalController.hostRequest))

