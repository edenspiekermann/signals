/*
 * Base class for all content mappers.
 */
class BaseMapper {

  constructor() {
    this.scales = [
      'major',
      'minor',
      'dorian',
      'phrygian',
      'lydian',
      'mixolydian',
      'locrian',
      'majorpentatonic',
      'minorpentatonic',
      'chromatic',
      'blues',
      'doubleharmonic',
      'flamenco',
      'harmonicminor',
      'melodicminor',
      'wholetone'
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
