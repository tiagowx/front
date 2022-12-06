import { EGroup } from "../enums/e-group";

export interface ICountry {
    id: number;
    name: string;
    group: EGroup;
    points: number;
    matchies: number[];
    gols: number;
    wins: number;
    draws: number;
    defeats: number;
}
