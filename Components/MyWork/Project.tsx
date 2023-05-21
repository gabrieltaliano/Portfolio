import AnimatedCorners from "../AnimatedCorners";
import Description from "./Description";
import { work } from "./interfaces";
import Preview from "./Preview";
import Stack from "./Stack";
import Title from "./Title";

export default function Project({ project }: { project: work; key: string }) {
  const size=project.name == "Mediafly"
          ? "mx-[25%] px-[10vw]"
          : "md:min-w-0 min-w-[80vw] max-w-xl"
    return (
    <AnimatedCorners
      className={`bg-green-800/5 ${size}`}
    >
      <div
        className="flex flex-col items-center m-3 md:min-w-0 min-w-[80vw] max-w-xl"
        style={{ flexBasis: `${40}%` }}
      >
        <Title text={project.name} />
        <Description text={project.description} />
        <Preview
          img={project.img}
          url={project.url}
          project_name={project.name}
        />
        <Stack stack={project.stack} project_name={project.name} />
      </div>
    </AnimatedCorners>
  );
}
