import Teoria from 'teoria';
import TextMapper from './mappers/textMapper';

// var _generateNotes = (key) => {
//   var scales = ['major', 'minor', 'ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian'];
//
//   var mix = Teoria
//     .note(key)
//     .scale('phrygian')
//     .simple()
//
//   return mix.map((note) => {
//     return Teoria.note(note).midi();
//   });
// }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Player {
  constructor(instrument, content) {
    this.instrument = instrument;
    this.content = content;
  }

  start() {
    const $this = this;

    MIDI.loadPlugin({
      soundfontUrl: "./vendor/soundfont/",
      instrument: this.instrument,
      onprogress: function(state, progress) {
        console.log(state, progress);
      },
      onsuccess: function() {
        MIDI.setEffects([{
          type: "Delay",
          feedback: 0.6, // 0 to 1+
          delayTime: 500, // how many milliseconds should the wet signal be delayed?
          wetLevel: 0.76, // 0 to 1+
          dryLevel: 1, // 0 to 1+
          cutoff: 20, // cutoff frequency of the built in highpass-filter. 20 to 22050
          bypass: 0
        },
        {
          type: "Phaser",
          rate: 4, // 0.01 to 8 is a decent range, but higher values are possible
          depth: 0.7, // 0 to 1
          feedback: 0.5, // 0 to 1+
          stereoPhase: 100, // 0 to 180
          baseModulationFrequency: 700, // 500 to 1500
          bypass: 0
        }]);
        const notes = $this.loadNotesFromContent();
        $this.playNotes(notes);
      }
    });
  }

  loadNotesFromContent() {
    return new TextMapper(this.content).map();
  }

  playNotes(notes) {
    const delay = 2; // play one note every quarter second
    const velocity = 127; // how hard the note hits
    const speed = this.getSpeed(notes);
    MIDI.setVolume(0, 127);

    var index = 0;

    // play the notes
    setInterval(() => {
      MIDI.noteOn(0, notes[index], velocity);
      MIDI.noteOff(0, notes[index], delay);

      if (index % 4 === 0) {
        MIDI.chordOn(0, [notes[index], notes[index + 2], notes[index + 4]], 50);
        MIDI.chordOff(0, [notes[0], notes[2], notes[4]], delay);
      }

      index = index > notes.length ? 0 : index + 1
    }, speed);
  }

  getSpeed(notes) {
    const maxSpeed = 340; // bpm
    const minSpeed = 120;
    const length = notes.length;
    var speed = (60 * 1000) / (Math.log2(length) * Math.log2(length) * 2);

    speed = Math.min(speed, (60 * 1000) / minSpeed);
    speed = Math.max(speed, (60 * 1000) / maxSpeed);
    console.log(speed);
    return speed;
  }
}

export default Player;
