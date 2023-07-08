let target = document.getElementById('text01');
target.addEventListener('blur', function() {
  let span = document.getElementById('msg');
  if (this.value === '') {
    span.textContent = '入力された文字: なし';
    span.classList.add('hidden');
  };
  
  if (this.value !== '') {
    span.textContent = '入力された文字: ' + this.value;
    console.log(this);
    span.classList.remove('hidden');
  }
});