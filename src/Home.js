import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blog');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blog={blog} title="All Blogs"/>
        </div>
     );
}

export default Home;