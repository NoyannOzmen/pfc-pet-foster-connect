import { Router } from "express";

const staticPageRouter = Router();

/* staticPageRouter.get("/", (req,res) => res.render("accueil")); */
staticPageRouter.get("/a-propos", (req,res) => res.render("aPropos"));
staticPageRouter.get("/contact", (req,res) => res.render("contact"));
staticPageRouter.get("/faq", (req,res) => res.render("faq"));
staticPageRouter.get("/infos-legales", (req,res) => res.render("infosLegales"));
staticPageRouter.get("/rgpd", (req,res) => res.render("rgpd"));
staticPageRouter.get("/devenir-famille-d-accueil", (req,res) => res.render("devenirFamille"));
staticPageRouter.get("/plan", (req,res) => res.render("plan"))

export { staticPageRouter };