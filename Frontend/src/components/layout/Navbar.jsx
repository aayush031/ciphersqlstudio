import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__logo">
                    CipherSQLStudio
                </Link>

                <div className="navbar__links">
                    <Link to="/">Assignments</Link>
                </div>

                <button className="navbar__menu-btn">
                    ☰
                </button>
            </div>
        </nav>
    );
}

export default Navbar;