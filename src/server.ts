import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv';
// import { mongoConnect } from "./instances/mysql";
// import cors from 'cors';
import api from './routes/api';

dotenv.config();

// mongoConnect();

const server = express();

/* START: RELEASE OF URLS AND METHODS */
// server.use(cors({
//     // origin: 'http://meusite.com',
//     // methods: ['GET', 'POST']
// }));
/* END: RELEASE OF URLS AND METHODS */

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));


/* START: USE ROUTS */
server.use('/api', api);


/* END: USE ROUTS */
server.use((req: Request, res: Response) => {
    req.params;
    res.status(404).json({ error: 'Endpoint não encontrado' });
});
server.listen(process.env.PORT);
