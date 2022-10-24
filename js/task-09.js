// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// console.log(getRandomHexColor())

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const btn = document.querySelector(`.change-color`);
// console.log(btn);
const span = document.querySelector(`.color`);
// console.log(span)

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
btn.addEventListener(`click`, () => {
  getRandomHexColor();
  span.textContent = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
});

