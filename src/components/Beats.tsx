import React from "react";
import "./Beats.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

function Beats({ beat, bpm }) {
  const arrowCount = beat["beats"].length;
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [arrowIndex, setArrowIndex] = React.useState<number>(-1);

  React.useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(function () {
        setArrowIndex((index) => (index + 1) % arrowCount);
      }, (60 * 1000 * 4) / (bpm * arrowCount));
    }

    return () => {
      clearInterval(intervalId);
    };
  });

  const handleStartStop = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Card className="beatsCard">
      <CardContent>
        <p>
          Beats for {beat["name"]}
          <span className="startButton">
            <IconButton
              aria-label="fingerprint"
              color="secondary"
              onClick={handleStartStop}
            >
              {isPlaying ? (
                <FontAwesomeIcon icon={icon({ name: "stop" })} />
              ) : (
                <FontAwesomeIcon icon={icon({ name: "play" })} />
              )}
            </IconButton>
          </span>
        </p>

        <div className="arrowContainer">
          {beat["beats"].map((arrow, index) => (
            <div
              key={`${arrow}-${index}`}
              className={"arrow" + (index === arrowIndex ? " arrowActive" : "")}
            >
              {arrow === "up" && (
                <FontAwesomeIcon icon={icon({ name: "arrow-up" })} />
              )}
              {arrow === "down" && (
                <FontAwesomeIcon icon={icon({ name: "arrow-down" })} />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Beats;
