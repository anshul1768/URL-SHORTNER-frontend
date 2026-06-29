import { FaBolt, FaGithub, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-center text-5xl font-bold">
          About ZapURL
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
          ZapURL is a modern URL shortening application built with the MERN
          stack. It helps users create short, shareable links, manage them
          through a personalized dashboard, and track link performance with an
          intuitive and responsive interface.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500">
            <FaBolt className="mx-auto text-5xl text-cyan-400" />

            <h2 className="mt-5 text-2xl font-bold">
              Fast & Reliable
            </h2>

            <p className="mt-3 text-slate-400">
              Generate short URLs instantly with fast and reliable redirection.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500">
            <FaCode className="mx-auto text-5xl text-cyan-400" />

            <h2 className="mt-5 text-2xl font-bold">
              Built with MERN
            </h2>

            <p className="mt-3 text-slate-400">
              Developed using MongoDB, Express.js, React.js, Node.js and
              Tailwind CSS.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition hover:-translate-y-2 hover:border-cyan-500">
            <FaGithub className="mx-auto text-5xl text-cyan-400" />

            <h2 className="mt-5 text-2xl font-bold">
              Open Source
            </h2>

            <p className="mt-3 text-slate-400">
              Designed as a portfolio-ready full-stack project showcasing
              authentication, CRUD operations, REST APIs, and responsive UI.
            </p>
          </div>

        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-bold">
            Tech Stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            {[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "JWT",
              "Tailwind CSS",
              "Axios",
              "React Router",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-cyan-500/10 px-5 py-2 text-cyan-400"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;