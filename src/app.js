import Player from './player';

global.app = function () {
  var input = document.getElementById('content-input');
  var submit = document.getElementById('content-submit');

  var playContent = (e) => {
    new Player('acoustic_grand_piano', input.value).start();
  };

  submit.addEventListener('click', playContent);
};
