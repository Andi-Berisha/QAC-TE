import { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieSearchBar from './MovieSearchBar';
import films from '../Resources/films.json';

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

    useEffect(() => {
        setMovieList(films.filter(movie => movie.Title.toLowerCase().includes(query.toLowerCase())));
    }, [query]);

    return (
        <>
            <div className="container" style={{ marginTop: '20px' }}>

                <MovieSearchBar handleQuery={handleQuery} handleSubmit={handleSubmit} query={query} />


                <hr style={{ backgroundColor: 'gray', marginTop: '30px' }} />
                {films.filter((val) => {
                    if (query == "") {
                        return val
                    } else if (val.Title.toLowerCase().includes(query.toLowerCase())) {
                        return val
                    }


                }).map((movie) => (
                    <>
                        <div class="media" style={{ margin: '50px' }}>
                            <img width="200px" src={movie.Poster} class="align-self-center mr-3" alt="..." />
                            <div class="media-body" style={{ color: 'white' }}>

                                <h4 class="mt-0">
                                    {movie.Title}
                                    <Badge color="warning" pill style={{ marginLeft: '15px' }}>
                                        <Link to="/filmClassification" style={{ color: 'black' }}>{movie.Rating}</Link>
                                    </Badge>
                                </h4>

                                <p><em>{movie.Summary}</em></p>
                                <p><small>Actors: {movie.Actors}</small></p>
                                <p><small>Directors: {movie.Directors}</small></p>

                                <Button >
                                    <Link to={{ pathname: `/bookings/${movie.Title}` }} style={{ color: 'white' }}>Book Now</Link>
                                </Button>

                            </div>
                        </div>
                        <hr style={{ backgroundColor: 'gray' }} />
                    </>

                {movieList.map((movie) => (
                    <MovieList key={movie.id} query={query} movie={movie} />
                ))}

            </div>
        </>
    )
}

export default ListingsPage;