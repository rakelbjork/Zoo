import axios from "axios";
import { useEffect, useState } from "react";
import { IAnimals } from "../../models/IAnimals";
import { IAnimalResponse } from "../../models/IAnimalResponse";
import "./Animals.css";
import { debug } from "console";

export function Animals() {
    const [animals, setAnimals] = useState<IAnimals[]>([]);

    useEffect(() => {
        if (animals.length !== 0) return;

        axios
        .get<IAnimalResponse>("https://animals.azurewebsites.net/api/animals")
        .then((response) => { 
            setAnimals(response.data.Search);
            });
    });

    let animalsHtml = animals.map((animal) => {
        return (
        <div key={animal.id} className="animal-container">
            <h3>{animal.name}</h3>
            <div className="img-container">
                <img src={animal.imageUrl} alt={animal.latinName} />
            </div>
        </div>
        );
    })

    return <div className="Animals">
        {animalsHtml}
    </div>

}