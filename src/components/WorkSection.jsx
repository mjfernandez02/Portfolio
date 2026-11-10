import { projects, experience } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import {
  Section,
  ContentDivider,
  ProjectList,
  SubsectionHeading,
} from "../styles/portfolio.jsx";

export default function WorkSection() {
  const landingPageProjects = projects.filter(
    (project) => project.category === "landing-page",
  );
  const personalProjects = projects.filter(
    (project) => project.category === "personal",
  );
  const contributions = projects.filter(
    (project) => project.category === "contributions",
  );

  return (
    <Section id="work" title="Selected work">
      <SubsectionHeading>Professional experience</SubsectionHeading>
      <ProjectList separator={<ContentDivider />}>
        {experience.map((job) => (
          <ProjectCard
            key={job.what}
            project={{
              title: job.what,
              year: job.when,
              desc: job.note,
              demo: job.href,
              demoLabel: "Visit company site",
              stack: [],
            }}
          />
        ))}
      </ProjectList>

      <SubsectionHeading>Landing page project</SubsectionHeading>
      <ProjectList separator={<ContentDivider />}>
        {landingPageProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectList>

      <SubsectionHeading>Personal projects</SubsectionHeading>
      <ProjectList separator={<ContentDivider />}>
        {personalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectList>

      <SubsectionHeading>Contributions</SubsectionHeading>
      <ProjectList separator={<ContentDivider />}>
        {contributions.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectList>
    </Section>
  );
}
