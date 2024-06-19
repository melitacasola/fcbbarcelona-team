import { IPlayer } from "./player.model";
import { IStat } from "./stat.model";
import { IHonour } from "./honour.model";


export class Player implements IPlayer {
    playerId: number;
    name: string;
    position: string;
    url: string;
    url2: string;
    url3: string;
    shirtNumber: number;
    weight: number;
    height: number;
    birth: string;
    placeOfBirth: string;
    nationality: string;
    age: string;
    description: string;
    review: string;
    honour: IHonour[];
    stats: IStat[];

    constructor(player: IPlayer) {
        this.playerId = player.playerId;
        this.name = player.name;
        this.position = player.position;
        this.url = player.url;
        this.url2 = player.url2;
        this.url3 = player.url3;
        this.shirtNumber = player.shirtNumber;
        this.weight = player.weight;
        this.height = player.height;
        this.birth = player.birth;
        this.placeOfBirth = player.placeOfBirth;
        this.nationality = player.nationality;
        this.age = player.age;
        this.description = player.description;
        this.review = player.review;
        this.honour = player.honour;
        this.stats = player.stats;

    }
}
