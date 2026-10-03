import useColorMode from "./hooks/useColorMode.js";
import useScrollReveal from "./hooks/useScrollReveal.js";
import Navigation from "./components/Navigation.jsx";
import HeroSection from "./components/HeroSection.jsx";
import WorkSection from "./components/WorkSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import {
  PageShell,
  SkipLink,
  PageContainer,
  HomePage,
  ContentDivider,
} from "./styles/portfolio.jsx";

export default function App() {
  useScrollReveal();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PageShell>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <PageContainer>
        <Navigation colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <HomePage id="main-content">
          <HeroSection />
          <ContentDivider />
          <WorkSection />
          <ContentDivider />
          <AboutSection />
          <ContentDivider />
          <ContactSection />
        </HomePage>
        <Footer />
      </PageContainer>
    </PageShell>
  );
}
