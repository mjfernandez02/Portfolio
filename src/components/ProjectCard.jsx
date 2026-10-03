import { Tag } from "@chakra-ui/react";
import {
  ProjectCard as ProjectCardContainer,
  PreviewLink,
  PreviewToolbar,
  PreviewHostname,
  PreviewImage,
  ProjectHeader,
  ProjectTitle,
  ProjectTitleLink,
  ProjectMeta,
  ProjectSubtitle,
  ProjectDescription,
  ProjectDemoLink,
  ProjectTags,
  ProjectTag,
} from "../styles/portfolio.jsx";

export default function ProjectCard({ project }) {
  return (
    <ProjectCardContainer>
      {project.preview && (
        <PreviewLink
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} preview`}
        >
          <PreviewToolbar>
            <PreviewHostname>
              {new URL(project.demo).hostname}
            </PreviewHostname>
          </PreviewToolbar>
          <PreviewImage
            src={project.preview}
            alt={project.previewAlt || `${project.title} homepage`}
            loading="lazy"
            decoding="async"
          />
        </PreviewLink>
      )}
      <ProjectHeader>
        <ProjectTitle>
          {project.href ? (
            <ProjectTitleLink
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
            </ProjectTitleLink>
          ) : (
            project.title
          )}
        </ProjectTitle>
        <ProjectMeta>{project.status || project.year}</ProjectMeta>
      </ProjectHeader>
      {project.subtitle && (
        <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
      )}
      <ProjectDescription>{project.desc}</ProjectDescription>
      {project.demo && (
        <ProjectDemoLink
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.demoLabel || "Live demo"}
        </ProjectDemoLink>
      )}
      <ProjectTags>
        {project.stack.map((s) => (
          <ProjectTag key={s}>
            <Tag.Label>{s}</Tag.Label>
          </ProjectTag>
        ))}
      </ProjectTags>
    </ProjectCardContainer>
  );
}
