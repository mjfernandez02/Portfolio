import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = [
      ...document.querySelectorAll("[data-scroll-reveal]"),
    ];

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (motionPreference.matches || !("IntersectionObserver" in window)) {
      return;
    }

    // Start everything hidden
    elements.forEach((element) => {
      element.classList.add("reveal-pending");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            // Reset the animation
            target.classList.remove("reveal-pending", "reveal-visible");

            // Force a reflow so the animation can restart
            void target.offsetWidth;

            target.classList.add("reveal-visible");
          } else {
            // Prepare it for the next time it enters
            target.classList.remove("reveal-visible");
            target.classList.add("reveal-pending");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();

      elements.forEach((element) => {
        element.classList.remove(
          "reveal-pending",
          "reveal-visible"
        );
      });
    };
  }, []);
}
