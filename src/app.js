var Teoria = require('teoria');

var _generateNotes = (key) => {
  var scales = ['major', 'minor', 'ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian']
  var mix = Teoria
    .note(key)
    .scale('phrygian')
    .simple()

  return mix.map((note) => {
    return Teoria.note(note).midi();
  });
}

var _generateChords = () => {
  var scales = ['major', 'minor', 'ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian']
  var mix = Teoria
    .note('g')
    .scale('phrygian')
    .simple()

  return mix.map((note) => {
    return Teoria.note(note).midi();
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


global.app = () => {
  window.Teoria = Teoria;
  MIDI.loadPlugin({
    soundfontUrl: "./vendor/soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {
      var notes = _generateNotes('g');
      var delay = 0; // play one note every quarter second
      var velocity = 127; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 127);

      setInterval(() => {
        var index = getRandomInt(0, notes.length + 1);
        MIDI.noteOn(0, notes[index], velocity);
      }, 1000);
    }
  });
  MIDI.setEffects([{
    type: "MoogFilter",
    bufferSize: 4096,
    bypass: false,
    cutoff: 0.065,
    resonance: 3.5
  },
  {
    type: "Tremolo",
    intensity: 0.3, // 0 to 1
    rate: 0.1, // 0.001 to 8
    stereoPhase: 0, // 0 to 180
    bypass: 0
  },
  {
    type: "WahWah",
    automode: true, // true/false
    baseFrequency: 0.5, // 0 to 1
    excursionOctaves: 2, // 1 to 6
    sweep: 0.2, // 0 to 1
    resonance: 10, // 1 to 100
    sensitivity: 0.5, // -1 to 1
    bypass: 0
  },
  {
    type: "Delay",
    feedback: 0.45,    //0 to 1+
    delayTime: 150,    //how many milliseconds should the wet signal be delayed?
    wetLevel: 0.25,    //0 to 1+
    dryLevel: 1,       //0 to 1+
    cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
    bypass: 0
  }
]);
}
