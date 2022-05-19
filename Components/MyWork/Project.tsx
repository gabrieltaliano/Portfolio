import Description from "./Description";
import { work } from "./interfaces";
import Preview from "./Preview";
import Stack from "./Stack";
import Title from "./Title";

export default function Project({ project }: { project: work; key: string }) {
  return (
    <div
      className="flex flex-col  items-center min-w-[80vw] sm:min-w-0 max-w-xl m-4"
      style={{ flexBasis: `${45}%` }}
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
  );
}
