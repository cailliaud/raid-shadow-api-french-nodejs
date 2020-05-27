import express, {Router} from "express";
import UserController from "../controllers/UserController";
import User from "../models/User";

class UserRoutes {
    public router: Router = express.Router();
    public controller: UserController = new UserController();

    constructor() {
        this.configure();
    }

    private configure(): void {
        this.router.get('/', (req, res) => {

            const user : User = this.controller.retrieveUser();
            res.status(200).json(user);

        })

        this.router.post('/', (req, res) => {

            const userCreated : boolean = this.controller.createUser( new User("Unknown","Unknown"));
            res.status(501).send("Not Yet Implemented");
        })
    }
}


export const userRoutes = new UserRoutes().router;

