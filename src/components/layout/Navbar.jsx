import { Link, NavLink } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
const Navbar = () => {
  // Later AuthContext se aayega
  // const isLoggedIn = false;
  const { user, logout } = useAuth();

  const navLinkStyle = ({ isActive }) =>
    `transition duration-300 ${
      isActive ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
            <FaBolt className="text-white text-lg" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-white">Zap</span>
            <span className="text-cyan-400">URL</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-lg">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/features" className={navLinkStyle}>
            Features
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
        </nav>

        {/* Buttons */}
        {!user  ? (
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="rounded-xl px-5 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Get Started
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-5">
            <NavLink to="/dashboard" className={navLinkStyle}>
              Dashboard
            </NavLink>

            <button
              onClick={logout}
              className="rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
