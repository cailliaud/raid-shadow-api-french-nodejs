import {EntityManager, EntityRepository, MikroORM} from "mikro-orm";
import {Champion} from "./entities/Champion";
import {MongoDriver} from "mikro-orm/dist/drivers/MongoDriver";
import express from "express";
import {championRoute} from "./routes/ChampionRoute";
import {errorRoute} from "./routes/ErrorRoute";
import {Stats} from "./entities/Stats";
import {Skill} from "./entities/Skill";


export const DI = {} as {
    orm: MikroORM,
    em: EntityManager,
    championEntityRepository: EntityRepository<Champion>
};

const app = express();
const port = process.env.PORT || 4000;

(async () => {
    const orm: MikroORM<MongoDriver> = await MikroORM.init({
        entities: [Champion],
        type: 'mongo',
        dbName: 'raid-shadow-legends-french',
        clientUrl: 'mongodb://localhost:27017',
        baseDir: __dirname, // defaults to `process.cwd()`
    });
    DI.em = orm.em;
    DI.championEntityRepository = orm.em.getRepository(Champion);

    app.use('/champion', championRoute);
    app.use(errorRoute);
    app.listen(port, function () {
        console.log("Serveur démarré");
    });
})();