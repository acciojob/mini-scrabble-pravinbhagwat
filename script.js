//your code here

const textbox = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');


textbox.addEventListener('input', function() {

  const text = this.value;

  const count = text.length;

  letterCount.textContent = count;
});
