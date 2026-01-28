import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">NavMe</div>
      <nav className="navber-links">
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/about" className="about">
          About
        </Link>
        <Link to="/contact" className="contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

