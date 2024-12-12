import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (

        <>
            <li   >
                <NavLink to='/' className={({ isActive }) => isActive ? "text-primary" : "text-secondary"} >Home</NavLink>

            </li>
            <li   >
                <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-primary" : "text-secondary"} >Blogs</NavLink>

            </li>
            <li   >
                <NavLink to='/bookmarks' className={({ isActive }) => isActive ? "text-primary" : "text-secondary"}>Bookmarks</NavLink>

            </li>

        </>
    );
};

export default NavLinks;