import Description from "./Description";
import { work } from "./interfaces";
import Preview from "./Preview";
import Stack from "./Stack";
import Title from "./Title";

export default function Project({ project }: { project: work; key: string }) {
  return (
    <div
      className={`flex flex-col items-center m-3 ${project.name=='Mediafly'?'min-w-full':'md:min-w-0 min-w-[80vw] max-w-xl'}`}
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
  );
}
