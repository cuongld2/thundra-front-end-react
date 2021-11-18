import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = { title, content, };

        setIsPending(true);

        fetch('/movie', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(movie)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New movie</h2>
            <form onSubmit={handleSubmit}>
                <label>movie Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>movie Content:</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                {!isPending && <button>Add movie</button>}
                {isPending && <button disabled>Adding movie</button>}
            </form>
        </div>
     );
}
 
export default Create;