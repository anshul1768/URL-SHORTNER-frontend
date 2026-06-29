import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <Sidebar />

      <div className="flex-1 p-8 bg-slate-950">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;