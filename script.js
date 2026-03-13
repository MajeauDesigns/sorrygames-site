// Sticky header state
const header = document.querySelector(".site-header");

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

// Reveal-on-scroll animation
const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Footer year
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
