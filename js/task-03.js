const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const addList = document.querySelector(`.gallery`);

  // перший метод:

// for (let element of images) {
//   const listItem = document.createElement(`li`);
//   const elementImg = document.createElement(`img`);
//   elementImg.setAttribute(`src`, element.url);
//   elementImg.setAttribute(`alt`, element.alt);
//   elementImg.classList.add(`gallery__img`);
//   listItem.appendChild(elementImg);
//   console.log(listItem);
//   addList.appendChild(listItem);
// }


  // другий метод:
  const listItem = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" class="gallery__img" ></li>`).join("");
console.log(listItem);
addList.insertAdjacentHTML(`beforeend`, listItem);

