import Description from "./Description";
import { work } from "./interfaces";
import Preview from "./Preview";
import Stack from "./Stack";

export default function Project({ project }: { project: work; key: string }) {
  return (
    <div
      className="flex flex-col  items-center min-w-[80vw] sm:min-w-0 max-w-xl m-4"
      style={{ flexBasis: `${45}%` }}
    >
      <Preview img={project.img} url={project.url} />
      <Description text={project.description} />
      <Stack stack={project.stack} project_name={project.name} />
    </div>
  );
}
