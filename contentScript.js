(function () {
  const $addKeyBtn = document.querySelector("a.addkey-btn");
  const $addKeyModal = document.querySelector('div.modal[id=addkey]');

  if ($addKeyBtn === null && $addKeyModal === null) {
    return;
  }

  const $textArea = $addKeyModal.querySelector('textarea#base-value');
  const $textInput = $addKeyModal.querySelector('input#keyName[type=text]')

  const converter = (input) => {
    return input.replace(/(^\W+|(\:(?=\w))|\W+$)/g, '').replace(/(\W+)/g, '_');
  }

  $textArea.addEventListener('keyup', (event) => {
    $textInput.value = converter($textArea.value).toLowerCase();
  });
})();