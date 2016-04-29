import BaseMapper from './baseMapper';
import Teoria from 'teoria';

/*
 * Uses the propagation of characters in the given text to map each character to
 * a tone.
*/
class TextMapper extends BaseMapper {

  constructor(text) {
    super();

    this.text = text;
  }

  createNotes(key, scale) {
    const basicScale = Teoria.note(key).scale(scale).simple();
    const thirds = [basicScale[0], basicScale[2], basicScale[3], basicScale[4]];

    return thirds
      .concat(basicScale.map(note => `${note}'`))
      .concat(basicScale.map(note => `${note}''`))
      .concat(basicScale.map(note => `${note}'''`))
      .concat(basicScale.map(note => `${note}''''`));
  }

  map() {
    const chars = this.characters();
    const sortedUniqueChars = this.sortedUniqueItems(chars, this.text.length);
    const mapping = this.mapTones(sortedUniqueChars);

    var tones = [];

    const modifiedChars = this.orderMostFrequentWords(chars);

    modifiedChars.forEach(char => {
      if (char.match(/[\.\?\!]+/)) {
        tones.push(-1);
      } else {
        tones.push(Teoria.note(mapping[char]).midi());
      }
    });

    return tones;
  }

  mapTones(chars) {
    var keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var keyIndex = this.getRandomInt(0, keys.length - 1);
    var scaleIndex = this.getRandomInt(0, this.scales.length - 1);
    console.log(keys[keyIndex], this.scales[scaleIndex]);
    var scale = this.createNotes(keys[keyIndex], this.scales[scaleIndex]);

    return (
      chars.reduce((mapping, char, index) => {
        // var songKey = Teoria.note(keys[0])
        // var randomKey = index % 4 === 0 ? keys[0] : keys[this.getRandomInt(0, (keys.length - 1))];
        // var randomScale = index % 4 === 0 ? this.scales[2]this.scales[this.getRandomInt(0, (this.scales.length - 1))];
        mapping[char] = scale[index % scale.length];
        return mapping;
      }, {})
    );
  }

  orderMostFrequentWords(text) {
    return text;
  }

  mostFrequentWords() {
    const words = this.text.split(/\W/).filter(word => word !='');
    return this.sortedUniqueItems(words, words.length);
  }

  sortedUniqueItems(items, totalCount) {
    const itemCounts = this.countAppearance(items);

    const normalize = (propagation, item) => {
      propagation.push([item, itemCounts[item] / totalCount]);
      return propagation;
    };

    return (
      Object
        .keys(itemCounts)
        .reduce(normalize, [])
        .sort((a, b) => a[1] < b[1])
        .map(a => a[0])
    );
  }

  countAppearance(items) {
    const count = (counts, item) => {
      counts[item] = ((counts[item] || 0) + 1);
      return counts;
    };

    return items.reduce(count, {});
  }

  characters() {
    return this.cleanText().split('');
  }

  cleanText() {
    return this.text.replace(/\s/g, '');
  }
}

export default TextMapper;
