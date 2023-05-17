import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import RandomItem from "./components/RandomItem";
import Transcript from "./components/Meditation/Transcript";



test("Does the scroll arrow appear on page and scroll to next section", () => {
  render(<App />);

  // Is the arrow on the page 👍
  const arrow = screen.getByLabelText("scroll-down-arrow");
  expect(arrow).toBeInTheDocument();

  // When clicked, does the arrow scroll to the next section 👍
  // User clicks the arrow
  userEvent.click(arrow);
  // We expect the next section (artist's studio) to be in view
  // uses the aria label to find the next section
  const nextSection = screen.getByLabelText("artist-studio");
  expect(nextSection).toBeVisible();
  // We expect the next section (artist's studio) to be in view
  // // uses the aria label to find the next section
  userEvent.click(arrow);
  const nextNextSection = screen.getByLabelText("music-massage");
  expect(nextNextSection).toBeVisible();
});

test("Does the navbar appear on page and scroll to the correct section", () => {
  // Mock the scrollIntoView method
  const scrollIntoViewMock = jest.fn();
  global.window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

  render(<App />);

  // Is the navBar on the page 👍
  const navBar = screen.getByLabelText("nav-bar");
  expect(navBar).toBeInTheDocument();

  //is the artist studio link in the navBar 👍
  const artistStudioLink = screen.getByTestId("artist-studio-link");
  expect(artistStudioLink).toBeInTheDocument();

  // When clicked, does the page scroll to the next section 👍
  // User clicks the artistStudioLink
  userEvent.click(artistStudioLink);

  // We expect scrollIntoView to have been called
  expect(scrollIntoViewMock).toHaveBeenCalled();
});



// check if the page loads up with everything in the right place, added an ID to the div class name for it to work 👍

 test("checks if the page loads up", () => {
    render(<App />);
  

    // 
    const appComponent = screen.getByTestId("app-component");
    expect(appComponent).toBeInTheDocument();
});
  
test("Does the get random item button change image and text", () => { 
  const getRandomItem = jest.fn();
    render(<RandomItem item={{name:"Melancholy", image:"Image showing"}} getRandomItem={getRandomItem}/>);
   // Assert that the heading matches the text given
   const heading = screen.getByRole('heading');
   expect(heading).toHaveTextContent("Melancholy");
   // Assert that the image contains the scr passed to it 
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute("src", "Image showing");
   // Assert that when button is clicked, the getRandomItem function is called
    const button = screen.getByRole('button');
    expect(getRandomItem).not.toHaveBeenCalled();
    userEvent.click(button);
    expect(getRandomItem).toHaveBeenCalled();


  
  }); 
  

  test("Does the show transcript button work", () => {  
    render(<Transcript />);
  
    // Is the button on the page 
    const button = screen.getByRole("button", { name: "Show Transcript" });
    expect(button).toBeInTheDocument();
  
    // When clicked, does the button change the and shows the script imbedded in the page
    userEvent.click(button);
    // We expect the item to be different
    const transcript = screen.getByTestId("transcript-button");
    expect(transcript).not.toHaveTextContent("transcript");
  }); 

