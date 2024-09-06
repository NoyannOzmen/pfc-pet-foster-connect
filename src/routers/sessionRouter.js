import { Router } from "express";
import { sessionController } from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.get('/connexion', sessionController.displayLogin);
sessionRouter.get('/famille/inscription', sessionController.displayFosterSignIn);
sessionRouter.get('/association/inscription', sessionController.displayShelterSignIn)

export { sessionRouter };