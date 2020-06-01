export default class Champion {
    private name: string;
    private faction: Faction;
    private rarity: Rarity;
    private affinity: Affinity;
    private type: Type;
    private stats: Stats;
    private skills: Skill[];
    private aura: string;

    constructor(name: string, faction: Faction, rarity: Rarity, affinity: Affinity, type: Type, stats: Stats, skills: Skill[], aura: string) {
        this.name = name;
        this.faction = faction;
        this.rarity = rarity;
        this.affinity = affinity;
        this.type = type;
        this.stats= stats;
        this.skills= skills;
        this.aura= aura;
    }


}

export enum Faction {
    BANNER_LORDS = 'Seigneurs',
    HIGH_ELVES = 'Hauts Elfes',
    THE_SACRED_ORDER = "L'Ordre Sacré",
    BARBARIANS = 'Barbares',
    OGRYN_TRIBES = 'Tribus Ogryn',
    LIZARDMEN = 'Hommes Lézards',
    SKINWALKERS = 'Marcheurs de Peau',
    ORCS = 'Orcs',
    DEMONSPAWN = 'Rejetons Démoniaques',
    UNDEAD_HORDES = 'Hordes',
    DARK_ELVES = 'Elfes Noirs',
    KNIGHT_REVENANT = 'Revenants Chevaliers',
    DWARVES = 'Nains'
}

export enum Rarity {
    LEGENDARY = 'Légendaire',
    EPIC = 'Épique',
    RARE = 'Rare',
    UNCOMMON = 'Peu Commun',
    COMMON = 'Commun'
}

export enum Affinity {
    MAGIC = 'Magie',
    SPIRIT = 'Esprit',
    FORCE = 'Force',
    VOID = 'Néant'
}

export enum Type {
    ATTACK = 'Attaque',
    DEFENSE = 'Défense',
    HEALTH_POINT = 'Points de Vie',
    SUPPORT = 'Support'
}

export class Stats {
    private attack: number;
    private defense: number;
    private speed: number;
    private criticalRate: number;
    private criticalDamage: number;
    private resistance: number;
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

export class Skill {
    private name: string;
    private description: string;
    private damageStat: string;
    private upgrades: string[];
    private cooldown: number;

    constructor(name: string, description: string, damageStat: string, upgrades: string[],cooldown:number) {
        this.name = name;
        this.description = description;
        this.damageStat = damageStat;
        this.upgrades = upgrades;
        this.cooldown=cooldown;

    }

}

