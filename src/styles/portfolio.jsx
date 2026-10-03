import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Stack,
  Tag,
  Text,
  Separator,
  Image,
} from "@chakra-ui/react";

export const SectionContainer = (props) => (
  <Box as="section" py={{ base: 12, md: 20 }} scrollMarginTop="8" {...props} />
);

export const SectionHeading = (props) => (
  <Heading data-scroll-reveal=""
    as="h2"
    fontSize={{ base: "3xl", md: "4xl" }}
    lineHeight={1.15}
    letterSpacing="-0.025em"
    fontWeight={500}
    mb={{ base: 6, md: 10 }}
    {...props}
  />
);

export const PageShell = (props) => (
  <Box minH="100vh" borderTop="4px solid" borderColor="accent" {...props} />
);

export const SkipLink = (props) => (
  <Link
    position="absolute"
    top="4"
    left="4"
    px="4"
    py="2"
    bg="surface"
    zIndex={10}
    transform="translateY(-200%)"
    _focus={{ transform: "translateY(0)" }}
    {...props}
  />
);

export const PageContainer = (props) => (
  <Container maxW="960px" px={{ base: 6, md: 12 }} {...props} />
);

export const MainNav = (props) => (
  <Flex
    as="nav"
    py={{ base: 5, md: 7 }}
    borderBottom="1px solid"
    borderColor="line"
    justify="space-between"
    align="center"
    {...props}
  />
);

export const NavLinks = (props) => (
  <HStack gap={{ base: 5, md: 8 }} fontSize="sm" fontWeight={600} {...props} />
);

export const NavLink = (props) => <Link color="muted" {...props} />;

export const ThemeToggle = (props) => (
  <IconButton
    variant="ghost"
    color="muted"
    size="sm"
    borderRadius="full"
    border="1px solid"
    borderColor="line"
    {...props}
  />
);

export const HomePage = (props) => <Box as="main" {...props} />;

export const Hero = (props) => (
  <Box
    as="header"
    pt={{ base: 14, md: 24 }}
    pb={{ base: 14, md: 20 }}
    animation="settle 0.7s ease-out both"
    css={{ "@media (prefers-reduced-motion: reduce)": { animation: "none" } }}
    {...props}
  />
);

export const HeroEyebrow = (props) => (
  <Text
    mb={5}
    fontSize="xs"
    fontWeight={700}
    letterSpacing="0.16em"
    textTransform="uppercase"
    color="accent"
    {...props}
  />
);

export const HeroName = (props) => (
  <Heading
    as="h1"
    maxW="12ch"
    fontWeight={400}
    fontSize={{ base: "48px", sm: "64px", md: "80px" }}
    letterSpacing="-0.045em"
    lineHeight={1.02}
    {...props}
  />
);

export const HeroRole = (props) => (
  <Text
    mt={6}
    fontSize={{ base: "md", md: "lg" }}
    color="accent"
    fontWeight={600}
    {...props}
  />
);

export const HeroIntro = (props) => (
  <Text
    mt={5}
    fontSize={{ base: "md", md: "lg" }}
    lineHeight={1.8}
    color="muted"
    maxW="58ch"
    {...props}
  />
);

export const HeroLocation = (props) => (
  <Text mt={5} fontSize="sm" color="muted" {...props} />
);

export const HeroActions = (props) => (
  <HStack
    mt={8}
    gap={6}
    flexWrap="wrap"
    fontSize="sm"
    fontWeight={600}
    {...props}
  />
);

export const PrimaryLink = (props) => (
  <Link
    px={5}
    py={3}
    bg="accent"
    color="bg"
    borderRadius="full"
    _hover={{ opacity: 0.85 }}
    {...props}
  />
);

export const PlainLink = (props) => <Link href={props.href} color="muted" {...props} />;

export const ContentDivider = (props) => (
  <Separator borderColor="line" {...props} />
);

export const ProjectList = (props) => <Stack gap={0} {...props} />;

export const ProjectCard = (props) => (
  <Box data-scroll-reveal="" py={{ base: 7, md: 9 }} {...props} />
);

export const PreviewLink = (props) => (
  <Link
    display="block"
    mb={6}
    border="1px solid"
    borderColor="line"
    borderRadius="xl"
    overflow="hidden"
    bg="surface"
    _hover={{ opacity: 1, borderColor: "accent" }}
    {...props}
  />
);

export const PreviewToolbar = (props) => (
  <Flex
    px={{ base: 3, md: 4 }}
    py={3}
    align="center"
    gap={3}
    borderBottom="1px solid"
    borderColor="line"
    {...props}
  />
);

export const PreviewHostname = (props) => (
  <Text flex={1} fontSize="xs" color="muted" textAlign="center" {...props} />
);

export const PreviewImage = (props) => (
  <Image width="100%" aspectRatio="1.44" objectFit="cover" {...props} />
);

export const ProjectHeader = (props) => (
  <Flex
    justify="space-between"
    align={{ base: "start", md: "baseline" }}
    direction={{ base: "column", md: "row" }}
    gap={{ base: 2, md: 5 }}
    {...props}
  />
);

export const ProjectTitle = (props) => (
  <Heading
    as="h3"
    fontSize={{ base: "xl", md: "2xl" }}
    lineHeight={1.35}
    letterSpacing="-0.035em"
    fontFamily="body"
    fontWeight={600}
    {...props}
  />
);

export const ProjectTitleLink = (props) => <Link color="ink" {...props} />;

export const ProjectMeta = (props) => (
  <Text
    fontSize="xs"
    color="muted"
    whiteSpace="nowrap"
    fontWeight={500}
    {...props}
  />
);

export const ProjectSubtitle = (props) => (
  <Text mt={2} color="muted" fontSize="sm" {...props} />
);

export const ProjectDescription = (props) => (
  <Text mt={4} color="muted" maxW="68ch" lineHeight={1.8} {...props} />
);

export const ProjectDemoLink = (props) => <Link mt={3} {...props} />;

export const ProjectTags = (props) => (
  <Flex mt={4} wrap="wrap" gap={2} {...props} />
);

export const ProjectTag = (props) => (
  <Tag.Root
    size="sm"
    bg="surface"
    color="muted"
    fontWeight={500}
    borderRadius="full"
    px={3}
    py={1}
    {...props}
  />
);

export const AboutDescription = (props) => (
  <Text data-scroll-reveal="" color="muted" maxW="60ch" {...props} />
);

export const SkillsList = (props) => <Stack data-scroll-reveal="" mt={10} gap={5} {...props} />;

export const DetailRow = (props) => (
  <Flex
    direction={{ base: "column", sm: "row" }}
    gap={{ base: 2, sm: 8 }}
    {...props}
  />
);

export const DetailLabel = (props) => (
  <Text w={{ sm: "160px" }} flexShrink={0} fontWeight={600} {...props} />
);

export const MutedText = (props) => <Text color="muted" {...props} />;

export const SubsectionHeading = (props) => (
  <Heading data-scroll-reveal=""
    as="h3"
    fontFamily="body"
    fontSize="sm"
    fontWeight={700}
    letterSpacing="0.06em"
    textTransform="uppercase"
    mt={14}
    mb={6}
    {...props}
  />
);

export const ExperienceList = (props) => <Stack data-scroll-reveal="" gap={4} {...props} />;

export const DetailDate = (props) => (
  <Text
    w={{ sm: "160px" }}
    flexShrink={0}
    color="muted"
    fontSize="sm"
    pt="2px"
    {...props}
  />
);

export const DetailContent = (props) => <Box {...props} />;

export const DetailTitle = (props) => <Text fontWeight={600} {...props} />;

export const EducationDate = (props) => (
  <Text
    w={{ sm: "160px" }}
    flexShrink={0}
    color="muted"
    fontSize="sm"
    {...props}
  />
);

export const ContactDescription = (props) => (
  <Text data-scroll-reveal="" color="muted" maxW="52ch" {...props} />
);

export const ContactEmail = (props) => (
  <Text data-scroll-reveal=""
    mt={6}
    fontSize={{ base: "md", sm: "xl", md: "2xl" }}
    fontWeight={500}
    letterSpacing="-0.025em"
    overflowWrap="anywhere"
    {...props}
  />
);

export const SocialLinks = (props) => <HStack data-scroll-reveal="" mt={4} gap={6} {...props} />;

export const PageFooter = (props) => (
  <Box data-scroll-reveal="" as="footer" py={8} borderTop="1px solid" borderColor="line" {...props} />
);

export const FooterText = (props) => (
  <Text fontSize="xs" color="muted" {...props} />
);

export const Section = ({ title, children, ...props }) => (
  <SectionContainer {...props}>
    <SectionHeading>{title}</SectionHeading>
    {children}
  </SectionContainer>
);
