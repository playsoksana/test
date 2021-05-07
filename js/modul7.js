// const text = document.querySelector(".article-text");
// //console.log(text.textContent);
// const article = document.querySelector(".article-title");
// console.log(article);
// article.textContent = '{EQ';
// article.style.color = 'red';
// const button = document.querySelector('.btn');
// button.style.backgroundColor = 'red';
// const list = document.querySelector('.list-item');
// console.log(list.classList);
// list.classList.remove('three-item')
// console.log(list.classList);
// list.classList.add('COCONUT', 'new-class');
// console.log(list.classList);
// const newText = document.querySelector('.text');
// newText.classList.toggle("ishidden");
// newText.classList.toggle("ishidden");

// list.classList.forEach(item => console.log(item));
// const picture = document.querySelector('.image');
// console.log(picture.attributes);
// console.log(picture.attributes);
// console.log(picture.hasAttribute("src"))
// picture.setAttribute("alt", "la la la");
// console.log(picture.getAttribute('alt'));

// const saveBtn = document.querySelector('.list-item button[data-action="save"]');
// const closeBtn = document.querySelector('.list-item button[data-action="close"]');
// const saveBtnAction = saveBtn.dataset.action;
// const closeBtnAction = closeBtn.dataset.action;
// console.log(saveBtnAction);
// console.log(closeBtnAction);

// const newTag = document.createElement('h2');
// newTag.textContent = 'Тут будет реклама всякой хрени';
// const newImg = document.createElement('img');
// newImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Egg_upright.jpg');
// newImg.setAttribute('alt', 'agg');
// newImg.setAttribute('width', 100);
// console.log(newImg);
// newImg.classList.add('item-img');
// list.appendChild(newImg);
// //list.insertBefore(newImg);
// const ner = document.querySelector('.item');


//const listEl = document.querySelectorAll('li');
// const listEl = document.querySelector('li');
// console.log(listEl);
// console.log(document.head);

// const itemEl = document.querySelectorAll(".item");
// const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);
// const sumCategories = itemEl.length;
// const resultTask1 = `В списке ${sumCategories} категории.`;
// console.log(resultTask1);
// const titleCategoriesEl = categoriesEl.childNodes;
// console.log(titleCategoriesEl);
// const cjt = categoriesEl.querySelector('h2').textContent
// console.log(cjt);

const newList = document.createElement('article');
newList.classList.add('article-hero');


const titleEl = document.createElement('h1');
titleEl.classList.add('title-hero');
titleEl.textContent = 'Hello i am a Tittle';

const text = document.createElement('p');
text.classList.add('paragraph');
text.textContent = 'Hello I am a text. a lot of text';

newList.append(titleEl, text);
const bodyEl = document.querySelector('body');
console.log(bodyEl)
bodyEl.append(newList);











// Задание 1
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// console.log('TASK1')
// const arrCategEl = document.querySelectorAll('.item');
// const sumcateg = arrCategEl.length;
// const titleCategorieEl = index => arrCategEl[index].firstElementChild.textContent; 
// const itemCategorieEl = index => console.log(arrCategEl[index].querySelectorAll('li').length); 


// const printoutSum = sumcat => console.log(`В списке ${sumcat} категории.`);
// printoutSum(sumcateg);
// arrCategEl.forEach(element => 
//      console.log(`Категория: ${element.firstElementChild.textContent}`+ `\n` +
//      `Количество элементов: ${element.querySelectorAll('li').length}` )
// );



// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

//  ============================================================================
//  ============================================================================
//  ============================================================================

// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];




// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// const x = document.querySelector('.ggg');
// const body = document.querySelector('body');
// body.style.backgroundColor = 'green';
// body.style.paddingLeft = 50 + 'px';
// console.log(x);
// x.style.fontSize = 50 + 'px';
// x.style.width = 400 + 'px';
// x.style.marginTop = 400 + 'px';
// x.style.backgroundColor = 'tomato';
// const fun = (event) => {
//     console.log(event);
//     x.textContent = `
// clientX: ${event.clientX}/   
// clientY: ${event.clientY}/   
// layerX: ${event.layerX}/          
// layerY: ${event.layerY}/         
// movementX: ${event.movementX} 
// movementY: ${event.movementY}/
// offsetX: ${event.offsetX}/     
// offsetY: ${event.offsetY}/     
// pageX: ${event.pageX}/                     
// pageY: ${event.pageY}/                            
// screenX: ${event.screenX}/     
// screenY: ${event.screenY}`;
// };
// x.addEventListener('mousemove', fun);
// window.addEventListener('mousemove', fun);
