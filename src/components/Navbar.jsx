import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Services",
        "Contact",
    ];

    return (
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="logo">
                <img
                    src={logo}
                    alt="Vinith Kumar Logo"
                />
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                {navLinks.map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
        </nav>
    );
}

export default Navbar;