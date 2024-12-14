import { useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../../components/Blogcard/BlogCard";
import RingLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";
const Blogs = () => {

    const blogs = useLoaderData();

    const navigation = useNavigation()

    if (navigation.state === "loading") {
        return (
            <div className="flex items-center justify-center h-screen">
                <RingLoader color="#36d7b7" size={60} />
            </div>
        );
    }
    return (
        <div>
            <section className="">

                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                        <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                            <span className="text-xs ">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                            <p>{blogs[0].description}</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                            deletable={false}
                        ></BlogCard>)}

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Blogs;