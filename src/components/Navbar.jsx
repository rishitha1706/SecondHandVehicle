import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🚗</span>
          <span>Auto<span>Mart</span></span>
        </Link>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/vehicles">Buy Vehicle</Link>
          <Link to="/sell">Sell Vehicle</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        {/* Login */}
        <Link to="/login" className="login-btn">
          Login / Register
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;