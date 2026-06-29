import { useEffect, useState } from "react";
import api from "../../services/api.js";

const MyUrls = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await api.get("/create/myurls");
        setUrls(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <h1 className="mb-8 text-4xl font-bold">
        My URLs
      </h1>

      <div className="grid gap-6">

        {urls.map((url) => (
          <div
            key={url._id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <p className="text-slate-400">
              Original URL
            </p>

            <p className="break-all">
              {url.full_url}
            </p>

            <p className="mt-4 text-slate-400">
              Short URL
            </p>

            <a
              href={`${import.meta.env.VITE_BACKEND_URL}/${url.short_url}`}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              {`${import.meta.env.VITE_BACKEND_URL}/${url.short_url}`}
            </a>

            <div className="mt-6 flex justify-between">

              <span>
                Clicks: {url.clicks}
              </span>

              <span>
                {new Date(url.createdAt).toLocaleDateString()}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyUrls;