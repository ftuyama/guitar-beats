import React from "react";
import "./Beats.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Beats({ beat }) {
  return (
    <Card className="beatsCard">
      <CardContent>
        <p>Beats for {beat["name"]}</p>
        {/* <p style={{color: 'red'}}>{beat['beats']}</p> */}

        <div className="arrowContainer">
          {beat["beats"].map((arrow) => (
            <div key={arrow} className="arrow">
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
