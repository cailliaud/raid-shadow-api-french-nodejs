import {Entity, Property} from "mikro-orm";

export class Stats {
    @Property()
    private attack: number;
    @Property()
    private defense: number;
    @Property()
    private speed: number;
    @Property()
    private criticalRate: number;
    @Property()
    private criticalDamage: number;
    @Property()
    private resistance: number;
    @Property()
    private accuracy: number;

    constructor(attack: number, defense: number, speed: number, criticalRate: number, criticalDamage: number, resistance: number, accuracy: number) {
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.criticalRate = criticalRate;
        this.criticalDamage = criticalDamage;
        this.resistance = resistance;
        this.accuracy = accuracy;
    }
}