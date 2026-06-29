import { useEffect, useState } from "react";
import api from "../services/api";
import {
  FaCopy,
  FaExternalLinkAlt,
  FaTrash,
  FaQrcode,
  FaChartBar,
} from "react-icons/fa";
import toast from "react-hot-toast";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import Analytics from "./Analytics";
const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const fetchUrls = async () => {
    try {
      const res = await api.get("/create/myurls");
      setUrls(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const totalUrls = urls.length;

  const totalClicks = urls.reduce(
    (sum, url) => sum + url.clicks,
    0
  );

  const filteredUrls = urls.filter(
    (item) =>
      item.full_url.toLowerCase().includes(search.toLowerCase()) ||
      item.short_url.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = async (shortUrl) => {
    const link = `http://localhost:8000/${shortUrl}`;

    await navigator.clipboard.writeText(link);

    // alert("✅ Link copied successfully!");
    toast.success("Link copied!");
  };

  const handleDelete = async (id) => {

  const ok = window.confirm(
    "Are you sure you want to delete this URL?"
  );

  if (!ok) return;

  try {

    await api.delete(`/create/${id}`);

    fetchUrls();

    // alert("Deleted Successfully");
    toast.success("URL Deleted");

  } catch (error) {

    // alert("Delete Failed");
    toast.error("Delete Failed");
  }

};

  if (loading) {
    return (
      <div className="mt-20 text-center text-xl text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      {/* Stats */}

      <div className="mb-10 grid gap-6 md:grid-cols-2">

        <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-500/40">

          <p className="text-sm uppercase tracking-widest text-slate-400">
            Total URLs
          </p>

          <h2 className="mt-4 text-5xl font-bold text-cyan-400">
            {totalUrls}
          </h2>

          <p className="mt-2 text-slate-500">
            URLs created by you
          </p>

        </div>

        <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg transition hover:-translate-y-1 hover:border-blue-500/40">

          <p className="text-sm uppercase tracking-widest text-slate-400">
            Total Clicks
          </p>

          <h2 className="mt-4 text-5xl font-bold text-blue-400">
            {totalClicks}
          </h2>

          <p className="mt-2 text-slate-500">
            Total redirects on your links
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="mb-8">

        <div className="flex items-center rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 focus-within:border-cyan-500">

          <input
            type="text"
            placeholder="🔍 Search your URLs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
          />

        </div>

      </div>

      {filteredUrls.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">

          <h2 className="text-2xl font-bold text-slate-300">
            No URLs Found
          </h2>

          <p className="mt-2 text-slate-500">
            Create your first short URL or try another search.
          </p>

        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="p-4 text-left">
                  Original URL
                </th>

                <th className="p-4 text-left">
                  Short URL
                </th>

                <th className="p-4 text-center">
                  Clicks
                </th>

                <th className="p-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUrls.map((url) => (

                <tr
                  key={url._id}
                  className="border-t border-slate-800 transition hover:bg-slate-900"
                >

                  <td className="max-w-xs truncate p-4">
                    {url.full_url}
                  </td>

                  <td className="p-4">

                    <a
                      href={`http://localhost:8000/${url.short_url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      {`http://localhost:8000/${url.short_url}`}
                    </a>

                  </td>

                  <td className="p-4 text-center">
                    {url.clicks}
                  </td>

                  <td className="p-4">

                    <div className="flex items-center justify-center gap-5">

                      <button
                        onClick={() => handleCopy(url.short_url)}
                        className="text-cyan-400 transition hover:scale-110 hover:text-cyan-300"
                        title="Copy"
                      >
                        <FaCopy />
                      </button>

                      <a
                        href={`http://localhost:8000/${url.short_url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-400 transition hover:scale-110 hover:text-green-300"
                        title="Open"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <button
  onClick={() =>
    setQrUrl(`http://localhost:8000/${url.short_url}`)
  }
  className="text-yellow-400 hover:text-yellow-300 transition"
  title="QR Code"
>
  <FaQrcode />
</button>
<Link
  to={`/analytics/${url._id}`}
  className="text-purple-400 hover:text-purple-300 transition"
  title="Analytics"
>
  <FaChartBar />
</Link>
                      <button
                        onClick={() => handleDelete(url._id)}
                        className="text-red-400 transition hover:scale-110 hover:text-red-300"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}
      {qrUrl && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
    <div className="w-80 rounded-2xl bg-slate-900 p-6 text-center">

      <h2 className="mb-5 text-2xl font-bold">
        QR Code
      </h2>

      <div className="flex justify-center rounded-lg bg-white p-4">
        <QRCode value={qrUrl} size={200} />
      </div>

      <p className="mt-4 break-all text-sm text-slate-400">
        {qrUrl}
      </p>

      <button
        onClick={() => setQrUrl("")}
        className="mt-6 w-full rounded-xl bg-red-500 py-3 font-semibold hover:bg-red-600"
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
  );
};

export default Dashboard;