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
        res.status(200).send({ error: "No records found!" });
    }
}

export const insertPlayer = async (req: Request, res: Response) => {

    let player = {};
    if (req.body.name && req.body.last_name && req.body.email && req.body.age) {

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
        res.status(200).send({ error: "No records inserted!" });
    }
}

export const selectPlayer = async (req: Request, res: Response) => {
    const id = req.params.id;
    let player = await PlayerModel.findByPk(id);

    if (player) {
        res.status(200).send(player);
        console.log("PLAYER SELECIONADO", JSON.stringify(player));
    } else {
        res.status(200).send({ error: 'No records found!' });
        console.log("PLAYER NÃO ENCONTRADO!");
    }
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = req.params.id;
    let player = await PlayerModel.findByPk(id);

    if(player) {

        if(req.body.name) {
            player.name = req.body.name;
        }
        if(req.body.name) {
            player.name = req.body.name;
        }
        if(req.body.last_name) {
            player.last_name = req.body.last_name;
        }
        if(req.body.age) {
            player.age = req.body.age;
        }
        if(req.body.score) {
            player.score = req.body.score;
        }       

        await player.save();        

        res.status(201).send(player);
        console.log("PLAYER SELECIONADO", JSON.stringify(player));
    } else {
        res.status(200).send({ error: 'No records found!' });
        console.log("PLAYER NÃO ENCONTRADO!");
    }
}

export const deletePlayer = async (req: Request, res: Response) => {
    const id = req.params.id;
    await PlayerModel.destroy({where: {id}});
    res.status(200).send('Data deleted!');
    console.log("PLAYER DELETADO!");
}
/* END: ACTIONS */