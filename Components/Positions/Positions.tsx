import ShowOnScroll from "../ShowOnScroll";
import positions from "./positionList";
export default function Positions() {
  return (
    <div className="min-h-[60vh] grow flex  flex-col items-center p-4 justify-evenly">
      <ShowOnScroll
        className="duration-300 text-green-400 gap-x-2 group flex"
        offset={-800}
      >
        <h2 className="text-green-400 text-3xl font-IBM-Plex-Mono mt-24 mb-12">
          Quick resume of my career:
        </h2>
      </ShowOnScroll>

      <div className="flex flex-wrap lg:flex-nowrap gap-y-8 gap-x-4 my-8 pb-8 justify-center text-center lg:text-left">
        {positions.map((position, positionIndex) => (
          <ShowOnScroll
            className="duration-300 text-green-400 gap-x-2 group flex"
            offset={-800}
            key={position.title + positionIndex}
            style={{ transitionDelay: `${100 * positionIndex}ms` }}
          >
            <div className="flex flex-col flex-nowrap">
              <label className="border-[1px] border-green-800 p-1 whitespace-nowrap duration-100 group-hover:rounded-lg">
                {position.title}
              </label>
              {position?.technologies?.map((technology, techIndex) => (
                <label
                  key={technology}
                  style={{ transitionDelay: `${100 * techIndex}ms` }}
                  className="p-1 text-xs duration-75 group-hover:text-green-300 text-green-900 leading-3"
                >
                  {technology}
                </label>
              ))}
            </div>
          </ShowOnScroll>
        ))}
      </div>
    </div>
  );
}
