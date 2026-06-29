import {
  FaLink,
  FaLock,
  FaChartLine,
  FaSearch,
  FaCopy,
  FaTrash,
  FaQrcode,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLink />,
    title: "Fast URL Shortening",
    desc: "Convert long URLs into short, shareable links instantly.",
  },
  {
    icon: <FaLock />,
    title: "Secure Authentication",
    desc: "JWT authentication with protected routes and HTTP-only cookies.",
  },
  {
    icon: <FaChartLine />,
    title: "Click Tracking",
    desc: "Track how many times your short links are visited.",
  },
  {
    icon: <FaSearch />,
    title: "Search URLs",
    desc: "Quickly search and filter your URLs from the dashboard.",
  },
  {
    icon: <FaCopy />,
    title: "Copy with One Click",
    desc: "Copy shortened URLs instantly using the clipboard.",
  },
  {
    icon: <FaTrash />,
    title: "Delete URLs",
    desc: "Remove unwanted URLs anytime.",
  },
  {
    icon: <FaQrcode />,
    title: "QR Code",
    desc: "Generate QR codes for every short URL.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Optimized for desktop, tablet, and mobile devices.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-center text-5xl font-bold">
          Features
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Everything you need to shorten, manage, and track your URLs.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="mb-5 text-4xl text-cyan-400">
                {item.icon}
              </div>

              <h2 className="mb-3 text-xl font-bold">
                {item.title}
              </h2>

              <p className="text-slate-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Features;