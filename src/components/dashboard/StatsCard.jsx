const StatsCards = ({ totalUrls, totalClicks }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 mb-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <h3 className="text-slate-400 text-lg">Total URLs</h3>
        <p className="mt-3 text-4xl font-bold text-cyan-400">
          {totalUrls}
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <h3 className="text-slate-400 text-lg">Total Clicks</h3>
        <p className="mt-3 text-4xl font-bold text-cyan-400">
          {totalClicks}
        </p>
      </div>
    </div>
  );
};

export default StatsCards;