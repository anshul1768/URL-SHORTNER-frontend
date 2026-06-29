const UrlForm = () => {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-2xl font-bold">
        Create Short URL
      </h2>

      <input
        type="text"
        placeholder="Paste your long URL..."
        className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-cyan-500"
      />

      <button className="rounded-xl bg-cyan-500 px-6 py-3 hover:bg-cyan-600">
        Generate URL
      </button>

    </div>
  );
};

export default UrlForm;