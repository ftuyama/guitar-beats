import React from "react";
import "./Metronome.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import knownBpms from "../models/Bpms";

function Metronome({ metronomeBpm }) {
  const maxBpm = 218;
  const [bpm, setBpm] = React.useState<number>(metronomeBpm);

  const handleSliderChange = (event: Event, newBpm: number | number[]) => {
    if (typeof newBpm === "number") {
      setBpm(newBpm);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBpm(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (bpm < 0) {
      setBpm(0);
    } else if (bpm > maxBpm) {
      setBpm(maxBpm);
    }
  };

  return (
    <Card className="metronomeCard">
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <p>Metronome</p>
          </Grid>
          <Grid item xs>
            <Slider
              className="metronomeSlider"
              value={typeof bpm === "number" ? bpm : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              valueLabelDisplay="auto"
              marks={knownBpms}
              max={maxBpm}
            />
          </Grid>
          <Grid item>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">bpm</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                value={bpm}
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: maxBpm,
                  type: "number",
                  "aria-labelledby": "input-slider",
                  "aria-label": "bpm",
                }}
              />
              <FormHelperText id="outlined-weight-helper-text">
                Beats per minute
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Metronome;
