const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
  spanEl.textContent = inputEl.value || 'Anonymous';
}
