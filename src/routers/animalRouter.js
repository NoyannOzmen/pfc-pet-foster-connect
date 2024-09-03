import { Router } from "express";

import { animalController } from "../controllers/animalController";
import { catchErrors } from "../middlewares/catchErrors";

const animalRouter = Router();

//* Récupérer tout les animaux DISPONIBLES à l'accueil
animalRouter.get('/animaux', catchErrors(animalController.availableAnimalsList));

//* 
animalRouter.get('/animals/:id(\\d+)', catchErrors(animalController.detailAnimal));



animalRouter.post('/animals/:id(\\d+)/demande')

