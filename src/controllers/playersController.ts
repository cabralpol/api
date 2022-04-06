// API CONTROLLERS
import { Request, Response } from 'express';

/* START: ACTIONS */
export const ping = (req: Request, res: Response) => {
    req.params;
    res.json({ pong: true });
}

export const name = (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ name: `O nome enviado foi: ${name}` });
}
/* END: ACTIONS */