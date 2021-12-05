/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.getElementById("navbar__list");

const sections = [
  document.getElementById("section1"),

  document.getElementById("section2"),

  document.getElementById("section3"),

  document.getElementById("section4"),
];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// function to create menu
const createMenu = () => {
  sections.forEach((section) => {
    const li = document.createElement("li");
    const sectionName = section.dataset.nav;
    const sectionId = section.id;
    li.innerHTML = `
        <a class="menu__link"  data-target="${sectionId}">${sectionName}</a>
        `;
    navbarList.appendChild(li);
  });
};

// Add class 'active' to section when near top of viewport

const addActive = () => {
  sections.forEach((section) => {
    if (
      // get section top of view
      section.getBoundingClientRect().top >= 0 &&
      // check is section contains your-active-class class
      !section.classList.contains("your-active-class")
    ) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
};

// Scroll to anchor ID using scrollTO event
const scrollToByLink = (id) => {
  // find section by id in sections array
  const section = sections.find((section) => section.id === id);
  window.scrollTo(0, section.offsetTop);
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
createMenu();

// Scroll to section on link click

const navLinks = document.querySelectorAll(".menu__link");

// remove class active from navLinks
const removeActiveFromLinks = () => {
  navLinks.forEach((link) => {
    // check if navLink have class active
    if (link.classList.contains("active")) link.classList.remove("active");
  });
};

navLinks.forEach((link) => {
  // add Event for every navLink
  link.addEventListener("click", (e) => {
    // remove active class from navLinks
    removeActiveFromLinks();
    // add active class to navlink clicked
    e.target.classList.add("active");
    // scroll to specific section
    scrollToByLink(e.target.getAttribute("data-target"));
  });
});

// Set sections as active
window.addEventListener("scroll", addActive);
