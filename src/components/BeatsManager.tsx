import React from "react";
import "./BeatsManager.css";

import Beats from "./Beats";
import Metronome from "./Metronome";
import Chords from "./Chords";

import beats from "../models/Beats";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function BeatsManager() {
  const [bpm, setBpm] = React.useState<number>(90);

  const changeBpm = (bpm) => {
    setBpm(bpm);
  }

  return (
    <div>
      <p>
        Guitar Beats <FontAwesomeIcon icon={icon({ name: "coffee" })} />
      </p>
      <small>Practice the guitar beats using a smart metronome!</small>
      <Metronome metronomeBpm={bpm} changeBpm={changeBpm} />
      <div className="beatsContainer">
        <Beats beat={beats[0]} bpm={bpm}/>
        <Beats beat={beats[1]} bpm={bpm}/>
      </div>
      <div className="chordContainer">
        <Chords />
      </div>
    </div>
  );
}

export default BeatsManager;
