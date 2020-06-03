import express from "express";
import {Champion} from "../entities/Champion";
import {DI} from "../server";
import {FilterQuery} from "mikro-orm";


const router = express.Router();


router.get('/', async (req: express.Request, res: express.Response) => {

    const champions: Champion[] = await DI.championEntityRepository.findAll();
    res.status(200).json(champions);

});

router.get('/:championName', async (req: express.Request, res: express.Response) => {
    const championName = req.params.championName
    const query = {name: championName} as FilterQuery<Champion>;
    await DI.championEntityRepository.findOne(query)
        .then(champion => {
            if (champion == null) {
                res.status(404).send({error: 'Not found'});
            } else {
                res.status(200).json(champion);
            }
        });

});

router.post('/', async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    return next(new Error("Cannot create object"));

});


export const championRoute = router;

