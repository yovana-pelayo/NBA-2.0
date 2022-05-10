import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
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
          <li key={character.id}>
            <Link to={`/detail/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
