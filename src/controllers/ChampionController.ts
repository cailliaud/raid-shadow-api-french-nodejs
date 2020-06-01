import Champion, {Affinity, Faction, Rarity, Skill, Stats, Type} from "../models/Champion";


export default class ChampionController {

    constructor() {
    }

    public retrieveUser(): Champion {
        return new Champion("Hordin",
            Faction.BANNER_LORDS,
            Rarity.EPIC,
            Affinity.MAGIC,
            Type.ATTACK,
            new Stats(1321, 859, 95, 15, 60, 30, 0),
            [
                new Skill(
                    "Frappe Implacable",
                    "Attaque deux fois un ennemi. Octroie un tour supplémentaire si la cible est tuée.",
                    'ATQ',
                    ["Niv. 2 : Dégâts +5%", "Niv. 3 : Dégâts +5%", "Niv. 4 : Dégâts +5%", "Niv. 5 : Dégâts +10%"],
                    0
                ),
                new Skill(
                    'Écartèlement',
                    "Attaque un ennemi. Place un débuff de réduction d'ATQ de 60% pendant 2 tours. Possède 20% de chance de débloquer Perceciel pendant 1 tour.",
                    'ATQ',
                    ["Niv. 2 : Dégâts +5%", "Niv. 3 : Chance de buff/débuff +5%", "Niv. 4 : Dégâts +10%", "Niv. 5 : Chance de buff/débuff +10%"],
                    4
                ),
                new Skill(
                    "Haine Ardente",
                    "Place un buff d'augmentation d'ATQ de 50%, un buff d'augmentation de TAUX C. de 30% et un buff d'augmentation de VIT de 30% sur ce champion pendant 2 tours. Octroie un tour supplémentaire.",
                    "NONE",
                    ["Niv. 2 : Temps de rechargement -1 tour"],
                    6
                )
            ],
            'Augmente la VIT des alliés dans les cryptes de faction de 20%.'
        );
    }

}