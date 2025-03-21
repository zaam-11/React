import { Link } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
    const iconRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleMenu = () => {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.classList.toggle("hidden");
        }
    };

    return (
        <>
            <nav>
                <div className="container flex justify-between items-center bg-[#37b580] text-white px-7 py-5 shadow-lg">
                    <img className="w-[80px] md:w-[100px]" src="img/logo.png" alt="Logo" />
                    <ul className="flex hidden md:flex gap-6">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact Us</Link></li>
                        <li><Link to="/Product">Product</Link></li>
                    </ul>
                    <div>
                        <a href="#" onClick={toggleMenu}>
                            <img ref={iconRef} className="w-10 sm:l-[200px] md:hidden" src="img/menu.png" alt="Menu Icon" />
                        </a>

                        <img className=" hidden md:flex w-12" src="img/cart.png" alt="" />
                    </div>
                </div>
                {/* Mobile menu */}
                <div ref={mobileMenuRef} className="hidden md:hidden bg-[#fff]">
                    <ul className="flex flex-col space-y-3 p-6">
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/Shop"><li>SHOP</li></Link>
                        <Link to="/About"><li>ABOUT</li></Link>
                        <Link to="/Pages"><li>PAGES</li></Link>
                        <Link to="/Blog"><li>BLOG</li></Link>
                        <Link to="/Contact"><li>CONTACT</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;