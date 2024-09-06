
'use client'; 

import { useQuery } from '@apollo/client';
import { GET_FILMS } from '../graphql/queries/getFilms';

const YourComponent = () => {
   const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Star Wars Films</h1>
      <ul>
        {data.allFilms.films.map((film: any) => (
          <li key={film.id}>
            {film.title} - {new Date(film.releaseDate).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default YourComponent;
