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

//Soumission du formulaire d'inscription d'association
associationRouter.post('/inscription/association', catchErrors(associationController.store));

/* //Mise à jour des informations d'une association
associationRouter.patch('/associations/:id(\\d+)',[auth,isRole.association], catchErrors(associationController.update)); */

//Suppression d'un compte association
associationRouter.delete('/associations/:id(\\d+)',[auth,isRole.association], catchErrors(associationController.destroy));

//Affichage des animaux proposés par une association
associationRouter.get('/associations/:id(\\d+)/animals', catchErrors(associationController.getAllAnimals));

//Ajout un animal à l'association
associationRouter.post('/associations/:id(\\d+)/animals',[auth,isRole.association], catchErrors(associationController.addAnimal));

//* ROUTES AUTHENTIFIEES

associationRouter.get('/associations/profil/animaux', auth, isRole.association, associationController.dashboardAnimaux);

associationRouter.get('/associations/profil/animaux/suivi', auth, isRole.association, associationController.dashboardAnimauxSuivi);

associationRouter.get('/associations/profil/animaux/nouveau-profil', auth, isRole.association, associationController.dashboardAnimauxAjouter);

//Affichage des informations depuis le compte association
associationRouter.get('/associations/profil', auth, isRole.association, associationController.displayDashboard);

//Mise à jour des informations depuis le compte association
associationRouter.post('/associations/profil', catchErrors(associationController.update));

//Affichage du tableau de récapitulatif des demandes
associationRouter.get('/associations/profil/demandes', associationController.dashboardRequests);

//Affichage du détail d'une demande d'accueil
associationRouter.get('/associations/profil/demandes/:id(\\d+)', associationController.dashboardRequestsDisplayOne)

//Valider une demande d'accueil
associationRouter.post('/associations/profil/demandes/:id(\\d+)/accept', associationController.approveRequest);

//Refuser une demande d'accueil
associationRouter.post('/associations/profil/demandes/:id(\\d+)/deny', associationController.denyRequest);


export { associationRouter };
