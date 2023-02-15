const num = Math.trunc(Math.random()*10);
const num2 = Math.trunc(Math.random()*10);

const question = document.getElementById('question').innerText = `What is the sum of:  ${num} + ${num2} ?`;
const form = document.getElementById('form');
const inputEl = document.getElementById('input');

const correctAns = num + num2;

const scoreEl = document.getElementById('score');

let score = JSON.parse(localStorage.getItem('score'));

if(!score){
  score = 0;
}

scoreEl.innerText = `score: ${score}`

form.addEventListener('submit', ()=>{
  const userAns = +inputEl.value;
  if(userAns === correctAns){
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score))
}