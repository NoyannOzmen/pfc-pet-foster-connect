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
associationRouter.get('/associations/profil/:id(\\d)', associationController.displayDashboard);

//Mise à jour des informations depuis le compte association
associationRouter.post('/associations/profil/:id(\\d)', catchErrors(associationController.update));

associationRouter.get('/associations/profil/:id(\\d)/animaux', associationController.dashboardAnimaux);

associationRouter.get('/associations/profil/:id(\\d)/animaux/suivi', associationController.dashboardAnimauxSuivi);

associationRouter.get('/associations/profil/:id(\\d)/animaux/nouveau-profil', associationController.dashboardAnimauxAjouter);

//Affichage du tableau de récapitulatif des demandes
associationRouter.get('/associations/profil/:id(\\d)/demandes', associationController.dashboardRequests);

//Affichage du détail d'une demande d'accueil
associationRouter.get('/associations/profil/:assoId(\\d)/demandes/:demandeId(\\d+)', associationController.dashboardRequestsDisplayOne)

//Valider une demande d'accueil
associationRouter.post('/associations/profil/:assoId(\\d)/demandes/:demandeId(\\d+)/accept', associationController.approveRequest);

//Refuser une demande d'accueil
associationRouter.post('/associations/profil/:assoId(\\d)/demandes/:demandeId(\\d+)/deny', associationController.denyRequest);


export { associationRouter };
