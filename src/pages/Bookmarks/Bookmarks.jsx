

import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/Blogcard/BlogCard";
import { useEffect, useState } from "react";
import { getBookmarks } from "../../utils/localStorageManagement";

const Bookmarks = () => {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const bookmarkedblogs = getBookmarks();
        setBookmarks(bookmarkedblogs);
    }, [])
    return (
        <div>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {bookmarks.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                            deletable={true}
                        ></BlogCard>)}

                    </div>
                    {/* <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline 
                        
                        ">Load more posts...</button>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Bookmarks;