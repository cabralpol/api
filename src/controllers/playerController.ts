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
        console.log("selected players: ", JSON.stringify(players));
        res.status(200).send(players);
    } else {
        console.log("Players not found: ", JSON.stringify(players));
        res.status(200).send({ error: "Players not found" });
    }
}

export const selectPlayer = async (req: Request, res: Response) => {
    const id = req.params.id;
    let player = await PlayerModel.findByPk(id);

    if (player) {
        res.status(200).send(player);
        console.log("Selected player: ", JSON.stringify(player) + "\n");
    } else {
        res.status(200).send({ error: 'Player not found' });
        console.log("Player not found: " + "\n");
    }
}

export const insertPlayer = async (req: Request, res: Response) => {

    let player;
    const json = req.body.myField;
    const obj = JSON.parse(json);
    
    if (obj.name && obj.last_name && obj.email && obj.age) {        

        player = await PlayerModel.create(obj);
        
        res.status(201).send(player);
        console.log("Inserted player: ", JSON.stringify(player) + "\n");
    } else {        
        res.status(200).send({ error: "No records inserted" });
        console.log("No records inserted: ", JSON.stringify(player) + "\n");
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
        if(req.body.level) {
            player.level = req.body.level;
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