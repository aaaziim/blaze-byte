import { Link, useLoaderData } from "react-router-dom";
import PlaceHolderImage from "../../assets/404.jpg"

const Content = () => {
    const blog = useLoaderData()
    const { title, cover_image, comments_count, description, published_at, public_reactions_count, reading_time_minutes
        , tags, user, id } = blog;
    return (
        <div className="max-w-full mx-auto group hover:no-underline focus:no-underline  rounded-2xl  ">
            <div className="p-6 space-y-2">
                <img role="presentation" className="object-cover w-full  p-2 rounded-2xl h-44 
        " src={cover_image || PlaceHolderImage} />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">

                    {tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)}
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Content;