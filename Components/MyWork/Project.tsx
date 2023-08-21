import AnimatedCorners from "../AnimatedCorners";
import Description from "./Description";
import { work } from "./interfaces";
import Preview from "./Preview";
import Stack from "./Stack";
import Title from "./Title";

export default function Project({ project }: { project: work; key: string }) {
  //   const size = project.name == "Mediafly" ? "mx-[15%] px-[10vw]" : "w-1/4";
  const size = project.name == "Mediafly" ? "col-span-2" : "";

  return (
    <AnimatedCorners className={`bg-green-900/10 ${size}`}>
      <div
        className="flex flex-col items-center w-full h-full justify-between"
        style={{ flexBasis: `${40}%` }}
      >
        <Title text={project.name} />
        <Preview
          img={project.img}
          url={project.url}
          project_name={project.name}
        />
        <Description text={project.description} />
        <Stack stack={project.stack} project_name={project.name} />
      </div>
    </AnimatedCorners>
  );
}
