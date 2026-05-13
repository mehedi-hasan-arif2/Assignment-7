import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import clockIcon from "../assets/clock.png";
import chartIcon from "../assets/ChartLine.png";

const Navbar = () => {
  // Base styles
  const linkStyle = "flex items-center gap-2 px-4 py-2 rounded-lg transition-all group";
  const activeStyle = "bg-[#2D4A43] text-white";
  const normalStyle = "text-gray-600 hover:bg-gray-100";

  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white max-w-7xl mx-auto border-b border-gray-50">
      <div className="flex items-center">
        <NavLink to="/">
          <img src={logo} alt="KeenKeeper" className="h-8" />
        </NavLink>
      </div>

      <div className="flex gap-4">
        {/* Home Link */}
        <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
          <img 
            src={homeIcon} 
            className="w-5 h-5 transition-all group-[.active]:brightness-0 group-[.active]:invert" 
            alt="Home" 
          />
          <span className="font-medium">Home</span>
        </NavLink>

        {/* Timeline Link */}
        <NavLink to="/timeline" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
          <img 
            src={clockIcon} 
            className="w-5 h-5 transition-all group-[.active]:brightness-0 group-[.active]:invert" 
            alt="Timeline" 
          />
          <span className="font-medium">Timeline</span>
        </NavLink>

        {/* Stats Link */}
        <NavLink to="/stats" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
          <img 
            src={chartIcon} 
            className="w-5 h-5 transition-all group-[.active]:brightness-0 group-[.active]:invert" 
            alt="Stats" 
          />
          <span className="font-medium">Stats</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;