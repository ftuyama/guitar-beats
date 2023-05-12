import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Beats.css';

function Beats({ beat }) {
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <p>
          Beats for {beat["name"]}
        </p>
        {/* <p style={{color: 'red'}}>{beat['beats']}</p> */}

        <div className="arrowContainer">
            { beat['beats'].map((arrow) => (
                <div key={arrow}>
                    { arrow == 'up' &&
                        <FontAwesomeIcon icon={icon({name: 'arrow-up' })} />
                    }
                    { arrow == 'down' &&
                        <FontAwesomeIcon icon={icon({name: 'arrow-down' })} />
                    }

                </div>
            ))}
        </div>
        </CardContent>
    </Card>
  );
}

export default Beats;
