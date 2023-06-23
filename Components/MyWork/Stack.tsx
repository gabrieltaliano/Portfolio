import { tech } from "./interfaces";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Stack({
  stack,
  project_name,
}: {
  stack: tech[];
  project_name: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <ul
      ref={ref}
      className="text-green-500 flex w-full flex-wrap justify-evenly gap-2 mb-6"
    >
      {stack.map((t, i) => (
        <li
          key={project_name + t.name}
          className="hover:scale-110 hover:z-[90000] flex flex-col items-center group text-center gap-1 duration-300"
          style={{
            flexBasis: `${
              100 / Math.round(stack.length / Math.sqrt(stack.length - 1) + 2)
            }%`,
            flexGrow: 1,
          }}
        >
          <div
            className={`relative h-9 w-[4rem] min-w-[3rem] duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: `${100 * i}ms`,
            }}
          >
            <Image
              src={t.logo}
              alt={t.name}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <span className="opacity-0 text-[0px] group-hover:text-sm group-hover:opacity-100 group-hover:bg-neutral-800/60 absolute -bottom-5 duration-300 text-sm text-white font-IBM-Plex-Mono center">
            {`${t.name}\n${t?.note || ""}`}
          </span>
        </li>
      ))}
    </ul>
  );
}
