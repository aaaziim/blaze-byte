import { useLoaderData } from "react-router-dom";
import BlogCard from "../../components/Blogcard/BlogCard";

const Blogs = () => {


    const blogs = useLoaderData();


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
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map(blog => <BlogCard
                            key={blog.id}
                            blog={blog}
                            deletable={false}
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

export default Blogs;