export interface Player {
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
    honour: Honour[];
    stats: Stat[];
}

interface Honour {
    name: string;
    years: string;
}

export interface Stat {
    name: string;
    value: number;
    description: string;
    additionalInfo?: any;
}