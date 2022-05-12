import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animalList, getDateFromStorage, now } from "../../FeedButton/ToggleList";
import { IAnimals } from "../../models/IAnimals";
import "./../style/Animals.css";

export const Animals = () => {
    const [animals, setAnimals] = useState<IAnimals[]>([]);
    let isAnimalHungry: boolean;
    let isSameDay: boolean;
    let timeSinceAnimalAte: number;
    let lastFed: Date;
  
    useEffect(() => {
      if (animals.length !== 0) return;
      setAnimals(animalList);
    });
  
    return (
      <>
        <div className='container'>
          {
            animals.map((animal) => {
              lastFed = getDateFromStorage(lastFed, animal);
              timeSinceAnimalAte = now.valueOf() - lastFed.valueOf();
              isSameDay = lastFed.getUTCDate() == now.getUTCDate();
  
              if (isAnimalHungry) {
                return (
                  <div key={animal.id} className='img-container'>
                    <Link to={"/animal/" + animal.id}>
                      <h3>{animal.name} (Hungrig! )</h3>
                      <img src={animal.imageUrl} alt={animal.latinName} />
                      <p>{animal.shortDescription}</p>
                    </Link>
                  </div>
                )
              } else {
                return (
                  <div key={animal.id} className='img-container'>
                    <Link to={"/animal/" + animal.id}>
                      <h3>{animal.name}</h3>
                      <img src={animal.imageUrl} alt={animal.latinName} />
                      <p>{animal.shortDescription}</p>
                    </Link>
                  </div>
                )
              }
            })
          }
        </div>
      </>
    )
  }