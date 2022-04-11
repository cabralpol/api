import express, { Request, Response } from "express";
import path from "path";
import dotenv from 'dotenv';
import cors from 'cors';
import api from './routes/api';

dotenv.config();

const server = express();

/* START: RELEASE OF URLS AND METHODS */
server.use(cors({
    origin: 'https://resttesttest.com',
    // methods: ['GET', 'POST']
}));
/* END: RELEASE OF URLS AND METHODS */

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));


/* START: USE ROUTS */
server.use('/api', api);

/* END: USE ROUTS */

/* START: ERROR PAGE */
server.use((req: Request, res: Response) => {
    req.params;
    res.status(404).json({ error: 'Endpoint não encontrado' });
});
/* END: ERROR PAGE */

/* START: LISTENING ON PORT */
server.listen(process.env.PORT, () => {
    console.log("Server listening at http://localhost:" + process.env.PORT + "...");
});
/* END: LISTENING ON PORT */
