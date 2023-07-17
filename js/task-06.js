const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', function () {
  const inputValue = inputEl.value;
  const expectedLength = inputEl.getAttribute('data-length');

  if (inputValue.length === parseInt(expectedLength)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
