const text = document.querySelector(".article-text");
//console.log(text.textContent);
const article = document.querySelector(".article-title");
console.log(article);
article.textContent = '{EQ';
article.style.color = 'red';
const button = document.querySelector('.btn');
button.style.backgroundColor = 'red';
const list = document.querySelector('.list-item');
console.log(list.classList);
list.classList.remove('three-item')
console.log(list.classList);
list.classList.add('COCONUT', 'new-class');
console.log(list.classList);
const newText = document.querySelector('.text');
newText.classList.toggle("ishidden");
newText.classList.toggle("ishidden");

list.classList.forEach(item => console.log(item));
const picture = document.querySelector('.image');
console.log(picture.attributes);
console.log(picture.attributes);
console.log(picture.hasAttribute("src"))
picture.setAttribute("alt", "la la la");
console.log(picture.getAttribute('alt'));

const saveBtn = document.querySelector('.list-item button[data-action="save"]');
const closeBtn = document.querySelector('.list-item button[data-action="close"]');
const saveBtnAction = saveBtn.dataset.action;
const closeBtnAction = closeBtn.dataset.action;
console.log(saveBtnAction);
console.log(closeBtnAction);

const newTag = document.createElement('h2');
newTag.textContent = 'Тут будет реклама всякой хрени';
const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Egg_upright.jpg');
newImg.setAttribute('alt', 'agg');
newImg.setAttribute('width', 100);
console.log(newImg);
newImg.classList.add('item-img');
list.appendChild(newImg);
//list.insertBefore(newImg);
const ner = document.querySelector('.item');
