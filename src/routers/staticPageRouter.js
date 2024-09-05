import { Router } from "express";

const staticPageRouter = Router();

<<<<<<< HEAD
staticPageRouter.get('/a-propos', res.render('aPropos'));
staticPageRouter.get('/contact', res.render('contact'));
staticPageRouter.get('/faq', res.render('faq'));
staticPageRouter.get('/infos-legales', res.render('infosLegales'));
staticPageRouter.get('/rgpd', res.render('rgpd'));
staticPageRouter.get('/devenir-famille', res.render('devenirFamille'));


export {staticPageRouter};
=======
staticPageRouter.get("/", (req,res) => res.render("accueil"));
staticPageRouter.get('/a-propos', (req,res) => res.render('aPropos'));
staticPageRouter.get('/contact', (req,res) => res.render('contact'));
staticPageRouter.get('/faq', (req,res) => res.render('faq'));
staticPageRouter.get('/infos-legales', (req,res) => res.render('infosLegales'));
staticPageRouter.get('/rgpd', (req,res) => res.render('rgpd'));
staticPageRouter.get('/devenir-famille', (req,res) => res.render('devenirFamille'));

export { staticPageRouter };
>>>>>>> dev
