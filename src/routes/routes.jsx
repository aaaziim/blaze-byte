import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "../Root.jsx"
import Home from '../pages/Home/Home.jsx'
import Blogs from '../pages/Blogs/Blogs.jsx';
import Bookmarks from '../pages/Bookmarks/Bookmarks.jsx'
import SingleBlog from "../pages/SingleBlog/SingleBlog.jsx"
import Author from "../components/Author/Author.jsx"
import Content from "../components/Content/Content.jsx"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
                element: <Blogs></Blogs>
            },
            {
                path: "/blog/:id",
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                element: <SingleBlog></SingleBlog>,
                children: [
                    {
                        index: true,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                        element: <Content></Content>
                    },
                    {
                        path: "author",
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                        element: <Author></Author>
                    },
                ]
            },

            {
                path: "/bookmarks",
                element: <Bookmarks></Bookmarks>
            },
        ]
    }
])

export default router;