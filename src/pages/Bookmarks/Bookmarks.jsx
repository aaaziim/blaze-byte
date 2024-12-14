

import { NavLink, useLoaderData } from "react-router-dom";
import BlogCard from "../../components/Blogcard/BlogCard";
import { useEffect, useState } from "react";
import { deleteBookmark, getBookmarks } from "../../utils/localStorageManagement";

const Bookmarks = () => {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const bookmarkedblogs = getBookmarks();
        setBookmarks(bookmarkedblogs);
    }, [])


    const handleDelete = (blog) => {
        deleteBookmark(blog);
        const bookmarkedblogs = getBookmarks();
        setBookmarks(bookmarkedblogs)
    }

    if (bookmarks.length < 1) {
        return (
            <div className="flex flex-col  gap-10 items-center justify-center min-h-[calc(100vh-120px)]">
                <h1 className="text-5xl font-bold">Bookmark <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% text-transparent bg-clip-text animate-gradient">Empty</span></h1>
                <NavLink to="/blogs" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read Blogs</span></NavLink>


            </div>
        );
    }

    return (
        <div>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {bookmarks.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                            deletable={true}
                            handleDelete={handleDelete}
                        ></BlogCard>)}

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Bookmarks;