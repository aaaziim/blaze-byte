import { Link } from "react-router-dom";
import PlaceHolderImage from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { title, cover_image, description, published_at, id } = blog;

    return (
        <div className="relative transition-transform transform hover:scale-105">
            <Link
                to={`/blog/${id}`}
                className="block border border-primary rounded-2xl overflow-hidden hover:border-secondary p-1"
            >
                <img
                    src={cover_image || PlaceHolderImage}
                    alt={title}
                    className="object-cover rounded-xl w-full h-44"
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold truncate">{title}</h3>
                    <span className="text-sm text-gray-500">
                        {new Date(published_at).toLocaleDateString()}
                    </span>
                    <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
                </div>
            </Link>
            {deletable && (
                <MdDeleteForever
                    onClick={() => handleDelete(blog)}
                    className="absolute -top-5 -right-5 text-5xl text-primary hover:text-secondary cursor-pointer bg-white rounded-full shadow-lg p-2"
                />
            )}
        </div>
    );
};

export default BlogCard;
