import { useEffect, useState } from "react";

function Nav({ className }) {
  const [active, setActive] = useState("project");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      // { threshold: 0.3},
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}  text-white w-full justify-center flex md:gap-15 gap-7 items-center py-4.5 duration-300 min-h-16 h-auto ${className}`}
    >
      <a className={active === "home" ? "active" : ""} href="#home">
        Home
      </a>

      <a className={active === "skills" ? "active" : ""} href="#skills">
        Skills
      </a>

      <a className={active === "projects" ? "active" : ""} href="#projects">
        Projects
      </a>

      <a className={active === "contact" ? "active" : ""} href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
