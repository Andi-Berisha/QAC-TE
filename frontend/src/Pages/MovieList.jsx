import { Button, Badge } from 'reactstrap';
import { Link, } from 'react-router-dom';

const MovieList = ({ movie }) => {

    return (
        <>
            <div className="media" style={{ margin: '50px' }}>
                <img width="200px" src={movie.Poster} className="align-self-center mr-3" alt="..." />
                <div className="media-body" style={{ color: 'white' }}>

                    <h4 className="mt-0">
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
    )
}

export default MovieList;