// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const btnDec = document.querySelector(`button[data-action="decrement"]`);
const btnInc = document.querySelector(`button[data-action="increment"]`);
const span = document.querySelector(`#value`);
// console.log(btnDec)
// console.log(btnInc)

const decrement = () => {
    counterValue -= 1;
    console.log(decrement);
    document.getElementById(`value`).textContent = counterValue;
};
btnDec.addEventListener(`click`, decrement);
const increment = () => {
    counterValue += 1;
    console.log(increment);
    document.getElementById(`value`).textContent = counterValue;
};
btnInc.addEventListener(`click`, increment);
