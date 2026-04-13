const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

console.log(sections);
console.log(navLinks);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // adjust when it triggers
  }
);

sections.forEach((section) => {
  observer.observe(section);
});