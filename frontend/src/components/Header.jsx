import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { userInfo, logout } = useAuth();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    logout();
    setShowMenu(false);
    navigate("/login");
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  const navStyle = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-all duration-150 relative py-2 ${
      isActive
        ? "text-indigo-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-indigo-600 after:rounded-full"
        : "text-slate-600 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
            Y
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">
              YASSH
            </h1>
            <p className="text-[9px] tracking-[4px] text-slate-400 font-bold mt-0.5 uppercase leading-none">
              Enterprises
            </p>
          </div>
        </Link>

        {/* Main Navigation Links */}
        <nav className="flex items-center gap-8">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>
          <NavLink to="/products" className={navStyle}>
            Products
          </NavLink>

          {userInfo && (
            <NavLink to="/myorders" className={navStyle}>
              My Orders
            </NavLink>
          )}

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>

          {/* Authentication Action / Profile Area */}
          {!userInfo ? (
            <Link
              to="/login"
              className="bg-slate-950 hover:bg-slate-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition duration-150 shadow-sm"
            >
              Login
            </Link>
          ) : (
            <div className="relative" ref={menuRef}>
              {/* Trigger Button */}
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition duration-150 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-sm flex items-center justify-center shadow-inner">
                  {userInfo.name.charAt(0).toUpperCase()}
                </div>

                <div className="text-left hidden sm:block">
                  <p className="font-bold text-xs text-slate-800 leading-tight">
                    {userInfo.name}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-400 tracking-wide uppercase leading-none mt-0.5">
                    {userInfo.isAdmin ? "Admin" : "Customer"}
                  </p>
                </div>

                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    showMenu ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute right-0 mt-3.5 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden divide-y divide-slate-100">
                  
                  {/* User Profile Summary */}
                  <div className="bg-slate-950 text-white p-5">
                    <h2 className="font-bold text-base tracking-tight truncate">
                      {userInfo.name}
                    </h2>
                    <p className="text-xs text-slate-400 truncate mt-0.5 font-medium">
                      {userInfo.email}
                    </p>
                  </div>

                  {/* Nav Links Action Stack */}
                  <div className="py-1.5">
                    <Link
                      to="/profile"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition"
                    >
                      <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      My Profile
                    </Link>

                    <Link
                      to="/myorders"
                      onClick={() => setShowMenu(false)}
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition"
                    >
                      <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      My Orders
                    </Link>

                    {userInfo.isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setShowMenu(false)}
                        className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 transition"
                      >
                        <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Admin Dashboard
                      </Link>
                    )}
                  </div>

                  {/* Sign Out CTA Action */}
                  <div className="py-1.5">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-3 text-sm font-semibold text-rose-600 hover:bg-rose-50/60 transition text-left"
                    >
                      <svg className="w-4 h-4 shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </div>

                </div>
              )}
            </div>
          )}
        </nav>

      </div>
    </header>
  );
}

export default Header;