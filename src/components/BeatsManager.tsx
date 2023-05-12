import React from 'react';
import './BeatsManager.css';
import Beats from './Beats';
import Beat from '../models/Beat';
import chords from '../models/Chords';
import instrument from '../models/Instruments';
import Chord from '@tombatossals/react-chords/lib/Chord'
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
    <div>
        <p>
            Guitar Beats <FontAwesomeIcon icon={icon({name: 'coffee' })} />
        </p>
        <small>Practice the guitar beats using a smart metronome!</small>
        <div className='beatsContainer'>
            <Beats beat={beats[0]} />
            <Beats beat={beats[1]} />
        </div>
        <div className='chordContainer'>
            <p>C</p>
            <Chord
                chord={chords['C']}
                instrument={instrument}
                lite={false}
            />
        </div>
    </div>
  );
}

export default BeatsManager;
