import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext.jsx";
import { useState } from "react";
import api from "../../services/api.js";
const Hero = () => {
  const { user } = useAuth();

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!url.trim()) {
      alert("Please enter a URL");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/create", {
        url,
      });

     setShortUrl(res.data.data.shortUrl);

      setUrl("");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative overflow-hidden">
      {/* Blur Circles */}
      <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-20 bottom-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-400">
          ⚡ Fast • Secure • Analytics
        </span>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-7xl">
          Shorten URLs
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Smarter & Faster.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-400">
          Create beautiful short links, track every click, and manage everything
          from one clean dashboard.
        </p>

        <div className="mt-12 flex w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            className="flex-1 bg-transparent px-6 py-5 outline-none"
          />

          <button
            onClick={handleClick}
            className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 font-semibold transition hover:scale-105"
          >
            {loading ? "Creating..." : "Shorten"}
            <FaArrowRight />
          </button>


          {shortUrl && (
  <div className="mt-8 w-full max-w-3xl rounded-xl border border-cyan-500/30 bg-slate-900 p-5">

    <p className="mb-3 text-cyan-400 font-semibold">
      🎉 Short URL Created
    </p>

    <div className="flex items-center justify-between gap-4">

      <a
        href={shortUrl}
        target="_blank"
        rel="noreferrer"
        className="truncate text-blue-400 underline"
      >
        {shortUrl}
      </a>

      <button
        onClick={() => navigator.clipboard.writeText(shortUrl)}
        className="rounded-lg bg-cyan-500 px-4 py-2 hover:bg-cyan-600"
      >
        Copy
      </button>

    </div>

  </div>
)}
        </div>

        <div className="mt-6 flex gap-8 text-slate-400">
          <span>✓ Free Forever</span>

          <span>✓ Secure</span>

          <span>✓ Analytics</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
