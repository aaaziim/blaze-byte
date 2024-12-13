import { Link, useLoaderData } from "react-router-dom";
import PlaceHolderImage from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import DOMPurify from "dompurify";

const Content = () => {
    const blog = useLoaderData();
    const {
        title,
        body_html,
        cover_image,
        comments_count,
        description,
        published_at,
        public_reactions_count,
        reading_time_minutes,
        tags,
        user,
        id,
    } = blog;

    // Sanitize the HTML content
    const sanitizedHtml = DOMPurify.sanitize(body_html);

    return (
        <div className="max-w-full mx-auto group hover:no-underline focus:no-underline rounded-2xl">
            <div className="space-y-2">
                <img
                    role="presentation"
                    className="object-cover w-full p-2 rounded-2xl "
                    src={cover_image || PlaceHolderImage}
                    alt={title}
                />
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <Markdown rehypePlugins={[rehypeRaw]}>{sanitizedHtml}</Markdown>
            </div>
        </div>
    );
};

export default Content;
