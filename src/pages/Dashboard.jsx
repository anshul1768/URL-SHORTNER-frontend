import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatsCard from "../components/dashboard/StatsCard";
import UrlForm from "../components/dashboard/UrlForm";
import UrlTable from "../components/dashboard/UrlTable";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-slate-400">
        Manage your shortened URLs.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard title="Total URLs" value="28" />
        <StatsCard title="Total Clicks" value="1842" />
        <StatsCard title="Active URLs" value="21" />
        <StatsCard title="This Month" value="+420" />

      </div>

      <UrlForm />

      <UrlTable />

    </DashboardLayout>
  );
};

export default Dashboard;