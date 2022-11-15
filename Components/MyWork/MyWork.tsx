import Project from "./Project";
import projects from "./projectsList";

export default function MyWork() {
  return (
    <div
      className="grow flex flex-nowrap flex-col justify-center items-center relative bg-gradient-to-b from-[#05190b] via-[#1a3020] to-slate-900 "
      id="work"
    >
      <div className="min-h-screen w-full flex flex-col justify-evenly items-center z-10 gap-8 lg:gap-16 py-8">
        <h2 className="text-green-400 text-3xl font-IBM-Plex-Mono m-6">
          Works and projects<span className="cursor">_</span>
        </h2>

        <div className="flex flex-wrap justify-evenly items-center gap-16 w-full lg:px-16">
          {projects.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
