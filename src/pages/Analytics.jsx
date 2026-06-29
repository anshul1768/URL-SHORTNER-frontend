import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

const Analytics = () => {
  const { id } = useParams();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await api.get(`/create/analytics/${id}`);
        setUrl(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAnalytics();
  }, [id]);

  if (!url) return <h1 className="text-white p-10">Loading...</h1>;

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        URL Analytics
      </h1>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 space-y-6">

        <div>
          <p className="text-slate-400">Original URL</p>
          <p>{url.full_url}</p>
        </div>

        <div>
          <p className="text-slate-400">Short URL</p>
          <p>{`http://localhost:8000/${url.short_url}`}</p>
        </div>

        <div>
          <p className="text-slate-400">Total Clicks</p>
          <p className="text-3xl text-cyan-400 font-bold">
            {url.clicks}
          </p>
        </div>

        <div>
          <p className="text-slate-400">Created At</p>
          <p>
            {new Date(url.createdAt).toLocaleString()}
          </p>
        </div>

      </div>

    </div>
  );
};

export default Analytics;