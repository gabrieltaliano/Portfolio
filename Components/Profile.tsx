import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

import Positions from "./Positions/Positions";

export default function Profile({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div
      className="bg-gradient-to-b from-slate-900  via-[#00040e] to-[#030e0d]"
      id="contact"
    >
      <div
        ref={ref}
        className={`min-h-screen grow flex flex-nowrap overflow-hidden flex-col items-center p-4 delay-200 duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-green-400 text-3xl font-IBM-Plex-Mono mt-24 mb-16">
          About me
        </h2>
        <h3 className="text-green-300 text-xl lg:max-w-3xl xl:max-w-5xl px-4 mb-8">
          Specialist with more of 10 years of experience in the IT field, help
          desk, field support, virtualization, maintenance, diagnosis and
          configuration of physical and virtual servers and PCs, incident and
          project management, service coordination and software development.
        </h3>

        {children}
      </div>
    </div>
  );
}
