/*
 * Base class for all content mappers.
 */
class BaseMapper {

  constructor() {
    this.scales = [
      'major',
      'minor',
      'ionian',
      'dorian',
      'phrygian',
      'lydian',
      'mixolydian'
    ];
  }

  map() {
    console.error('Please implement .map() for your Mapper.');
    return {};
  }
}

export default BaseMapper;
