const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


const addList = document.querySelector(`#ingredients`);

const arr = [];
for (let element of ingredients) {
    const listItem = document.createElement(`li`);
    listItem.classList.add(`item`);
    listItem.textContent = `${element}`;
    arr.push(listItem);
    console.log(listItem);
}
addList.append(...arr);