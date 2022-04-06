// API CONTROLLERS
import { Request, Response } from 'express';

/* START: IMPORT MODELS */
import PlayerModel from '../models/Player';
/* END: IMPORT MODELS */

/* START: ACTIONS */
export const players = async (req: Request, res: Response) => {
    let players = await PlayerModel.find({});
    console.log("PLAYERS", players);

    req.params;
    res.json({ players: players });
}

export const name = async (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ name: `O nome enviado foi: ${name}` });
}
/* END: ACTIONS */