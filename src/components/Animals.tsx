import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimals } from "../models/IAnimals";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimals[]>();

    useEffect(() => {
        if (animals.length !== 0) return;
        axios.get<URL>("https://animals.azurewebsites.net/api/animals");

    });

    return (<>Lista med Animals</>)
}