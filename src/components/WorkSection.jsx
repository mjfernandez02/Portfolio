import { projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import {
  Section,
  ContentDivider,
  ProjectList,
} from "../styles/portfolio.jsx";

export default function WorkSection() {
  return (
    <Section id="work" title="Selected work">
      <ProjectList separator={<ContentDivider />}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectList>
    </Section>
  );
}
