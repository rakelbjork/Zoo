import { IAnimals } from "./IAnimals";

export interface IAnimalResponse {
    Search: IAnimals[];
    totalresults: string;
}