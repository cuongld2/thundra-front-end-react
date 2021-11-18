import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const MovieDetails = () => {
    const { id } = useParams();
    const { data: movie, error, isPending } =  useFetch('/movie/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('/movie/'+ movie.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="movie-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{movie.title}</h2>
                <div>{movie.content}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
     );
}
 
export default MovieDetails;