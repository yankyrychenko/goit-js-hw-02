let input = prompt('Number you add will count to summary');
const numbers = [];
let total = 0;

while (input !== null) {
  if (isNaN(input)) {
    console.log('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(Number(input));
  }

  input = prompt('Number you add will count to summary');
}

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);
