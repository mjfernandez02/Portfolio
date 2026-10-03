import { profile } from "../data/portfolio.js";
import {
  PageFooter,
  FooterText,
} from "../styles/portfolio.jsx";

export default function Footer() {
  return (
    <PageFooter>
      <FooterText>
        &copy; {new Date().getFullYear()} {profile.name}
      </FooterText>
    </PageFooter>
  );
}
