import express from "express";


const router = express.Router();

router.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    next(err);
});

router.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.xhr) {
        res.status(500).send({error: 'Something failed!'});
    } else {
        next(err);
    }
});

router.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({error: err.message});
});

export const errorRoute = router;