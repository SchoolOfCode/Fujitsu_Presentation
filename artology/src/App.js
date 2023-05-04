import "./App.css";
import { useEffect, useReducer } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import RandomItem from "./components/RandomItem/index";
import { adjectives } from "./RandomItem/Adjective";
import { movies } from "./RandomItem/Movie";
import { places } from "./RandomItem/Place";
import { questions } from "./RandomItem/Question";
import Arrow from "./components/Arrow";
import FrontImage from "./components/FrontImage/FrontImage";
import RandomQuestion from "./components/RandomQuestion";
import Meditation from "./components/Meditation/Meditation";

// Define actions that will be dispatched to the reducer
const ACTION = {
  SET_ITEM_1: "change_mood",
  SET_ITEM_2: "change_movie",
  SET_ITEM_3: "change_place",
  CHANGE_QUESTION: "change_question"
}

// Define the initial state using an object
const initialState = {
  item1: {},
  item2: {},
  item3: {},
  question: {},
};

// Define a reducer function that will update the app's state based on actions dispatched to it
function reducer(state, action) {
  switch (action.type) {
    case ACTION.SET_ITEM_1:
      return { ...state, item1: action.payload };
    case ACTION.SET_ITEM_2:
      return { ...state, item2: action.payload };
    case ACTION.SET_ITEM_3:
      return { ...state, item3: action.payload };
    case ACTION.CHANGE_QUESTION:
      return { ...state, question: action.payload };
    default:
      return state;
  }
}

function App() {

  // Set up the app's state and reducer function using the useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a function that takes in: 
  // an array of items, an action to dispatch, and a previously selected item
  // and dispatches a new random item
  function getRandomItem(array, setItemAction, previousItem) {
    let randomItem = previousItem;
    while (randomItem === previousItem) {
      const randomNumber = Math.floor(Math.random() * array.length);
      randomItem = array[randomNumber];
    }
    dispatch({ type: setItemAction, payload: randomItem });
  }

  // Create a function that takes an array of questions 
  // and dispatches a new random question
  function getRandomQuestion(array) {
    const prevQuestion = state.question;
    let randomQuestion = prevQuestion;
    while (randomQuestion === prevQuestion) {
      const randomNumber = Math.floor(Math.random() * array.length);
      randomQuestion = array[randomNumber];
    }
    dispatch({ type: ACTION.CHANGE_QUESTION, payload: randomQuestion });
  }

  // Use the useEffect hook to run the actions on mounts
  useEffect(() => {
    getRandomItem(adjectives, ACTION.SET_ITEM_1);
    getRandomItem(movies, ACTION.SET_ITEM_2);
    getRandomItem(places, ACTION.SET_ITEM_3);
    getRandomQuestion(questions);
  }, []);

  // Return the JSX for the app component
  return (
    <div data-testid="app-component" className="App">
      <header id="top-of-page" className="App-header">
        <Navbar />
        <Arrow />
      </header>
      <main>
        <div className="frontpage-container">
          <FrontImage />
        </div>
        <section
          id="artist-studio"
          aria-label="artist-studio"
          className="artist-studio"
        >
          <div className="question-container">
            <RandomQuestion question={state.question} 
              getRandomQuestion={() => getRandomQuestion(questions)}
            />
          </div>
          <div className="item-container">
            <RandomItem
              item={state.item1}
              getRandomItem={() => getRandomItem(adjectives, ACTION.SET_ITEM_1)}
            />
            <RandomItem
              item={state.item2}
              getRandomItem={() => getRandomItem(movies, ACTION.SET_ITEM_2)}
            />
            <RandomItem
              item={state.item3}
              getRandomItem={() => getRandomItem(places, ACTION.SET_ITEM_3)}
            />
          </div>
        </section>
        <section
          id="music-massage"
          aria-label="music-massage"
          className="music-massage"
        >
          <Meditation />
        </section>
      </main>
    </div>
  );
}

export default App;