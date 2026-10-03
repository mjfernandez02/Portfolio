import {
  MainNav,
  NavLinks,
  NavLink,
  ThemeToggle,
} from "../styles/portfolio.jsx";

export default function Navigation({ colorMode, toggleColorMode }) {
  return (
    <MainNav aria-label="Main">
      <NavLinks>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <ThemeToggle
        onClick={toggleColorMode}
        aria-label={
          colorMode === "light"
            ? "Switch to dark theme"
            : "Switch to light theme"
        }
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {colorMode === "light" ? (
            <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          )}
        </svg>
      </ThemeToggle>
    </MainNav>
  );
}
