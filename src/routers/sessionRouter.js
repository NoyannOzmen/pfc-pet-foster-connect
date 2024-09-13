import { Router } from "express";
import { sessionController } from "../controllers/sessionController.js";
import { catchErrors } from "../middlewares/catchErrors.js";

const sessionRouter = Router();

/* routes connexion */
sessionRouter.get('/connexion', catchErrors(sessionController.displayLogin));
sessionRouter.post('/connexion', catchErrors(sessionController.logIn));

/* route déconnexion */
sessionRouter.get('deconnexion', catchErrors(sessionController.logOut));

//* FAMILLE
/* Inscription famille d'accueil */
sessionRouter.get('/famille/inscription', catchErrors(sessionController.displayFosterSignIn));
sessionRouter.post('/famille/inscription', catchErrors(sessionController.fosterSignIn));
/* Profil Famille */
sessionRouter.get('/famille/profil', catchErrors(sessionController.displayProfile));
/* Update des informations */
sessionRouter.post('/famille/profil', catchErrors(sessionController.fosterUpdate));
/* Suppression du compte */
sessionRouter.post('/famille/profil/delete', catchErrors(sessionController.fosterDestroy));

//* ASSOCIATION
/* Inscription association */
sessionRouter.get('/association/inscription', catchErrors(sessionController.displayShelterSignIn));
sessionRouter.post('/association/inscription', catchErrors(sessionController.shelterSignIn));

sessionRouter.post('/association/profil/delete', catchErrors(sessionController.shelterDestroy));

export { sessionRouter };