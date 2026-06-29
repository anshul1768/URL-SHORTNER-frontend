import { NavLink } from "react-router-dom";
import { FaHome, FaLink, FaChartLine, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-white mb-8">
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
          to="/dashboard/urls"
          className="flex items-center gap-3 rounded-xl p-3 text-slate-300 hover:bg-slate-800"
        >
          <FaLink />
          My URLs
        </NavLink>

        <NavLink
          to="/dashboard/analytics"
          className="flex items-center gap-3 rounded-xl p-3 text-slate-300 hover:bg-slate-800"
        >
          <FaChartLine />
          Analytics
        </NavLink>

      </nav>

      <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 hover:bg-red-600">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
};

export default Sidebar;