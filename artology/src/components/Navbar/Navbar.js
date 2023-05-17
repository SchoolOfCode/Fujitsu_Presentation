import React from "react";
import "./Navbar.css";
import logo from "../../RandomItem/Image/logo.jpg";

function Navbar() {
  function handleClick(event, id) {
    event.preventDefault(); // prevent the default anchor link behavior

    // select the target element and the navbar
    const element = document.getElementById(id);
    const navbar = document.querySelector(".nav-bar");

    // get the styles applied to the navbar
    const navbarStyles = window.getComputedStyle(navbar);

    // calculate the total height of the navbar including padding
    const navbarHeight =
      navbar.offsetHeight +
      parseInt(navbarStyles.paddingTop) + // convert paddingTop to integer
      parseInt(navbarStyles.paddingBottom); // convert paddingBottom to integer

    // get the position of the body element from the top of the viewport
    const bodyRect = document.body.getBoundingClientRect().top;

    // get the position of the target element from the top of the viewport
    const elementRect = element.getBoundingClientRect().top;

    // calculate the absolute position of the target element with respect to the top of the body
    const elementPosition = elementRect - bodyRect;

    // adjust the scroll position to account for the navbar height
    // The + 135 is personal preference to how close the top of section is below the navBar, adjust as desired
    const offsetPosition = elementPosition - navbarHeight + 135;

    // scroll the page to the calculated position
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

  return (
    <nav className="nav-bar" aria-label="nav-bar">
    <div className="nav-container">
      <ul>
        <li>
          <a
            href="#artist-studio"
            className="nav-link"
            onClick={(e) => handleClick(e, "artist-studio")}
            data-testid="artist-studio-link" // added for testing
          >
            Artist Studio
          </a>
        </li>
        <li>
          <a href="#science-lab" className="nav-link">
            Science Lab
          </a>
        </li>
        <li>
          <a
            href="#top-of-page"
            className="nav-link"
            onClick={(e) => handleClick(e, "top-of-page")}
          >
            <img src={logo} alt="Logo" className="logo-img" />
          </a>
        </li>
        <li>
          <a
            href="#music-massage"
            className="nav-link"
            onClick={(e) => handleClick(e, "music-massage")}
          >
            Music Massage
          </a>
        </li>
        <li>
          <a href="#code-play" className="nav-link">
            Code Play
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
