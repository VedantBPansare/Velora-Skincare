import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [showMenu, setShowMenu] = useState(false);

    function loadData() {
        const savedUser = JSON.parse(
            localStorage.getItem("veloraUser")
        );

        const loggedIn =
            localStorage.getItem("veloraLoggedIn") === "true";

        setUser(loggedIn ? savedUser : null);

        const cart = JSON.parse(
            localStorage.getItem("veloraCart")
        ) || [];

        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartCount(totalItems);
    }

    useEffect(() => {
        loadData();

        window.addEventListener(
            "veloraAuthChange",
            loadData
        );

        window.addEventListener(
            "veloraCartChange",
            loadData
        );

        return () => {
            window.removeEventListener(
                "veloraAuthChange",
                loadData
            );

            window.removeEventListener(
                "veloraCartChange",
                loadData
            );
        };
    }, []);

    function handleLogout() {
        localStorage.removeItem("veloraLoggedIn");

        setUser(null);
        setShowMenu(false);

        window.dispatchEvent(
            new Event("veloraAuthChange")
        );

        navigate("/");
    }

    return (
        <nav className="navbar">
            <div className="logo">
                VELORA
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>

                <Link to="/shop">Shop</Link>

                <Link to="/about">
                    About Us
                </Link>

                <Link to="/cart">
                    Cart 
                </Link>

                {user ? (
                    <div className="profile-menu">
                        <button
                            className="profile-button"
                            onClick={() =>
                                setShowMenu(!showMenu)
                            }
                        >
                            <span className="profile-circle">
                                {user.name
                                    ?.charAt(0)
                                    .toUpperCase()}
                            </span>

                            <span className="profile-name">
                                {user.name}
                            </span>
                        </button>

                        {showMenu && (
                            <div className="profile-dropdown">
                                <Link
                                    to="/profile"
                                    onClick={() =>
                                        setShowMenu(false)
                                    }
                                >
                                    Edit Profile
                                </Link>

                                <button
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;