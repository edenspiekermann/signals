var Teoria = require('teoria');

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
    var notes = _generateNotes('g');

    MIDI.loadPlugin({
      soundfontUrl: "./vendor/soundfont/",
      instrument: this.instrument,
      onprogress: function(state, progress) {
        console.log(state, progress);
      },
      onsuccess: function() {
        //const content = $this.loadNotesFromContent();
        $this.playNotes(notes);
      }
    });
  }

  loadNotesFromContent() {
    return [Teoria.note('a4').midi(), Teoria.note('c4').midi()];
  }

  playNotes(notes) {
    var delay = 0; // play one note every quarter second
    var velocity = 127; // how hard the note hits
    MIDI.setVolume(0, 127);

    // play the notes
    setInterval(() => {
      var index = getRandomInt(0, notes.length + 1);
      MIDI.noteOn(0, notes[index], velocity);
    }, 1000);
  }
}

export default Player;
