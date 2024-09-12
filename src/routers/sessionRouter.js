import { Router } from "express";
import { sessionController } from "../controllers/sessionController.js";
import { catchErrors } from "../middlewares/catchErrors.js";

const sessionRouter = Router();

/* routes connexion */
sessionRouter.get('/connexion', catchErrors(sessionController.displayLogin));
sessionRouter.post('/connexion', catchErrors(sessionController.login));

/* route déconnexion */
sessionRouter.get('/deconnexion', catchErrors(sessionController.logOut));

/* routes inscription famille d'accueil */
sessionRouter.get('/famille/inscription', catchErrors(sessionController.displayFosterSignIn));
sessionRouter.post('/famille/inscription', catchErrors(sessionController.FosterSignIn));

/* routes inscription association */
sessionRouter.get('/association/inscription', catchErrors(sessionController.displayShelterSignIn));
sessionRouter.post('/association/inscription', catchErrors(sessionController.ShelterSignIn));

export { sessionRouter };