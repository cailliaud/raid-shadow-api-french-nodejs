import express, {Router} from "express";
import ChampionController from "../controllers/ChampionController";
import Champion from "../models/Champion";

class ChampionRoute {
    public router: Router = express.Router();
    public controller: ChampionController = new ChampionController();

    constructor() {
        this.configure();
    }

    private configure(): void {
        this.router.get('/', async (req, res) => {

            const user: Champion = this.controller.retrieveUser();
            res.status(200).json(user);

        })

        this.router.get('/', async (req, res) => {

            const user: Champion = this.controller.retrieveUser();
            res.status(200).json(user);

        })

        this.router.post('/', async (request: express.Request, response: express.Response, next: express.NextFunction) => {
            return next(new Error("Cannot create object"));

        })


    }

}


export const championRoute = new ChampionRoute().router;

