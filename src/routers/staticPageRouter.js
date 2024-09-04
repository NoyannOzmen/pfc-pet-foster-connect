import { Router } from "express";

const staticPageRouter = Router();

staticPageRouter.get('/a-propos', res.render('aPropos'));
staticPageRouter.get('/contact', res.render('contact'));
staticPageRouter.get('/faq', res.render('faq'));
staticPageRouter.get('/infos-legales', res.render('infosLegales'));
staticPageRouter.get('/rgpd', res.render('rgpd'));
staticPageRouter.get('/devenir-famille', res.render('devenirFamille'));


export {staticPageRouter};