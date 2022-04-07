// API CONTROLLERS
import { Request, Response } from 'express';

/* START: IMPORT MODELS */
import PlayerModel from '../models/Player';
/* END: IMPORT MODELS */

/* START: ACTIONS */
export const insertPlayer = async (req: Request, res: Response) => {
    let name: string = req.body.name;
    let email: string = req.body.email;
    let score: number = req.body.score;
    let age: number = req.body.age;

    let player = new PlayerModel();
    player.name = name;
    player.age = age;
    player.score = score;
    player.email = email;

    // Aqui pode ser feita uma lógica antes de enviar para o banco
    player = await player.save();

    // console.log("PLAYER INSERIDO", player);   
    res.status(201).send({ player });
    // res.json({});
}

export const selectPlayers = async (req: Request, res: Response) => {
    req;
    let players = await PlayerModel.find();

    console.log("PLAYERS SELECIONADOS", players);
    res.status(200).send({ players });

    // res.json({ players: players });
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

export const updatePlayer = async (req: Request, res: Response) => {
    let name = req.params.name;
    let player = await PlayerModel.findOne({ name });
    console.log("PLAYER ATUALIZAR", player);

    req.params;
    res.json({ player: player });
}
export const deletePlayer = async (req: Request, res: Response) => {
    let name = req.params.name;
    let player = await PlayerModel.findOne({ name });
    console.log("PLAYER DELETAR", player);

    req.params;
    res.json({ player: player });
}
/* END: ACTIONS */