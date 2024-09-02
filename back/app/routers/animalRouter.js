import { Router } from "express";

import { animalController } from "../controllers/animalController";

const animalRouter = Router();

animalRouter.get('/animals', animalController.getAll);
animalRouter.get('/animals/:id(\\d+)', animalController.getOne)

