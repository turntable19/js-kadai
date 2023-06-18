let target = document.getElementById('text01');
target.addEventListener('blur', function() {
  let span = document.getElementById('msg');
  if (this.value !== '') {
    span.textContent = '入力された文字: ' + this.value;
    span.classList.remove('hidden');
  }
});