import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import clockIcon from "../assets/clock.png";
import chartIcon from "../assets/ChartLine.png";

const Navbar = () => {
  // Responsive classes: sm (tablet), md/lg (desktop)
  const linkStyle = "flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-lg transition-all group shrink-0";
  const activeStyle = "bg-[#2D4A43] text-white shadow-sm";
  const normalStyle = "text-gray-600 hover:bg-gray-50";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo - object-contain */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/">
              <img 
                src={logo} 
                alt="KeenKeeper" 
                className="h-6 sm:h-8 md:h-9 w-auto object-contain" 
              />
            </NavLink>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
            
            {/* Home Link */}
            <NavLink to="/" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
              <img 
                src={homeIcon} 
                className="w-4 h-4 md:w-5 md:h-5 transition-all group-[.active]:brightness-0 group-[.active]:invert" 
                alt="Home" 
              />
              <span className="text-xs sm:text-sm md:text-base font-semibold">Home</span>
            </NavLink>

            {/* Timeline Link */}
            <NavLink to="/timeline" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
              <img 
                src={clockIcon} 
                className="w-4 h-4 md:w-5 md:h-5 transition-all group-[.active]:brightness-0 group-[.active]:invert" 
                alt="Timeline" 
              />
              <span className="text-xs sm:text-sm md:text-base font-semibold">Timeline</span>
            </NavLink>

            {/* Stats Link */}
            <NavLink to="/stats" className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : normalStyle}`}>
              <img 
                src={chartIcon} 
                className="w-4 h-4 md:w-5 md:h-5 transition-all group-[.active]:brightness-0 group-[.active]:invert" 
                alt="Stats" 
              />
              <span className="text-xs sm:text-sm md:text-base font-semibold">Stats</span>
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;