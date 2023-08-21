import { useEffect, useState } from "react";
import Link from "next/link";
import ShowOnScroll from "./ShowOnScroll";
import SizedText from "./SizedText";
import dynamic from "next/dynamic";
import AnimatedCorners from "./AnimatedCorners";
const Matrix = dynamic(() => import("./Matrix"));

export default function Landing({ stack }: { stack: any }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    handleResize();
  }, []);

  async function handleResize() {
    await new Promise((resolve) =>
      setTimeout(() => {
        setWidth(window.outerWidth);
        setHeight(window.outerHeight);
        resolve("resolved");
      }, 100)
    );
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen grow flex flex-nowrap flex-col overflow-hidden justify-center items-center relative bg-black">
      <div className="w-full h-full flex flex-col justify-center items-center gap-0">
        <div className="grow w-full bg-gradient-to-t from-white to-transparent z-20" />
        <Matrix
          className="absolute z-10"
          width={width}
          height={height}
          stack={stack}
        />
        <ShowOnScroll
          offset={-100}
          mode="fadeOut"
          className="duration-500 w-full text-black bg-white mix-blend-screen z-20 flex"
        >
          <SizedText
            className="text-black mx-auto font-alfa-slab uppercase fadeIn pt-2"
            text="Gabriel Taliano"
          />
        </ShowOnScroll>
        <ShowOnScroll
          offset={-100}
          mode="fadeOut"
          className="duration-500 w-full text-black bg-white mix-blend-screen z-20 flex"
        >
          <SizedText
            className="text-black mx-auto font-alfa-slab uppercase fadeIn pt-2"
            text="Full-Stack Web Developer"
          />
        </ShowOnScroll>
        <ShowOnScroll
          offset={-100}
          mode="fadeOut"
          className="duration-500 w-full text-black bg-white mix-blend-screen z-20 flex"
        >
          <SizedText
            className="text-black mx-auto font-IBM-Plex-Mono fadeIn delayed-900 pt-2"
            text="with a sysadmin background"
          />
        </ShowOnScroll>

        <ShowOnScroll
          offset={-100}
          mode="fadeOut"
          className="duration-500 grow w-full z-20 flex relative bg-gradient-to-b from-white to-transparent"
        >
          <Link
            href="/#quote"
            className="font-IBM-Plex-Mono font-bold text-white text-xl w-fit mx-auto mt-20 h-fit"
          >
            <AnimatedCorners className="">
              View more about me<span className="cursor">_</span>
            </AnimatedCorners>
          </Link>
        </ShowOnScroll>
      </div>
    </div>
  );
}
