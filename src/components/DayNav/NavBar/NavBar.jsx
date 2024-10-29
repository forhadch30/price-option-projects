import { useState } from "react";
import Link from "../../Link/Link";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/blog", name: "Blog" }
    ];
    return (
        <nav className="bg-green-900 text-white p-5">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open === true ? <IoClose></IoClose> : <IoMenuSharp></IoMenuSharp>
                }
            </div>
            <ul className={`
                md:flex absolute md:static duration-1000 
                ${open ? 'left-6' : '-left-36'}
                 bg-green-900 p-2 `}>
                {
                    routes.map((route) => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;