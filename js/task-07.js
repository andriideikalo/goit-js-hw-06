// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const positionInput = document.querySelector("#font-size-control");
console.dir(positionInput);
console.log(positionInput.value);

positionInput.addEventListener(`input`, () => {
    const sizeContent = document.querySelector("#text");
    sizeContent.style.fontSize = `${Number(positionInput.value)}px`;
    console.log(positionInput.value);
    });
