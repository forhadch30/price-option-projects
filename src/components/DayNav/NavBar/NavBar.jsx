const NavBar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/blog", name: "Blog" }
    ];
    return (
        <div>
            <ul className="md:flex">
                {
                    routes.map((rout) =>
                        <li className="mr-5" key={rout.id}>
                            <a href={routes.path}>{rout.name}</a>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default NavBar;