import React from 'react';
import './BeatsManager.css';
import Beats from './Beats';
import Beat from '../models/Beat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function BeatsManager() {
    const beats: Beat[] = [{
        name: 'rock',
        beats: ['down', null, 'down', 'up', null, 'up', 'down', null],
    }, {
        name: 'pop',
        beats: ['down', null, 'down', null, 'down', null, null, 'up', 'down', 'up', null, null],
    }];

  return (
    <div style={{width: '50%'}}>
        <p>
            BeatsManager <FontAwesomeIcon icon={icon({name: 'coffee' })} />
        </p>
        <div className='beatsContainer'>
            <Beats beat={beats[0]} />
            <Beats beat={beats[1]} />
        </div>
    </div>
  );
}

export default BeatsManager;
