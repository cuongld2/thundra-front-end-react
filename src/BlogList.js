import { Link } from 'react-router-dom';

const BlogList = ({blog, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blog.map(eachblog => (
                <div className="blog-preview" key={eachblog.id}>
                    <Link to={`/blog/${eachblog.id}`}>
                        <h2>{eachblog.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;