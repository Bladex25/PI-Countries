import "./navbar.styles.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
function Navbar() {
  return (
    <div className="search-box">
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/create">
        <button>Create Activity</button>
      </NavLink>
      <SearchBar />
    </div>
  );
}

export default Navbar;
