import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBookmark } from "../../utils/localStorageManagement";
const SingleBlog = () => {

    const [tabIndex, setTabIndex] = useState(() => {
        return location.pathname.endsWith("/author") ? 1 : 0;
    });

    const blog = useLoaderData();
    const { title, cover_image, comments_count, description, published_at, public_reactions_count, reading_time_minutes
        , tags, user, id } = blog;

    console.log(blog)
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12  ">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900 rounded-xl">
                <div className="space-y-6 p-4">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm">{reading_time_minutes} Minutes Reading</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} Comments • {public_reactions_count} Reacts</p>
                    </div>
                    {/* Tabs */}
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start p-4 flex-nowrap  ">
                        <Link
                            onClick={() => setTabIndex(0)}
                            to={`/blog/${id}`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex == 0 ? 'border border-b-0' : 'border-b'
                                }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link onClick={() => setTabIndex(1)}
                            to={`/blog/${id}/author`}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${tabIndex == 1 ? 'border border-b-0' : 'border-b'
                                }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        <MdBookmarkAdd
                            onClick={() => saveBookmark(blog)} className="text-primary mx-2 text-2xl hover:scale-105 hover:text-secondary"></MdBookmarkAdd>

                    </div>
                    <div >
                        <Outlet></Outlet>
                    </div>
                </div>

            </article >




        </div >
    );
};

export default SingleBlog;