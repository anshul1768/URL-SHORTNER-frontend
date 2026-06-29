import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-slate-400 mt-4">
        Page Not Found
      </p>

      <Link
        to="/"
        className="mt-6 bg-cyan-500 px-6 py-3 rounded-xl"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;