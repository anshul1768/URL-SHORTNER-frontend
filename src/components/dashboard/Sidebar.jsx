import { NavLink } from "react-router-dom";
import { FaHome, FaLink, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Dashboard
      </h2>

      <nav className="space-y-3">

        <NavLink
          to="/dashboard"
          className="flex items-center gap-3 rounded-xl p-3 text-slate-300 hover:bg-slate-800"
        >
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/urls"
          className="flex items-center gap-3 rounded-xl p-3 text-slate-300 hover:bg-slate-800"
        >
          <FaLink />
          My URLs
        </NavLink>

      </nav>

      

    </aside>
  );
};

export default Sidebar;