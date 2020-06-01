import {Entity, Property} from "mikro-orm";


export class Skill {
    @Property()
    private name: string;
    @Property()
    private description: string;
    @Property()
    private damageStat: string;
    @Property()
    private upgrades: string[];
    @Property()
    private cooldown: number;

    constructor(name: string, description: string, damageStat: string, upgrades: string[],cooldown:number) {
        this.name = name;
        this.description = description;
        this.damageStat = damageStat;
        this.upgrades = upgrades;
        this.cooldown=cooldown;

    }

}
