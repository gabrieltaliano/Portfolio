import { useInView } from "react-intersection-observer";
import { images } from "./interfaces";
import { event } from "../../lib/analytics";
export default function Preview({
  img,
  url,
  project_name = "",
}: {
  img: images[];
  url: string | undefined;
  project_name: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const handleClick = (url = "") => {
    event({
      action: "visit project",
      params: {
        project_url: url,
      },
    });
  };

  return (
    <a
      ref={ref}
      href={url}
      target="_blank"
      aria-label={project_name}
      rel="noreferrer"
      className={`duration-500 ${inView ? "opacity-100" : "opacity-0"}`}
      onClick={() => {
        handleClick(url);
      }}
    >
      {img.length === 1 ? (
        <div
          className={`relative overflow-hidden bg-gray-300 min-w-[10rem] sm:min-w-[10rem] min-h-[12rem] sm:min-h-[12rem] bg-center ${
            img[0].orientation === "v"
              ? "aspect-[9/16] w-full mb-8"
              : "aspect-video h-full my-16"
          } rounded-2xl block shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105`}
          style={{ backgroundImage: `url(${img[0].src})` }}
        >
          <div className="absolute w-full h-full border-gray-800 opacity-30 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105"></div>
        </div>
      ) : (
        <div className="grid grid-cols-6 grid-rows-[8] h-[40vh] w-[80vmin] max-w-[20rem] p-4">
          <div
            className="bg-gray-300 aspect-video col-start-1 z-30 col-span-4 row-start-4 row-span-3 h-full rounded-2xl block shadow-xl shadow-gray-900 bg-cover duration-300 hover:scale-105 relative"
            style={{ backgroundImage: `url(${img[0].src})` }}
          >
            <div className="absolute w-full h-full border-gray-800 opacity-30 duration-700 hover:opacity-0 border-4 border-b-[3vh] reflex  hover:scale-105"></div>
          </div>

          <div
            className="relative overflow-hidden bg-gray-300 aspect-[9/16] h-full z-20 col-start-4 col-span-3 row-start-1 row-span-5 rounded-2xl block shadow-xl shadow-gray-900 bg-cover bg-center duration-300 hover:scale-105"
            style={{ backgroundImage: `url(${img[1].src})` }}
          >
            <div className="absolute w-full h-full border-gray-800 opacity-30 duration-700 hover:opacity-0 border-8 border-b-[5vh] reflex  hover:scale-105"></div>
          </div>
        </div>
      )}
    </a>
  );
}
