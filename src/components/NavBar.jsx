import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Inicio.css";

export function NavBar() {
    const [darkMode, setDarkMode] = useState(false);
    const [menu, setMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Inicializar el estado del tema oscuro desde localStorage
        const isDarkMode = localStorage.getItem("darkMode") === "enabled";
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            setDarkMode(true);
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            if (newMode) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
            return newMode;
        });
    };

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const handleMenuClick = () => {
        setMenu(false);
    };

    const getNavLinkClass = (path) => {
        return location.pathname === path ? "text-violet-800" : "text-gray-900 dark:text-white";
    };

    return (
        <div className="w-full h-28">
            <nav className="fixed top-0 z-20 w-full bg-white shadow-xl dark:bg-gray-900 start-0">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-2 mx-auto">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-bold textCar whitespace-nowrap dark:text-white hover:text-violet-800">
                            Carlos
                        </span>
                    </div>
                    <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                        <label htmlFor="darkModeToggle" className="flex items-center p-2 cursor-pointer">
                            <input
                                type="checkbox"
                                id="darkModeToggle"
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                className="hidden"
                            />
                            <i
                                className={`transition-transform duration-300 text-3xl ${
                                    darkMode ? "bx bxs-sun text-violet-800" : "bx bxs-moon text-gray-500"
                                }`}></i>
                        </label>
                        <div
                            className={`icon nav-icon-5 p-2 inline-flex items-center justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-slate-50 ${
                                menu ? "open" : ""
                            }`}
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={toggleMenu}>
                            <span className="me dark:text-slate-50"></span>
                            <span className="me dark:text-slate-50"></span>
                            <span className="me dark:text-slate-50"></span>
                        </div>
                    </div>
                    <div
                        className={`items-center justify-between ${
                            menu ? "block" : "hidden"
                        } w-full md:flex md:w-auto md:order-1`}
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 text-lg font-bold border rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link
                                    to="/"
                                    className={`nav block py-2 px-3 rounded max-[768px]:hover:bg-gray-100 md:p-0 md:hover:text-violet-800 ${getNavLinkClass(
                                        "/"
                                    )}`}
                                    onClick={handleMenuClick}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/About"
                                    className={`nav block py-2 px-3 rounded max-[768px]:hover:bg-gray-100 md:p-0 md:hover:text-violet-800 ${getNavLinkClass(
                                        "/About"
                                    )}`}
                                    onClick={handleMenuClick}>
                                    Acerca de mí
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Project"
                                    className={`nav block py-2 px-3 rounded max-[768px]:hover:bg-gray-100 md:p-0 md:hover:text-violet-800 ${getNavLinkClass(
                                        "/Project"
                                    )}`}
                                    onClick={handleMenuClick}>
                                    Proyectos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
