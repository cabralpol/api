// API ROUTS
import { Router } from 'express';

/* START: IMPORT CONTROLLES */
import * as PlayerController from '../controllers/playerController';
/* EMD: IMPORT CONTROLLES */

const router = Router();

/* START: ROUTS */
router.post('/player', PlayerController.insertPlayer);
router.get('/player', PlayerController.selectPlayers);
// router.get('/player/:id', PlayerController.selectPlayer);
// router.put('/player/:id', PlayerController.updatePlayer);
// router.delete('/player/:id', PlayerController.deletePlayer);
/* END: ROUTS */

export default router;