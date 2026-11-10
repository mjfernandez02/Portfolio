import { profile } from "../data/portfolio.js";
import {
  Hero,
  HeroEyebrow,
  HeroName,
  HeroRole,
  HeroIntro,
  HeroLocation,
  HeroActions,
  PrimaryLink,
  PlainLink,
} from "../styles/portfolio.jsx";

export default function HeroSection() {
  return (
    <Hero>
      <HeroEyebrow>Developer portfolio</HeroEyebrow>
      <HeroName>{profile.name}</HeroName>
      <HeroRole>{profile.role}</HeroRole>
      <HeroIntro>{profile.intro}</HeroIntro>
      <HeroLocation>{profile.location}</HeroLocation>
      <HeroActions>
        <PlainLink href="#work">Explore my work</PlainLink>
        <PlainLink
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume (opens in a new tab)"
        >
          View resume
        </PlainLink>
        <PrimaryLink href={`mailto:${profile.email}`}>
          Get in touch
        </PrimaryLink>
      </HeroActions>
    </Hero>
  );
}
