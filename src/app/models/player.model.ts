import { IStat } from './stat.model';
import { IHonour } from './honour.model';

export interface IPlayer {
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
}


