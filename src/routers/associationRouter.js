import { Router } from "express";
import { associationController } from "../controllers/associationController.js";
import { catchErrors } from "../middlewares/catchErrors.js";
import { auth } from "../middlewares/auth.js";
import { isRole } from "../middlewares/isRole.js";

//TODO NE PAS OUBLIER D'AJOUTER LES MIDDLEWARE D'AUTHENTIFICATION AUX ROUTES CONCERNEES

const associationRouter = Router();

//Affichage de la liste complète des associations
associationRouter.get('/associations', catchErrors(associationController.getAll));

//Affichage des résultats d'une recherche association
associationRouter.post('/associations', catchErrors(associationController.getSearched));

//Affichage des détails d'une association
associationRouter.get('/associations/:id(\\d+)', catchErrors(associationController.getOne));

//* DASHBOARD

//Affichage des informations depuis le compte association
associationRouter.get('/associations/profil', associationController.displayDashboard);

//Mise à jour des informations depuis le compte association
associationRouter.post('/associations/profil', catchErrors(associationController.update));

//* ROUTES AUTHENTIFIEES

associationRouter.get('/associations/profil/animaux', auth, isRole.association, associationController.dashboardAnimaux);

associationRouter.get('/associations/profil/animaux/suivi', auth, isRole.association, associationController.dashboardAnimauxSuivi);

associationRouter.get('/associations/profil/animaux/nouveau-profil', auth, isRole.association, associationController.dashboardAnimauxAjouter);

//Affichage du tableau de récapitulatif des demandes
associationRouter.get('/associations/profil/demandes', associationController.dashboardRequests);

//Affichage du détail d'une demande d'accueil
associationRouter.get('/associations/profil/demandes/:id(\\d+)', associationController.dashboardRequestsDisplayOne)

//Valider une demande d'accueil
associationRouter.post('/associations/profil/demandes/:id(\\d+)/accept', associationController.approveRequest);

//Refuser une demande d'accueil
associationRouter.post('/associations/profil/demandes/:id(\\d+)/deny', associationController.denyRequest);


export { associationRouter };
