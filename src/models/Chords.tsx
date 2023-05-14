import chordsData from "./chords.json";

const chordsList = Object.values(chordsData["chords"]).flat();

const chords = chordsList.reduce((hash, chordData) => {
  return {
    ...hash,
    [chordData["key"] + chordData["suffix"]]: chordData["positions"],
  };
}, {});

export default chords;
