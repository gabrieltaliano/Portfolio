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
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <ul
      ref={ref}
      className="text-green-500 flex w-full flex-wrap gap-x-2 justify-evenly lg:max-w-[30vw]"
    >
      {stack.map((t, i) => (
        <li
          key={project_name + t.name}
          className="hover:scale-110 flex flex-col items-center group text-center gap-1 duration-300"
          style={{
            flexBasis: `${100 / (stack.length - 1)}%`,
          }}
        >
          <div
            className={`relative h-10 w-[6vmax] min-w-[5rem] duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transitionDelay: `${100 * i}ms`,
            }}
          >
            <Image
              src={t.logo}
              alt={t.name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="opacity-0 group-hover:opacity-100 duration-300 text-sm text-white font-IBM-Plex-Mono center">
            {`${t.name}\n${t?.note || ""}`}
          </span>
        </li>
      ))}
    </ul>
  );
}
