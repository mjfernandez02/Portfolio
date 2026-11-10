import { profile, skills, education } from "../data/portfolio.js";
import {
  Section,
  AboutDescription,
  SkillsList,
  DetailRow,
  DetailLabel,
  MutedText,
  SubsectionHeading,
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
