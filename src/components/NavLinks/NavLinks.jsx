import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (

        <>
            <li>
                <NavLink to='/'>Home</NavLink>

            </li>
            <li>
                <NavLink to='/blogs'>Blogs</NavLink>

            </li>
            <li>
                <NavLink to='/blogs'>Bookmarks</NavLink>

            </li>

        </>
    );
};

export default NavLinks;