const UrlTable = () => {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Recent URLs
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-700">

            <th className="py-3 text-left">Short URL</th>

            <th className="py-3 text-left">Clicks</th>

            <th className="py-3 text-left">Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td className="py-4">
              zapurl.in/demo
            </td>

            <td>
              120
            </td>

            <td>

              <button className="rounded bg-cyan-500 px-4 py-2">
                Copy
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default UrlTable;