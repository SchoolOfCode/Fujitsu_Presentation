import React from "react";
import "./Arrow.css";

function Arrow() {
  const handleClick = () => {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
    const sections = Array.from(document.querySelectorAll("[id]"));

    const nextSection = sections.find((section) => {
      const sectionTop =
        section.getBoundingClientRect().top + currentScrollPosition;
      return sectionTop > currentScrollPosition + 300;
    });

    // select the navbar
    const navbar = document.querySelector(".nav-bar");

    // get the styles applied to the navbar
    const navbarStyles = window.getComputedStyle(navbar);

    // calculate the total height of the navbar including padding
    const navbarHeight =
      navbar.offsetHeight +
      parseInt(navbarStyles.paddingTop) + // convert paddingTop to integer
      parseInt(navbarStyles.paddingBottom); // convert paddingBottom to integer

      let offsetPosition;

      if (nextSection) {
        // calculate the absolute position of the target section with respect to the top of the body
        const sectionPosition =
          nextSection.getBoundingClientRect().top + currentScrollPosition;
  
        // adjust the scroll position to account for the navbar height
        offsetPosition = sectionPosition - navbarHeight + 135;
      } else {
        // scroll to the end of the page
        offsetPosition = document.body.scrollHeight - window.innerHeight;
      }
  
    // scroll the page to the calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

};

return (
  <div
    className="arrow-container"
    aria-label="scroll-down-arrow"
    onClick={handleClick}
  >
    <i className="arrow-down" />
  </div>
);
}

export default Arrow;
