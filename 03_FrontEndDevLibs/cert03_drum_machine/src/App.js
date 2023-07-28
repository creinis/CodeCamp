import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


function App() {

  const [displayKey, setDisplayKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      trigger(event.key.toUpperCase());
    });
  }, []);

  const sounds = [
    {
      asciiCode: 81,
      letter: 'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      sound: 'Heater-1'
    },
    {
      asciiCode: 87,
      letter: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      sound: 'Heater-2'
    },
    {
      asciiCode: 69,
      letter: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      sound: 'Heater-3'
    },
    {
      asciiCode: 65,
      letter: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      sound: 'Heater-4'
    },
    {
      asciiCode: 83,
      letter: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      sound: 'Clap'
    },
    {
      asciiCode: 68,
      letter: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      sound: 'Open-HiHat'
    },
    {
      asciiCode: 90,
      letter: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      sound: 'Kick-and-Hat'
    },
    {
      asciiCode: 88,
      letter: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      sound: 'Kick'
    },
    {
      asciiCode: 67,
      letter: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      sound: 'Closed-Hi-Hat'
    },
  ]

  function trigger(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();

    setDisplayKey(selector)
  }

  return (
    <div className="App">

      <div className="container" id="drum-machine">
        <h1> <em>Drum Machine</em></h1>
        <div id="display">
        <div className='container-display' id='displayKey' >{displayKey}</div>
          <div className='drum-pads' >
            {sounds.map((drumPad) => ( <div className='drum-pad' id={drumPad.src} key={drumPad.src} onClick={() => {trigger(drumPad.letter)}} >
              {drumPad.letter} <audio className='clip' id={drumPad.letter} src={drumPad.src} ></audio>
              </div> 
              ))} {/* drum machine */}
          </div>
        </div>
        <h5 id='footer'>by CReinis</h5>
      </div>
    </div>
  );
}

export default App;
