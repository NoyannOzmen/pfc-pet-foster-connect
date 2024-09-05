import {Router} from 'express';

import { animalRouter } from './animalRouter.js';
import { associationRouter } from './associationRouter.js';
import { staticPageRouter } from './staticPageRouter.js';

export const router = Router();

router.use(staticPageRouter);
router.use(animalRouter);
router.use(associationRouter);