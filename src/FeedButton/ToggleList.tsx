import axios from "axios";
import { IAnimals } from "../models/IAnimals"
import { IAnimalsInfo } from "../models/IAnimalsInfo";

const list: IAnimals[] = JSON.parse(localStorage.getItem("listOfAnimals") || "[]");

export const animalList: IAnimals[] = list;
export let now: Date = new Date();

export function toggleList(): IAnimals[] {
    if (animalList.length == 0) {
        axios.get<IAnimals[]>("https://animals.azurewebsites.net/api/animals")
        .then((res) => {
            let animalList: IAnimals[] = res.data;
            localStorage.setItem("listOfAnimals", JSON.stringify(animalList));
        });
    }
    return animalList;
}

export function getDateFromStorage(lasteAte: Date, theAnimal: IAnimalsInfo): Date {
    lasteAte = theAnimal.lastFed;
    lasteAte = new Date(lasteAte);
    lasteAte.setDate(lasteAte.getDate());
    return lasteAte;
}
