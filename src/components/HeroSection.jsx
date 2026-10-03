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
        <PrimaryLink href="#work">Explore my work</PrimaryLink>
        <PlainLink href={`mailto:${profile.email}`} color="muted">
          Get in touch
        </PlainLink>
      </HeroActions>
    </Hero>
  );
}
