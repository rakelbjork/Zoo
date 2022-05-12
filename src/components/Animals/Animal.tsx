import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { animalList, getDateFromStorage, now } from '../../FeedButton/ToggleList';
import { IAnimalsInfo } from '../../models/IAnimalsInfo';
import { feed } from '../../FeedButton/Feed';

export const Animal = () => {
  const [animal, setIAnimalsInfo] = useState<IAnimalsInfo>({
    id: 0,
    imageUrl: '',
    isFed: false,
    latinName: '',
    longDescription: '',
    medicine: '',
    name: '',
    shortDescription: '',
    yearOfBirth: 0,
    lastFed: new Date(),
  });

  const [time, setTime] = useState<Date>(new Date())
  let params = useParams();
  let lastFed: Date;

  let theAnimal: IAnimalsInfo = animalList.filter(function (thisAnimal) {
    return thisAnimal.id.toString() == params.id;
  })[0];
  const index: number = animalList.findIndex(i => i.id === theAnimal.id);

  useEffect(() => {
    setIAnimalsInfo(theAnimal);
    lastFed = getDateFromStorage(lastFed, theAnimal);
    setTime(lastFed);

    console.log(now.valueOf() - lastFed.valueOf());
    if (now.valueOf() - lastFed.valueOf() > 3600000 * 3) {
      animalList[index].isFed = false;
      localStorage.setItem('listOfAnimals', JSON.stringify(animalList));
      return;
    }
  }, []);


  const feed = () => {
    if (!animal.isFed) {
      setIAnimalsInfo({ ...animal, isFed: true, lastFed: new Date() });
      setTime(new Date());
      animalList[index].isFed = true;
      animalList[index].lastFed = new Date();
      localStorage.setItem('listOfAnimals', JSON.stringify(animalList));
      return;
    }
  }

  return (
    <div>
      <h4>{animal.latinName}</h4>
      <img src={animal.imageUrl} alt={animal.latinName} />
      <p>{animal.longDescription}</p>
      <p>{time.toUTCString()}</p>
      <button
        onClick={feed}
      >
        Mata {animal.name}
      </button>
    </div>
  )
}
