import { Router } from "express";

import { animalController } from "../controllers/animalController";
import { catchErrors } from "../middlewares/catchErrors";

const animalRouter = Router();

animalRouter.get('/animals', catchErrors(animalController.getAll));
animalRouter.get('/animals/:id(\\d+)', catchErrors(animalController.getOne))

