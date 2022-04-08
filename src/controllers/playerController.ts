// API CONTROLLERS
import { Request, Response } from 'express';

/* START: IMPORT MODELS */
import { PlayerModel } from '../models/Player';
/* END: IMPORT MODELS */

/* START: ACTIONS */
export const selectPlayers = async (req: Request, res: Response) => {

    const players = await PlayerModel.findAll();
    req;
    if (players.length > 0) {
        console.log("PLAYERS: ", JSON.stringify(players));
        res.status(200).send(players);
    } else {
        console.log("PLAYERS: ", JSON.stringify(players));
        res.status(503).send({ error: "No records found!" });
    }
}

export const insertPlayer = async (req: Request, res: Response) => { 
      
    let player; 
    console.log(req);
    if (req.body) {

        let name = req.body.name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let age = req.body.age;
        let score = req.body.score;

        player = await PlayerModel.create({
            name: name,
            last_name: last_name,
            email: email,
            age: age,
            score: score
        });

        console.log("PLAYER: ", JSON.stringify(player));
        res.status(201).send(player);
    } else {
        console.log("PLAYER: ", JSON.stringify(player));
        res.status(503).send({ error: "No records inserted!" });
    }
}

// export const selectPlayer = async (req: Request, res: Response) => {
//     res;
//     req;
//     let id = req.params.id;
//     let player = await PlayerModel.findById({_id:id});

//     // if(player) {
//     //     res.status(200).send({ player });
//     //     console.log("PLAYER SELECIONADO", player);
//     // } else {
//     //     res.status(200).send({error: 'Player não encontrado!' });
//     //     console.log("PLAYER NÃO ENCONTRADO!");
//     // }
//     console.log(player);
//     res.status(200).send(player);

//     // res.json({ player: player });
// }

// export const updatePlayer = async (req: Request, res: Response) => {
//     let name = req.params.name;
//     let player = await PlayerModel.findOne({ name });
//     console.log("PLAYER ATUALIZAR", player);

//     req.params;
//     res.json({ player: player });
// }
// export const deletePlayer = async (req: Request, res: Response) => {
//     let name = req.params.name;
//     let player = await PlayerModel.findOne({ name });
//     console.log("PLAYER DELETAR", player);

//     req.params;
//     res.json({ player: player });
// }
/* END: ACTIONS */