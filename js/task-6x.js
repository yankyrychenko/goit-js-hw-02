const inputRef = document.querySelector(`.task-six .input `);
const buttonSubmitRef = document.querySelector(`.task-six .submit`);
const buttonExitRef = document.querySelector(`.task-six .exit`);
let total = 0;
let numbers = [];

buttonSubmitRef.addEventListener(`click`, () => {
  let input = Number(inputRef.value);
  numbers.push(input);
});

buttonExitRef.addEventListener(`click`, () => {
  for (const number of numbers) {
    total += number;
  }

  console.log(`Общая сумма чисел равна ${total}`);
  total = 0;
  numbers = [];
});
