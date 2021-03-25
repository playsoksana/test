// let howManyTimes = 10;

// let drawCats = function (howManyTimes) {
//  for (var i = 0; i < howManyTimes; i++) {
//  console.log(i + " =^.^=");
//  }
// };
// drawCats(howManyTimes);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//  for (var i = 0; i < howManyTimes; i++) {
//  console.log(i + " " + whatToDraw);
//  }
// };

// printMultipleTimes(5, " =^.^=");


// var ourFirstFunction = function () {
//  console.log("Привет, мир!");
// };

// ourFirstFunction();


// var sayHelloTo = function (name) {
//  console.log("Привет, " + name + "!");
// };

// sayHelloTo("nic");

// var drawCats = function (howManyTimes) {
//  for (var i = 0; i < howManyTimes; i++) {
//  console.log(i + " =^.^=");
//  }
// };

// drawCats(5);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//  for (var i = 0; i < howManyTimes; i++) {
//  console.log(i + " " + whatToDraw);
//  }
// };

// printMultipleTimes(5, " ***++///");

// var double = function (number) {
// return number * 2;
// };

// console.log(double(5) + double(6));
// console.log(double(double(3)));
// var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
// var pickRandomWord = function (words) {
//  return words[Math.floor(Math.random() * words.length)];
// };

// console.log(pickRandomWord(randomWords));

// var generateRandomInsult = function () {
//  var randomBodyParts = ["глаз", "нос", "череп"];
//  var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//  var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " kak " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
// return randomString;
//  };
// generateRandomInsult();
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
//    console.log(generateRandomInsult());


//    var fifthLetter = function (name) {
// if (name.length < 5) {
// return;
//  }
//  return "Пятая буква вашего имени: " + name[4] + ".";
// };

// console.log(fifthLetter("Николай"));

// var medalForScore = function (score) {
//  if (score < 3) {
// return "Бронзовая";
//  }
// if (score < 7) {
//  return "Серебряная";
//  }
// return "Золотая";
// };

// console.log(medalForScore(8));

// let add = function (a, b) {
//     let f = a * b;
//     return f;
// };

// console.log(add(763, 9824));

// let multiply = function (f, s) {
//     let d = f + s;
//     return d;
// };
// console.log(multiply(add(763, 9824), 777));
// let p;
// let o;

// for (let k = 0; k <= aa.length; k++) {
//     p[k] === o[k];
// }


// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// let shoping = false;
// let getTom;
// if (shoping ===1) {
//   getTom = 10;
// }
// else {
//   getTom = 5;
// }
// console.log(getTom);

// const filter = function (array, callback) {
//     const newArr = [];
//     for (const arr of array) {
//         if (callback(arr)) {
//             newArr.push(arr);
//         }
//     };
//     return newArr;
// };
// const min = function (value) {
//     return value >= 99;
// }
// const max = function (value) {
//     return value <= 3;
// }
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 100], min));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 100], max));
//const bookShelf = {
  // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
  
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
  
//   removeBook(bookName) {
//   for (let i = 0; i < books.length; i += 1) {
// if (books[i] === bookName) {
// books.splice(i, 1);
//   return `Удаляем книгу ${bookName}`
// };
//   }
//   },
// updateBook(oldName, newName) {
//   for (let i = 0; i < books.length; i += 1) {
// if (books[i] === oldName) {
// books.splice(i, 1, newName);
//     return `Обновляем книгу ${oldName} на ${newName}`;
// };
  
//   };

//   },
//   // Пиши код выше этой строки
// };

// console.log(bookShelf.addBook('Мгла'));
// console.log(bookShelf.removeBook('Красный закат'));

// функция принимает любое имя и подарок 

// const filter = (a, callback) => {
//   const newArr = [];
//   for (const el of a) {
//     if (callback(el)) {
//       newArr.push(el);
//       }
//    };

//   return newArr;
// };
// ;

// const second = (array) => array > 50;

// const three = (x) => x === 99;

// console.log(filter([1, 2, 3, 4, 5, 6, 55, 88, 99, 100, 101], second));
// console.log(filter([1, 2, 3, 4, 5, 6, 55, 88, 99, 100, 101], three));

// const greet = function () {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
// console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"

//Оbject cant
// const cant = {
//   items: [],
//   getItems() { },
//   add(product) {
//     for (const item of this.items) {
//       if (item.productName === product.productName) {
//         item.quantity += 1;
//         return;
//       }
//     };
//     const newProduct = { ...product, quantity: 1 };
//        this.items.push(newProduct);
//    },
//   remove(prodName) {
//     const { items } = this;
      
//     for (let i = 0; i < items.length; i += 1) {
//       if (items[i].productName === prodName) {
//         items.splice(i, 1);
// }
//     }

//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() { },
//   increaseQuantity(prodName) {
//     for (let i = 0; i < this.items.length; i += 1){
//       if (this.items[i].productName === prodName) {
//         this.items[i].quantity += 1;
//         return;
//       };

//     }


//   },
//   decreaseQuantity(prodName) {
//      for (let i = 0; i < this.items.length; i += 1){
//        if (this.items[i].productName === prodName) {
//         if ( this.items[i].quantity > 1 ) {
//         this.items[i].quantity -= 1;
//           return;
//          }
//          this.items[i].splice(i, 1);
//       };

//     }
//   },
// };

// console.log(cant.items, 'PRINT OBJECT');
// cant.add({ productName: "apple", price: "50" });
// cant.add({ productName: "lemon", price: "70" });
// cant.add({ productName: "cherry", price: "100" });
// cant.add({ productName: "apple", price: "50" });
// cant.add({ productName: "lemon", price: "70" });
// cant.remove("cherry");
// cant.increaseQuantity("cherry");
// cant.increaseQuantity("lemon");
// cant.remove("cherry");


// Setup


// Only change code below this line
// function updateRecords(object, id, prop, value) {

//     if(object.hasOwnProperty(id)&&prop!=="tracks"){

//       if(value){

//         object[id][prop] = value;

//       }else{

//        delete object[id][prop];

//       }

//    }else if(object.hasOwnProperty(id)&&prop==="tracks"){

//      if(value){

//       if(object[id].hasOwnProperty("tracks")){

//         object[id][prop].push(value);

//        }else{

//         object[id][prop] = [];

//         object[id][prop].push(value);

//       }  

//     }else{

//       if(object[id].hasOwnProperty("tracks")){

//        delete object[id][prop];

//       }

//     }

//    }

//    return object;

//  }

//updateRecords(collection, 5439, 'tracks', [1984]);
//console.log(collection[5439]);
// updateRecords(collection, 5439, 'artist', 'ABBA')
// console.log(collection);
// var collection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(object, id, prop, value) {
 
//   if (prop !== 'tracks' && value !== "") {
//     object[id][prop] = value;
//   }

//   else if (prop === "tracks" && !object[id].hasOwnProperty('tracks')) {
//     object[id].tracks = [];
//     object[id][prop].push(value);
//   }
//     else if (prop === "tracks" && value !== '') {
   
//     object[id][prop].push(value);
//   }
 
//   else if (value === "") {
//     delete object[id][prop];
//    };
//   return object;
// }

// console.log('artistдолжно быть строкойABBA');
// console.log(updateRecords(collection, 5439, "artist", "ABBA"));
// console.log('tracksдолжны иметь строку в Take a Chance on Me в качестве последнего элемента');
// console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me"));
// console.log('artistне должны быть установлены');
// console.log(updateRecords(collection, 2548, "artist", ""));
// console.log('tracksдолжны иметь строку в Addicted to Loveкачестве последнего элемента');
// console.log(updateRecords(collection, 1245, "tracks", "Addicted to Love"));
// console.log('tracksстрока должна быть 1999первым элементом.');
// console.log(updateRecords(collection, 2468, "tracks", "Free"));
// console.log('tracksне должны быть установлены');
// console.log(updateRecords(collection, 2548, "tracks", ""));
// console.log('albumTitleдолжно быть строкойRiptide');
// console.log(updateRecords(collection, 1245, "albumTitle", "Riptide"));


// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],


//   subscribe(email) {
//     console.log(email);
//     console.log(this);
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },


//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };


// function logAndInvokeAction(email, action) {
//   const newM = email;
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }


// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe(service.mailingList));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe);
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function  eatPizza(pizzaName) {
// return `Едим пиццу ${pizzaName}`;
// });



// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.
// const result = [];
// const arr = [{nameG: 'Arr', ege: 35,}, {ege: 15, nameG: 'gfdf'}];
// const boss = function (arr, callback) {
//   for (const el of arr) {
//     if (callback(el)) {
//       result.push(el.ege)}
//   }
//   return result;
// }


// const minion = function (element) {

//   return element.ege > 20;
// }

// console.log(boss(arr, minion));

// const Manager = function (name = 'manager', sales = 0) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   };
// };

// const mango = new Manager ('Mango');
// const poly = new Manager ('poly');

// poly.sell('TV')
// console.log(poly.sell('TV'));
// console.log();
// console.log();




















// const mango = new Manager('Mango', 5);
// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = new Manager('Poly', 10);
// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12
// const allGust = [];


// const Guest = function (name, room) {
  
//   this.name = name;
//   this.room = room;


//   allGust.push(this);

// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const pasha = new Guest ('Pasha mou', 557);
// const pash = new Guest ('Pash mou', 558);
// const pa = new Guest ('Pa', 550);
// console.log(allGust)

// pash.showGuestInfo();

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   console.log(this);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');
// poly.gainXp(224);
// const coco = new Hero('Coco', 1250);
// coco.gainXp(224);

// console.log(poly, 'Создан через конструктор воин + добавлено ХР'); 
// console.log(coco, 'Создан через конструктор Негой + добавлено ХР');



// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// Car.prototype.getPrice = function () {
// return this.price;
// };
// Car.prototype.changePrice = function(newPrice) {
// return this.price = newPrice;

// };
// const mers = new Car ({brand:'mers', model: '006', price: 2000});
// console.log(mers);

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
  // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return Зелье ${potionName} уже есть в инвентаре!;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return Зелья ${potionName} нет в инвентаре!;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//    for (const potion of potions) {
// if (potion.name === oldName) {
//   potion.name = newName;

//    }

//     if (potionIndex === -1) {
//       return Зелья ${oldName} нет в инвентаре!;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };


// const array1 = [2000, 2, 8, 50];//первая цифра аккумулятор, остальные карент валью 
// const reducer = (accumulator, currentValue, ind) => {
// console.log('accumulator', accumulator);
// console.log('currentValue', currentValue);
// console.log(ind);
//  return accumulator + currentValue
// } ;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// expected output: 10

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   move() {
//     console.log(`I, ${this.name}, am moving!`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     // Вызвать конструктор Animal с аргументом name
//     super(name);
//     this.breed = breed;
//   }

//   bark() {
//     console.log('woof!');
//   }

//   moveAndMakeSound() {
//     super.move();
//     this.bark();
//   }
// }

// const dog = new Dog('Mango', 'shepherd');

// dog.move(); // I, Mango, am moving!
// dog.bark(); // woof!
// dog.moveAndMakeSound(); // I, Mango, am moving! woof!

// class StringBuilder {
//   #value;
//   constructor (baseValue) {
//   this.#value = baseValue;
//   };
//   getValue () {
//   return this.#value;
// };
//   padEnd (str) {
//   this.#value += str;
// };
//   padStart(str) {
//   this.#value = str + this.#value;
// };
//   padBoth (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='