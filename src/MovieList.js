import { Link } from 'react-router-dom';

const MovieList = ({movie, title}) => {
    
    return ( 
        <div className="movie-list">
            <h2>{title}</h2>
            {movie.map(eachmovie => (
                <div className="movie-preview" key={eachmovie.id}>
                    <Link to={`/movie/${eachmovie.id}`}>
                        <h2>{eachmovie.title}a</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default MovieList;