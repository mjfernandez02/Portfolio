import { profile, skills, experience, education } from "../data/portfolio.js";
import {
  Section,
  AboutDescription,
  SkillsList,
  DetailRow,
  DetailLabel,
  MutedText,
  SubsectionHeading,
  ExperienceList,
  DetailDate,
  DetailContent,
  DetailTitle,
  EducationDate,
} from "../styles/portfolio.jsx";

export default function AboutSection() {
  return (
    <Section id="about" title="About">
      <AboutDescription>{profile.about}</AboutDescription>

      <SkillsList>
        {skills.map((s) => (
          <DetailRow key={s.group}>
            <DetailLabel>{s.group}</DetailLabel>
            <MutedText>{s.items}</MutedText>
          </DetailRow>
        ))}
      </SkillsList>

      <SubsectionHeading>Experience</SubsectionHeading>
      <ExperienceList>
        {experience.map((e) => (
          <DetailRow key={e.what + e.when}>
            <DetailDate>{e.when}</DetailDate>
            <DetailContent>
              <DetailTitle>{e.what}</DetailTitle>
              <MutedText>{e.note}</MutedText>
            </DetailContent>
          </DetailRow>
        ))}
      </ExperienceList>

      <SubsectionHeading>Education</SubsectionHeading>
      <DetailRow>
        <EducationDate>{education.when}</EducationDate>
        <DetailContent>
          <DetailTitle>{education.degree}</DetailTitle>
          <MutedText>{education.school}</MutedText>
        </DetailContent>
      </DetailRow>
    </Section>
  );
}
