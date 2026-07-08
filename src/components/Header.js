import { LOGO_URL } from "../utils/Constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const Data = useContext(UserContext);
  console.log(Data);

  const cartItems = useSelector((store) => store.cart.items);

  const navLinkBase =
    "relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#FC8019] transition-colors duration-300";
  const navLinkActive = "text-[#FC8019]";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full ring-2 ring-[#FC8019]/20"
              src={LOGO_URL}
              alt="App Logo"
            />
            <span className="hidden sm:inline text-lg md:text-xl font-extrabold tracking-tight text-gray-900">
              Foodie<span className="text-[#FC8019]">Hub</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <span className="px-3 py-2 text-xs font-medium text-gray-500">
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                `${navLinkBase} ${isActive ? navLinkActive : ""}`
              }
            >
              Grocery
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${navLinkBase} flex items-center gap-2 ${isActive ? navLinkActive : ""}`
              }
            >
              <span className="inline-flex items-center gap-1">
                🛒 <span>Cart</span>
              </span>
              <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-[#FC8019] text-white text-xs font-bold">
                {cartItems.length}
              </span>
            </NavLink>

            <button
              className="ml-3 px-4 py-2 rounded-full bg-[#FC8019] hover:bg-[#F97316] text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>

            {loggedInUser && (
              <div className="ml-3 flex items-center gap-2 pl-3 border-l border-gray-200">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#FC8019] to-[#F97316] text-white flex items-center justify-center font-bold text-sm shadow">
                  {loggedInUser?.charAt(0)?.toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {loggedInUser}
                </span>
              </div>
            )}
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <NavLink to="/cart" className="relative inline-flex items-center">
              <span className="text-2xl">🛒</span>
              <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-[#FC8019] text-white text-[10px] font-bold flex items-center justify-center">
                {cartItems.length}
              </span>
            </NavLink>
            <button
              className="px-3 py-1.5 rounded-full bg-[#FC8019] hover:bg-[#F97316] text-white text-xs font-semibold shadow"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </div>
        </div>

        {/* Mobile nav row */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto pb-2 -mx-1 px-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/grocery"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : ""}`
            }
          >
            Grocery
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
