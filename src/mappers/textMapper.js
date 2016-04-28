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
    this.scale = ["a", "b", "c#", "d", "e", "f#", "g"];
  }

  map() {
    const mapping = this.mapTones(this.sortedUniqueCharacters());
    return this.characters().map(char => Teoria.note(mapping[char]).midi());
  }

  mapTones(chars) {
    return (
      chars.reduce((mapping, char, index) => {
        mapping[char] = this.scale[index % this.scale.length];
        return mapping;
      }, {})
    );
  }

  sortedUniqueCharacters() {
    const characterCounts = this.countCharacters();

    const normalize = (propagation, char) => {
      propagation.push([char, characterCounts[char] / this.text.length]);
      return propagation;
    };

    return (
      Object
        .keys(characterCounts)
        .reduce(normalize, [])
        .sort((a, b) => a[1] < b[1])
        .map(a => a[0])
    );
  }

  countCharacters() {
    const count = (counts, char) => {
      counts[char] = ((counts[char] || 0) + 1);
      return counts;
    };

    return this.characters().reduce(count, {});
  }

  characters() {
    return this.cleanText().split('');
  }

  cleanText() {
    return this.text.replace(/\s/g, '');
  }
}

export default TextMapper;
