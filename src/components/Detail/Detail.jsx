import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  let { id } = useParams();
  const [character, setCharacter] = useState([]);
  console.log(character);

  useEffect(() => {
    async function getCharacterId() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
    }
    getCharacterId();
  }, [id]);
  return (
    <div>
      <ul>
        <li> {id}</li>
        <li>{character.name}</li>
        <li>{character.status}</li>
        <img src={character.image}></img>
      </ul>
    </div>
  );
}

// but character id matches character name that was pressed and teh detail rendered matches teh id or whatever key we set useParams to.

//we are defining selected character and saying that we are assigning this selected character with a certain id.
