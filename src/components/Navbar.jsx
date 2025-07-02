import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">Context Store</Link>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="header__card">
            <FaShoppingCart />
            <div className="header__card__indicator">
              6
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar