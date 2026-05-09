const header = document.querySelector(".site-header");

const updateHeader = () => {
  if (window.scrollY > 30) {
    header?.classList.add("is-scrolled");
  } else {
    header?.classList.remove("is-scrolled");
  }
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
