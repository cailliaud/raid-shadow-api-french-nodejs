import express from "express";
import {championRoute} from "./routes/ChampionRoute";

export default class Server{

    readonly port: number

    constructor(port: number) {
        this.port=port;
    }

    start(){
        const app = express();
        app.use('/champion', championRoute);


        app.listen(this.port, function () {
            console.log("Serveur démarré");
        });

        app.use(this.logErrors);
        app.use(this.clientErrorHandler);
        app.use(this.errorHandler);

    }

    private logErrors = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) =>{
        console.error(err.stack);
        next(err);
    }

    private clientErrorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (req.xhr) {
            res.status(500).send({ error: 'Something failed!' });
        } else {
            next(err);
        }
    }

    private errorHandler= (err: Error, req: express.Request, res: express.Response) => {
        res.status(500);
        res.json( { error: err.message });
    }

}