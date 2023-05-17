import React, { useState } from "react";

function Transcript() {
  // Set the useState to false (transcript is hidden by default)
  const [showTranscript, setShowTranscript] = useState(false);

  // Create a function to toggle the transcript visibility (from true to false and vice versa)
  const toggleTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  return (
    <div className="transcript-div">
      {/* Create a button to toggle the transcript visibility*/}
      <button data-testid="transcript-button" onClick={toggleTranscript}>
        {showTranscript ? "Hide Transcript" : "Show Transcript"}
      </button>
      {showTranscript && (
        <div className="transcript-container">
          <p>
            Welcome. Today we are swapping the bootcamp for breathing, and
            swapping react for relaxing. Our days are packed with squats and
            syntax, but sometimes the intensity can lead to stress and burnout.
            This guided meditation will help you manage your stress, stay
            focused, and maintain your well-being throughout your journey. Let's
            do it the School of Code way and break it down step-by-step.
          </p>
          <p>
            Find a quiet and comfortable space where you won't be disturbed. You
            can sit or lie down, whichever feels more comfortable for you. Close
            your eyes and take a few deep breaths to settle into this moment.
          </p>
          <p>[Pause for a few seconds]</p>
          <p>
            Now, let's begin the box breathing technique. We'll be following a
            pattern of inhaling for 4 counts, holding the breath for 4 counts,
            exhaling for 4 counts, and holding the breath again for 4 counts.
            I'll guide you through the process, but don't worry if your counting
            is not perfect – the main goal is to help you relax and focus.
          </p>
          <p>
            Inhale (1, 2, 3, 4) - Hold (1, 2, 3, 4) - Exhale (1, 2, 3, 4) - Hold
            (1, 2, 3, 4) Continue this pattern at your own pace, focusing on the
            rhythm of your breath. [Pause for a moment while soft, calming music
            plays]
          </p>
          <p>
            As you maintain this breathing pattern, let go of any stress or
            tension you may be holding onto. Remember that it's important to
            balance hard work with self-care, as this will ultimately contribute
            to your success in the bootcamp. [Pause for a moment while soft,
            calming music plays]
          </p>
          <p>
            Now, envision a mental space where you feel safe and at peace. This
            could be a serene beach, a lush forest, or any other place that
            brings you a sense of calm. Imagine yourself there, taking in the
            sights, sounds, and sensations of your surroundings. [Pause for a
            moment while soft, calming music plays]
          </p>
          <p>
            As you continue box breathing, remind yourself that it's okay to
            take breaks and step away from your work when needed. This will help
            you recharge, gain fresh perspectives, and maintain your motivation
            throughout the bootcamp. [Pause for a moment while soft, calming
            music plays]
          </p>
          <p>
            In the final moments of this meditation, let's take three more box
            breaths together. Inhale (1, 2, 3, 4) - Hold (1, 2, 3, 4) - Exhale
            (1, 2, 3, 4) - Hold (1, 2, 3, 4). Repeat two more times. [Pause for
            a few seconds]
          </p>
          <p>
            Now, slowly bring your awareness back to your surroundings, like a
            programmer emerging from a deep, dark cave of code. Gently wiggle
            your fingers and toes, and when you feel ready, open your eyes.
          </p>
          <p>
            Remember to practice box breathing and other relaxation techniques
            regularly to help prevent burnout and maintain a healthy balance
            during your software bootcamp experience.
          </p>
        </div>
      )}
    </div>
  );
}

export default Transcript;
