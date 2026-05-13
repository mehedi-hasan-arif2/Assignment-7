import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import clockIcon from "../assets/clock.png";
import chartIcon from "../assets/ChartLine.png";

const Navbar = () => {
  const linkStyle = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all";
  const activeStyle = "bg-[#2D4A43] text-white";
  const normalStyle = "text-gray-600 hover:bg-gray-100";

  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white max-w-7xl mx-auto">
      <div className="flex items-center">
        <img src={logo} alt="KeenKeeper" className="h-8" />
      </div>

      <div className="flex gap-4">
        <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
          <img src={homeIcon} className="w-5 h-5 invert-[.5] brightness-200" style={{filter: "none"}} alt="" />
          <span className="font-medium">Home</span>
        </NavLink>

        <NavLink to="/timeline" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
          <img src={clockIcon} className="w-5 h-5" alt="" />
          <span className="font-medium">Timeline</span>
        </NavLink>

        <NavLink to="/stats" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
          <img src={chartIcon} className="w-5 h-5" alt="" />
          <span className="font-medium">Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;