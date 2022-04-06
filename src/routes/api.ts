// API ROUTS
import { Router } from 'express';
import * as ApiController from '../controllers/playersController';

const router = Router();

/* START: ROUTS */
router.get('/ping', ApiController.ping);
router.get('/name/:name', ApiController.name);
/* END: ROUTS */

export default router;