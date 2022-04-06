// API ROUTS
import { Router } from 'express';

/* START: IMPORT CONTROLLES */
import * as PlayersController from '../controllers/playersController';
/* EMD: IMPORT CONTROLLES */

const router = Router();

/* START: ROUTS */
router.get('/players', PlayersController.players);
router.get('/name/:name', PlayersController.name);
/* END: ROUTS */

export default router;