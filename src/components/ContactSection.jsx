import { profile } from "../data/portfolio.js";
import {
  Section,
  PlainLink,
  ContactDescription,
  ContactEmail,
  SocialLinks,
} from "../styles/portfolio.jsx";

export default function ContactSection() {
  return (
    <Section id="contact" title="Get in touch">
      <ContactDescription>
        Get in touch to discuss full-stack development, frontend work, or
        authentication and API projects.
      </ContactDescription>
      <ContactEmail>
        <PlainLink href={`mailto:${profile.email}`}>
          {profile.email}
        </PlainLink>
      </ContactEmail>
      <SocialLinks>
        <PlainLink
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </PlainLink>
        <PlainLink
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          color="muted"
        >
          LinkedIn
        </PlainLink>
      </SocialLinks>
    </Section>
  );
}
