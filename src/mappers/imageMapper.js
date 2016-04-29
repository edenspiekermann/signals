import BaseMapper from './baseMapper';
import Teoria from 'teoria';
import Jimp from 'jimp';

class ImageMapper extends BaseMapper {

  constructor(imageUrl) {
    super();
    this.image = imageUrl;

    console.log(imageUrl);

    const scaleType = 'dorian';
    const key = 'a';
    const basicScale = Teoria.note(key).scale(scaleType).simple();

    this.scale = basicScale
      .concat(basicScale.map(note => `${note}'`))
      .concat(basicScale.map(note => `${note}''`))
      .concat(basicScale.map(note => `${note}'''`))
      .concat(basicScale.map(note => `${note}''''`));
  }

  map() {
    Jimp.read(this.image, (error, image) =>{
      console.log(error, image);
    });
  }
}

export default ImageMapper;
