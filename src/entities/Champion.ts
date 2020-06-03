import {Collection, Entity, Enum, ManyToMany, OneToOne, PrimaryKey, Property, SerializedPrimaryKey} from "mikro-orm";
import {ObjectId} from "mongodb";
import {Stats} from "./Stats";
import {Skill} from "./Skill";

@Entity({tableName: 'champions'})
export class Champion {
    @PrimaryKey()
    _id!: ObjectId;
    @Property()
    private name: string;
    @Enum()
    private faction: Faction;
    @Enum()
    private rarity: Rarity;
    @Enum()
    private affinity: Affinity;
    @Enum()
    private type: Type;
    @Property()
    private stats: Stats;
    @Property()
    private skills: Skill[];
    @Property()
    private aura: string;

    constructor(name: string, faction: Faction, rarity: Rarity, affinity: Affinity, type: Type, stats: Stats, skills: Skill[], aura: string) {
        this.name = name;
        this.faction = faction;
        this.rarity = rarity;
        this.affinity = affinity;
        this.type = type;
        this.stats = stats;
        this.skills = skills;
        this.aura = aura;
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




