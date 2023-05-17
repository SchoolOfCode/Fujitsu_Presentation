import "./App.css";
import { useState, useEffect } from "react";
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

function App() {
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});
  const [item3, setItem3] = useState({});
  const [question, setQuestion] = useState({});

  let previousItem1 = null;
  let previousItem2 = null;
  let previousItem3 = null;
  let previousQuestion = null;

  function getRandomItem1(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    // we want to check that the item is not the same as the previous item
    while (randomItem === previousItem1) {
      randomNumber = Math.floor(Math.random() * array.length);
      randomItem = array[randomNumber];
    }
    // then we set the previous item to the current item
    previousItem1 = randomItem;
    setItem1(randomItem);
    console.log("item1");
    return randomItem;
  }

  function getRandomItem2(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    // we want to check that the item is not the same as the previous item
    while (randomItem === previousItem2) {
      randomNumber = Math.floor(Math.random() * array.length);
      randomItem = array[randomNumber];
    }
    // then we set the previous item to the current item
    previousItem2 = randomItem;
    setItem2(randomItem);
    console.log("item2");
    return randomItem;
  }

  function getRandomItem3(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomItem = array[randomNumber];
    // we want to check that the item is not the same as the previous item
    while (randomItem === previousItem3) {
      randomNumber = Math.floor(Math.random() * array.length);
      randomItem = array[randomNumber];
    }
    // then we set the previous item to the current item
    previousItem3 = randomItem;
    setItem3(randomItem);
    console.log("item3");
    return randomItem;
  }

  function getRandomQuestion(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    let randomQuestion = array[randomNumber];
    // we want to check that the question is not the same as the previous
    while (randomQuestion === previousQuestion) {
      randomNumber = Math.floor(Math.random() * array.length);
      randomQuestion = array[randomNumber];
    }
    // then we set the previous question to the current question
    previousQuestion = randomQuestion;
    setQuestion(randomQuestion);
    console.log("question");
    return randomQuestion;
  }

  useEffect(() => {
    getRandomItem1(adjectives);
    getRandomItem2(movies);
    getRandomItem3(places);
    getRandomQuestion(questions);
  }, []);

  return (
    <div data-testid="app-component" className="App">
      <header id="top-of-page" className="App-header">
        <Navbar />
        <Arrow />
      </header>
      <main>
        <div ClassName="frontpage-container">
          <FrontImage src={FrontImage} />
        </div>
        <section
          id="artist-studio"
          aria-label="artist-studio"
          className="artist-studio"
        >
          <div className="question-container">
            <RandomQuestion
              question={question}
              getRandomQuestion={() => getRandomQuestion(questions)}
            />
          </div>
          <div dataclassName="item-container" className="item-container">
            <RandomItem
              item={item1}
              getRandomItem={() => getRandomItem1(adjectives)}
            />
            <RandomItem
              item={item2}
              getRandomItem={() => getRandomItem2(movies)}
            />
            <RandomItem
              item={item3}
              getRandomItem={() => getRandomItem3(places)}
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
