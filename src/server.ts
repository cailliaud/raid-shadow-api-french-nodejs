import express from "express";
import {userRoutes} from "./routes/UserRoutes";

export default class Server{

    readonly port: number

    constructor(port: number) {
        this.port=port;
    }

    start(){
        const app = express();
        app.use('/users', userRoutes);


        app.listen(this.port, function () {
            console.log("Serveur démarré");
        });
    }
}