import React from "react";
import "./Chords.css";

import chords from "../models/Chords";
import instrument from "../models/Instruments";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Chord from "@tombatossals/react-chords/lib/Chord";
import { Autocomplete, TextField } from "@mui/material";

function Chords() {
  const [chord, setChord] = React.useState<string>("Cmajor");

  const handleChordChange = (event, chordValue) => {
    if (chords[chordValue]) {
        setChord(chordValue);
    }
  };

  return (
    <Card className="chordCard">
      <CardContent>
        <Autocomplete
          disablePortal
          options={Object.keys(chords)}
          onInputChange={handleChordChange}
          renderInput={(params) => <TextField {...params} label="Chord" />}
        />
        <Chord chord={chords[chord][0]} instrument={instrument} lite={false} />
      </CardContent>
    </Card>
  );
}

export default Chords;
