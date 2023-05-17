import React, { useState, useEffect } from "react";
import MeditationAudio from "./MeditationAudio.wav";

/*
In this updated code, we've done the following:

Created a new state variable volume with a default value of 1 (max volume).
Added a new useEffect to set the audio volume whenever the volume state changes.
Created a handleVolumeChange function that updates the volume state with the slider's value.
Added an input element with the type "range" and set its min, max, and step attributes for volume control. The onChange event of the slider is handled by the handleVolumeChange function.
Now, when you move the slider, the volume of the audio should change accordingly.
*/

function BreathingButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [audio] = useState(new Audio(MeditationAudio));

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  const toggle = () => setIsPlaying(!isPlaying);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="breath-button">
      <button onClick={toggle}>
        {isPlaying ? "Pause Meditation" : "Play Meditation"}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default BreathingButton;
