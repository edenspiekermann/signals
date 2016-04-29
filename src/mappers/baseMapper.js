/*
 * Base class for all content mappers.
 */
class BaseMapper {

  constructor() {
    this.scales = [
      'major',
      'minor',
      'dorian',
      'mixolydian',
      'locrian',
      'majorpentatonic',
      'minorpentatonic',
      'melodicminor'
    ];
  }

  map() {
    console.error('Please implement .map() for your Mapper.');
    return {};
  }

  getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default BaseMapper;
