import toast from "react-hot-toast";

export const getBookmarks = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');

    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }

    return blogs;

};


// save


export const saveBookmark = (blog) => {
    let savedBookmarks = getBookmarks();
    const isExist = savedBookmarks.find(bookmark => bookmark.id === blog.id)
    if (isExist) {
        return toast.error('Already Bookmarked!')
    }
    savedBookmarks.push(blog)
    localStorage.setItem('blogs', JSON.stringify(savedBookmarks))
    return toast.success('Post Added in Bookmark!')
}


export const deleteBookmark = (blog) => {
    let savedBookmarks = getBookmarks();
    const remainingBookmarks = savedBookmarks.filter(bookmark => bookmark.id !== blog.id)
    localStorage.setItem('blogs', JSON.stringify(remainingBookmarks))
    return toast.success('Removed From Bookmark!')
}