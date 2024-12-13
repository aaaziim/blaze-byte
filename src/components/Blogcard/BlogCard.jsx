import { Link } from "react-router-dom";
import PlaceHolderImage from "../../assets/404.jpg"
const BlogCard = ({ blog }) => {
    const { title, cover_image, description, published_at, id } = blog;
    console.log(blog)
    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 hover:scale-105 border-primary rounded-2xl hover:border-secondary ">
            <img role="presentation" className="object-cover w-full  p-2 rounded-2xl h-44 
        " src={cover_image || PlaceHolderImage} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;