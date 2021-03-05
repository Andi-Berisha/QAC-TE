import { useState } from 'react';
import MovieList from './MovieList';
import MovieSearchBar from './MovieSearchBar';
import films from '../../Resources/films.json';

const ListingsPage = () => {

    const [query, setQuery] = useState(``);
    const [movieList, setMovieList] = useState(films);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovieList(films.filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase())));
    }

    return (
        <>
            <div className="container" style={{ marginTop: '20px' }}>

                <MovieSearchBar handleQuery={handleQuery} handleSubmit={handleSubmit} query={query} />

                <hr style={{ backgroundColor: 'gray', marginTop: '30px' }} />

                {movieList.map((movie) => (
                    <MovieList key={movie.id} query={query} movie={movie} />
                ))}

            </div>
        </>
    )
}

export default ListingsPage;