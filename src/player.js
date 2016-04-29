import Teoria from 'teoria';
import TextMapper from './mappers/textMapper';

var _generateNotes = (key) => {
  var scales = ['major', 'minor', 'ionian', 'dorian', 'phrygian', 'lydian', 'mixolydian'];

  var mix = Teoria
    .note(key)
    .scale('phrygian')
    .simple()

  return mix.map((note) => {
    return Teoria.note(note).midi();
  });
}

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
        const notes = $this.loadNotesFromContent();
        $this.playNotes(notes);
      }
    });
  }

  loadNotesFromContent() {
    return new TextMapper(this.content).map();
  }

  playNotes(notes) {
    var delay = 0; // play one note every quarter second
    var velocity = 127; // how hard the note hits
    MIDI.setVolume(0, 127);

    var index = 0;

    // play the notes
    setInterval(() => {
      MIDI.noteOn(0, notes[index], velocity);
      index = index > notes.length ? 0 : index + 1
    }, 200);
  }
}

export default Player;
