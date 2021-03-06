import Link from "next/link";
import ShowOnScroll from "./ShowOnScroll";
import { useInView } from "react-intersection-observer";

export default function Quote() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div
      className="grow flex flex-col justify-center items-center relative bg-black"
      id="quote"
    >
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-b from-black via-black to-[#05190b] z-0" />

      <ShowOnScroll
        className="duration-700 flex grow flex-col justify-evenly z-10 gap-24 lg:gap-0 max-w-4xl py-8 min-h-screen"
        offset={500}
      >
        <h2 className="text-green-400 text-5xl font-IBM-Plex-Mono font pt-2">
          Passionate about technology, electronics, IoT and web development{" "}
          <span className="text-green-800">(and photograpy)</span>
        </h2>

        <ShowOnScroll
          offset={100}
          className="duration-500 w-full z-20 flex relative "
        >
          <div
            ref={ref}
            className={`btn w-fit mx-auto delay-100 ${
              inView ? "fadein" : "opacity-0"
            }`}
          >
            <Link href="/#work">
              <a className="font-IBM-Plex-Mono font-bold text-green-400 text-xl">
                View my work<span className="cursor">_</span>
              </a>
            </Link>
          </div>
        </ShowOnScroll>
      </ShowOnScroll>
    </div>
  );
}
