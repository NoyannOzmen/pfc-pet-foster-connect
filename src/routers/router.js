import {Router} from 'express';
import { animalRouter } from './animalRouter.js';
import { staticPageRouter } from './staticPageRouter.js';
import { associationRouter } from './associationRouter.js';
import { sessionRouter } from './sessionRouter.js';
import { tagRouter } from './tagRouter.js';
import { familleRouter } from './familleRouter.js';

export const router = Router();

/* router.get("/", (req,res) => res.render("accueil")); */
router.use(animalRouter);
router.use(staticPageRouter);
router.use(associationRouter);
router.use(sessionRouter);
router.use(tagRouter);
router.use(familleRouter);
