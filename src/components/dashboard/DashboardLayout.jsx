import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">

      <Sidebar />

      <div className="flex-1 p-8 bg-slate-950">
        {children}
      </div>

    </div>
  );
};

export default DashboardLayout;