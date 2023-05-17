import { useState, useEffect } from "react";
import React from "react";
import MusicButton from "./MusicButton";
import BreathingButton from "./BreathingButton";
import Transcript from "./Transcript";
import Wave from "./wave.gif";
import "./Meditation.css";
import voice from "./voice.png";
import music from "./music.png";

/*
I want to make component that will be a section of the webpage dedicated to a meditating activity
I want to have a button that will generate a random meditation activity
The generated content should have an audio file that the user can listen to, pause and play
The audio file will have a scrubber that the user can use to move to different parts of the audio file
There should also be a button that plays relaxing music when pressed, which is then paused when the button is pressed again

*/

function Meditation() {
  //   const waveBackground = {
  //     width: "100%",
  //     height: "100vh",
  //     backgroundImage: `url(${Wave})`,
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //   };

  return (
    <section
      id="meditation-section"
      aria-label="meditation-section"
      // style={waveBackground}
    >
      <h2 className="meditation-title">{"//Follow our guided meditation to relax"}</h2>
      <div className="music-container">
        <div className="img-row">
          <img src={music} alt="record" className="music-record"/>
          <img src={voice} alt="record player" className="voice-record"/>
        </div>
        <div className="button-row">
          <MusicButton />
          <BreathingButton />
        </div>
      </div>
      <Transcript />
      {/* <img src={Wave} alt="wave" className="wave" /> */}
    </section>
  );
}

export default Meditation;
