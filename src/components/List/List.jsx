import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      console.log('hi, res', res);
      const { results } = await res.json();
      console.log('results', results);
      setCharacters(results);
      //   setTimeout(() => {}, 700);
      setLoading(false);
    }
    getCharacters();
  }, []);
  if (loading) return <div>Loading</div>;
  return (
    <>
      <h1>Page that renders list of characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      {/* <Link to="/detail">Details</Link> */}
    </>
  );
}
