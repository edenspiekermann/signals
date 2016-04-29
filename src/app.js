import Player from './player';

global.app = function () {
  var input = document.getElementById('content-input');
  var submit = document.getElementById('content-submit');

  var playContent = (e) => {
    new Player('acoustic_grand_piano', input.value).start();
  };

  submit.addEventListener('click', playContent);

  function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  function handleDroppedFile(event) {
    event.stopPropagation();
    event.preventDefault();

    // FileList object
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = (file) => {
      displayContent(file);
    };

    if (file.name.match(/(\.jpg|\.jpeg|\.png|\.gif)$/)) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  }

  function displayContent(file) {
    document.getElementById('img-preview').src = file.target.result;
    document.getElementById('content-input').value = file.target.result;
  }

  const dropBox = document.getElementById('content-input');
  dropBox.addEventListener('dragover', handleDragOver, false);
  dropBox.addEventListener('drop', handleDroppedFile, false);
};
