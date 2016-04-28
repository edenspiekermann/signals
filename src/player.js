import teoria from 'teoria';

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
        const content = $this.loadNotesFromContent();
        $this.playNotes(notes);
      }
    });
  }

  loadNotesFromContent() {
    return [teoria.note('a4').midi(), teoria.note('c4').midi()];
  }

  playNotes(notes) {
    var delay = 0; // play one note every quarter second
    var velocity = 127; // how hard the note hits
    var note = 69;

    // play the notes
    notes.forEach(function(note, index) {
      MIDI.setVolume(0, 127);
      MIDI.noteOn(0, note, velocity, delay);
      MIDI.noteOff(0, note, delay + 0.75);
    });
  }
}

export default Player;
