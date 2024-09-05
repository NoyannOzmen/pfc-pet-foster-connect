import {Router} from 'express';
import { animalRouter } from './animalRouter.js';
import { staticPageRouter } from './staticPageRouter.js';
import { associationRouter } from './associationRouter.js';

import { animalRouter } from './animalRouter.js';
import { associationRouter } from './associationRouter.js';
import { staticPageRouter } from './staticPageRouter.js';

<<<<<<< HEAD
router.get("/", (req,res) => res.render("accueil"));
router.use(animalRouter);
router.use(staticPageRouter);
router.use(associationRouter);
=======
export const router = Router();
>>>>>>> dev

router.use(staticPageRouter);
router.use(animalRouter);
router.use(associationRouter);