import express from "express";
import {Champion} from "../entities/Champion";
import {DI} from "../server";


const router = express.Router();


router.get('/', async (req: express.Request, res: express.Response) => {

    const champions: Champion[] = await DI.championEntityRepository.findAll();
    res.status(200).json(champions);

});

router.get('/:championName', async (req: express.Request, res: express.Response) => {
    const championName = req.params.championName;
    res.status(501);

});

router.post('/', async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    return next(new Error("Cannot create object"));

});


export const championRoute = router;

