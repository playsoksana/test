// function disemvowel(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i += 1) {
//       const str1 = str.toLowerCase();
//       if ('a,e,i,o,u'.includes(str1[i])) {
//           continue;
//       }
//       newStr += str[i];
//   }
//   return newStr;
// }
// console.log(disemvowel('This website is for losers LOL'));

// const toJadenCase = function(str) {
// // Разбиваю на массив
// str = str.split(" ");
// const result = [];
// let newStr;

// for (let i = 0; i < str.length; i += 1){
// newStr = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);

// result.push(newStr);
// }

//   return result.join(' ');
  
// };

// var str = "How can mirrors be real if our eyes aren't real";
// console.log(toJadenCase(str))

// function filter_list(l) {
//   const numbers = [];
//   for (const element of l) {
//     if (typeof element !== 'number' && typeof element !== isNaN) {
//       continue;
//     }
//     numbers.push(element);
//   }
//   return numbers;
// }

// console.log(filter_list([1,2,'aasf','1','123',123]));


// function squareDigits(num){
//   num = String(num);
//   num = num.split('');
//   let pow;
//   const arrayNum = [];
//   let result;


//     for (let i = 0; i < num.length; i += 1) {
// pow = Number(num[i]) * Number(num[i]);
// pow = String(pow);

// arrayNum.push(pow);

//      }
//      result = arrayNum.join('');
     
//     //  arrayNum = arrayNum.join('')
// return Number(result);
// }

// console.log(squareDigits(9494));

// function century(year) {
//   let centuryYear;
//   centuryYear = year / 100;
//   return Math.ceil(centuryYear);
// }

// console.log(century(1901))

// function digitize(n) {
//   let newN = String(n);
//    newN = newN.split('');
//    const arrayNum = [];
//    let i;
//    for (i = newN.length - 1; i >= 0; i -= 1) {
//      arrayNum.push(Number(newN[i]));
     
     
//    }
//    return arrayNum;
//  }

//  console.log(digitize(35231));

// function friend(friends){
//   const result = [];
//   for (const friend of friends) {
//     if (friend.length === 4) {
//       result.push(friend);
//     }
//   }
//   return result;
  
// }
// console.log(friend(["Ryan", "Kieran", "Mark"]));

// function findNeedle(haystack) {
//   let indexN;
//   for (let i = 0; i < haystack.length; i+= 1) {
// if (haystack[i] === 'needle') {
// indexN = i;
// console.log(haystack[i]);
// }
//   }
//   return `found the needle at position ${indexN}`;
// }

// console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// function findUniq(arr) {
//   let numArr = arr[0];
//   let newNumber;
//  for (let i = 0; i < arr.length; i +=0 ) {
//    if (numArr !== arr[i]) {
//     newNumber = arr[i];
//     break;
//    }

//  }
//  return newNumber
// }

// console.log(findUniq([ 0, 1, 0 ]));

// function validatePIN(pin) {

// if (pin.length !== 4 && pin.length !== 6){
//   return false;
// }
// for (let i = 0; i < pin.length; i += 1) {
//   if (isNaN(pin[i])) {
//     return false;
//   }
// }
// return true;
// }

// console.log(validatePIN('F234'));
// console.log(validatePIN('.234'));
// console.log(validatePIN('1.234'));
// console.log(validatePIN('098765'));
// console.log(validatePIN('0'));
// console.log(validatePIN('012'));
// console.log(validatePIN('0325'));
// console.log(validatePIN('045558'));
// console.log(validatePIN('07222'));

// function descendingOrder(n){
//   n = n.toString().split('').sort();
//   n = n.reverse();
//   n = n.join('');
//   n = Number(n);


// return n;

//  }
//  console.log(descendingOrder(0));
//  console.log(descendingOrder(123456789));

// function removeSmallest(numbers) {
//   if (numbers.length === 1 || numbers.length === null) {
//     return numbers;
//   }
//   if (Number(numbers)) {
//     return [];
//   }
// let littleNum = Math.min(...numbers);
// let indexLittleNum = numbers.indexOf(littleNum);
// numbers.splice(indexLittleNum, 1);

// return numbers;

// }
// console.log(removeSmallest([5, 4, 3, 2]));
// console.log(removeSmallest([5, 4, 3]));
// console.log(removeSmallest(152));
// console.log(removeSmallest([5]));
// console.log(removeSmallest([128, 31, 33, 31, 4, 60, 304, 244, 71, 141, 221, 231, 346, 59, 304, 29]));
// console.log([128, 31, 33, 31, 4, 60, 304, 244, 71, 141, 221, 231, 346, 59, 304, 29]);

// function nbYear(p0, percent, aug, p) {
//   let sum = p0 * percent / 100 + aug;
//   let years = 0;

//   for (let i = 0; i < p; i += p0 * percent / 100 + aug) {
//   if (p0 < p) {
//     p0  += p0 * percent / 100 + aug;
//     years += 1;
//    }
//   }
  
  
//   return years;
 
// }

// console.log(nbYear(100, 2, 50, 1000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const result = [];
//   for (const product of products) {
//   const arrayProduct = Object.keys(product);
//   if (product[propName]) { const indexKeys = arrayProduct.indexOf(propName);

//     if (indexKeys > -1) {
//     result.push(product[propName]);  
//     };}; };
      
//   return result;
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues('name'))

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  
// getPotions() {
//   const {potions} = this;
// return potions},
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.potions);

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
// const newObject = Object.keys(object);
//   for (const key in newObject) {
//     if (newObject.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// 
// const cart = {
// items: [],
// getItems() {
// return this.items;
// }, 
// add(product) {
//   for (const elementProduct of this.items) {
// if (elementProduct.name === product.name) {
//   elementProduct.quantity += 1;
//   return;
// };

//   };
  
// const newProduct = {
//   ...product,
//   quantity: 1,
// };
// this.items.push(newProduct);
// },
// removePro(productName) {
//   const {items} = this;
//   for (let i = 0; i < items.length; i += 1) {
   
//     if (items[i].name === productName) {
// items.splice(i, 1);
//     };
//   };
// },
// clear() {
// this.items = [];
//   },
// countTotalPrice() {
//   const {items} = this;
//   let total = 0;
// for (const element of items) {
// total += element.price;

// };
// return total;
// },

// };

// cart.add({name: 'apple', price: 50,});
// cart.add({name: 'lemon', price: 90,});
// cart.add({name: 'orange', price: 70,});
// cart.add({name: 'cherry', price: 170,});
// cart.add({name: 'cherry', price: 170,});
// cart.add({name: 'cherry', price: 170,});

// console.log(cart.items);
// //console.log(cart.getItems());
// //console.log(cart.removePro('cherry'));
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {   
//    this.potions.push(potionName);
//    return this.potions;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//     if (this.potions[i].name === potionName) {
//       this.potions.splice(i, 1);
//       return this.potions;
//     }

//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//     if (this.potions[i].name === oldName) {
//     this.potions[i].name = newName;
//       return this.potions;
//     }
    
//     //return `Зелья ${oldName} нет в инвентаре!`;
//     }

//       },
//   // Пиши код выше этой строки
// };

// //console.log(atTheOldToad.removePotion('Дыхание дракона'));
// //console.log( atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
// console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));
// function duplicateCount(text){
//     let newText = text.toLowerCase();
//     const basArray = [];
//     const trash = [];
//     let number = 0;
//         for (const element of newText) {
//             if (basArray.includes(element)) {
                
//                 if(!trash.includes(element)) {
//                     number += 1
//                     trash.push(element);
//                 }
//             };
            
//        basArray.push(element); 
//       };
//     return number 
//   }
//   console.log(duplicateCount("Indivisibility"));
//   console.log(duplicateCount("aabBcde"));

// function isPangram(string){
// const newString = string.toLowerCase();
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// for (const element of alphabet) {
//     if (!newString.includes(element)) {
//         return false;
//     }
// };
// return true;
//   }
//   const string = "This is not a pangram."
//   //const string = "The quick brown fox jumps over the lazy dog."
//   console.log(isPangram(string));

// function XO(str) {
//     const stringToLowerCase = str.toLowerCase();
//     const wordO = 'o';
//     const wordX = 'x';
//     let numO = 0;
//     let numX = 0;
//     for (const element of stringToLowerCase) {
//         if (element === wordO) {
//             numO += 1;
//         }
//         if (element === wordX) {
//             numX += 1;
//         }
        
//     };
//     console.log(numO, numX);
//     return numO === numX;

// }

// console.log(XO('xo'));
// console.log(XO('xxxm'));
// console.log(XO('xxOo'));

// const binaryArrayToNumber = arr => {
//     arr = arr.reverse();
//     let indicator = 0;
//     for (let i = 0; i < arr.length; i += 1 ) {
//         if (arr[i] === 0) {
//             continue;
//         } 

//         indicator += Math.pow(2, i);
//     };
//     return indicator;
//   };
//   console.log(binaryArrayToNumber([1,1,1,1]));

// function oddOrEven(array) {
//     let result = 0;
//      for (let i = 0; i < array.length; i += 1) {
//        result += array[i];
//      };
//     if (result % 2 === 0) {
//       return "even";
//     };
//     return "odd";
//   }

//   console.log(oddOrEven([0]));
//   console.log(oddOrEven([1]));
//   console.log(oddOrEven([1, 4]));
//   console.log(oddOrEven([4, 1]));
//   console.log(oddOrEven([6, 8]));
//   console.log(oddOrEven([4]));

// function iqTest(numbers){
//     const odd = [];
//     const even = [];
//     numbers = numbers.split(' ');
//     for (const element of numbers) {
        
//       if (element%2 === 0) {
//         even.push(element);
//         continue;
//       };
//       odd.push(element);
//     };
//     console.log(even);
//     console.log(odd);
   
//     if (odd.length < even.length ) {
//        return numbers.indexOf(odd[0]) + 1;
//     };
//    return numbers.indexOf(even[0]) + 1;
//   }

//   console.log(iqTest("2 4 7 8 10"));
//  // console.log(iqTest("1 2 2"));

// function queueTime(customers, n) {
//     let calc = 0;
//     let result = 0;
//   for (const element of customers) {
//     calc += element;
//   };
//   result = Math.floor(calc / n);
//   if (result < Math.max(...customers)) {
//       result = Math.max(...customers)
//   };
//   return result;
// }

// console.log(queueTime([], 1));
// console.log(queueTime([1,2,3,4], 1));
// console.log(queueTime([2,2,3,3,4,4], 2));
// console.log(queueTime([22,19,24,36,27,45,8,36,21,18,28,26,14,40,31,24,10,24,27,37], 4));

// function queueTime (customers, n) {
//     const arr = [];
// for (let i = 10; i < customers.length +10; i+=1) {
// //console.log ('итерация №', i, 'елемент ', customers[i]);
// //console.log();
// if (i > n) {
//  //   console.log(i);
//    arr.push(i);
//    console.log( arr);
// }

// };
//return i;

// };
// queueTime([1,2,3,4,5,6,10,11,12], 5);

// function XO(str) {
//         const stringToLowerCase = str.toLowerCase();
//         const wordO = 'o';
//         const wordX = 'x';
//         let numO = 0;
//         let numX = 0;
//         for (const element of stringToLowerCase) {
//             if (element === wordO) {
//                 numO += 1;
//             }
//             if (element === wordX) {
//                 numX += 1;
//             }
            
//         };
//         console.log(numO, numX);
//         return numO === numX;
    
//     }
    
//     console.log(XO('xo'));
//     console.log(XO('xxxm'));
//     console.log(XO('xxOo'));

// function isPangram(string){
//     const newString = string.toLowerCase();
//         const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     for (const element of alphabet) {
//         if (!newString.includes(element)) {
//             return false;
//         }
//     }
//     return true;
//       }
//      // const string = "This is not a pangram."
//       const string = "The quick brown fox jumps over the lazy dog.";
//       console.log(isPangram(string));

// function incrementString (strng) {
//     let newStr;
//     strng = strng.split('');
//     console.log(strng);
//     const num = strng.length - 1;
//      const a = Number.parseInt(strng[num]);
 
//         if (Number.isNaN(strng[num])) {
//          newStr = `${strng}1`;       
//         }
//         else {
//         let num1 = a + 1;
//            console.log(num1);
//          newStr = `${strng}${num1}`
        
//         };
        
//         return newStr;
      
//     }
//     console.log(incrementString("foobar55"));

// const filter = function (array, callback) {
//   const newArrs = [];
// for (const el of array) {
//   if (callback(el)) {
// newArrs.push(el);
//   }
// };

// return newArrs;
// };

// const max = function (y) {
// const result = y > 50;
// return result;
// };

// console.log(filter([1,2,3, 98,99,100], max));

// const makeSheff = function (name) {
//   const makeDish = function (dich) {
//     console.log(`${name} COOkS ${dich}`)
//   };
//   return makeDish;
// }

// const mango = makeSheff('Mango');
// const fifo = makeSheff('FIFO');
// mango('fish');
// mango('bread');
// fifo('meat');
// fifo('sous');


// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },


//   addPotion(potionName) {
//     const {potions} = atTheOldToad
//     potions.push(potionName);
//     return console.log(potions);
//     },



//   removePotion(potionName) {
//     const {potions} = atTheOldToad;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//       }
//     };
//     },


//   updatePotionName(oldName, newName) {
//    },


//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Зелье сtktлы', price: 270 }));
// console.log(atTheOldToad.removePotion('Дыхание дракона'));
// console.log(atTheOldToad.potions);
// console.log();

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, call, back) {
//     let result;
//   for (const pizza of this.pizzas) {
    
//   if (pizza === pizzaName) {
//     result = call(`${pizzaName}`);
//   return result;
//   };
    
//    };
//    result = back(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//     return result;
  
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);



//OBJECT
// const cant = {
//   items: [],
//   getItems() { },

//   //ADD
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

//    //REMOVE
//   remove(prodName) {
//     const { items } = this;
      
//     for (let i = 0; i < items.length; i += 1) {
//       if (items[i].productName === prodName) {
//         items.splice(i, 1);
// }
//     }

//   },

//   //CLEAR 
//   clear() {
//     this.items = [];
//   },

//   //COUNT
//   countTotalPrice() { },

//   //INCREASE
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

// cant.add({ productName: "lemon", price: "70" });

// cant.add({ productName: "apple", price: "50" });
// cant.add({ productName: "apple", price: "50" });

// cant.add({ productName: "cherry", price: "100" });
// cant.add({ productName: "cherry", price: "100" });
// cant.add({ productName: "cherry", price: "100" });
// cant.add({ productName: "cherry", price: "100" });

//  //cant.remove("cherry");
// cant.increaseQuantity("cherry");
// cant.increaseQuantity("lemon");
// cant.increaseQuantity("lemon");
// cant.increaseQuantity("lemon");

// cant.decreaseQuantity("lemon");
// console.table(cant.items);


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;  
// }

//  const messages = orders.map(function(x, y){
  
//   return composeMessage.call(orders[y], y + 1);
  
// });

// console.log(messages);

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   console.log(position, 'это позиция которая приходит от и + 1');
//   console.log('блюдо', this.dish);
//   console.log('мыло', this.email);
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = orders.map(function (order, i){
//   console.log(order, i, 'это обьект массива и номер итерации');
// return composeMessage.call(orders[i], i + 1);
// });
// console.log(messages);

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);

// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
// console.log(pizzaPalaceMessage);
//const burgerShackComposer = composeMessage;
//const burgerShackMessage = burgerShackComposer('Поли');

// console.log('тут начинается объект')
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };
// console.log('тут он заканчивается')

// console.log('тут начинается функция')
// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }
// console.log('тут заканчивается функция')


// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

// Setup
// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta:"Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   }

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");

// const a = [1,2,2,3,4,5,8];
// const b = a.filter((e) => e>3);
// console.log(b);

// const c = a.map(function (e) { return e+4});
// console.log(c);

// function validate(password) {
//     const reg = /[A-Za-z0-9_]/;
//     console.log(reg)
//     const wordLower = [];
//     const wordUpper = [];
//     const number = [];
//     if (password.length > 6) {
//       return `${password} - Expected false`
//     }
//   if (!reg.test(password)) {
//     return `${password} - Expected false`
//   }
//   for (const el of password) {

//     if (Number.parseInt(el)) {
//         number.push(el);
//     }
//     if (el === el.toLowerCase()) {
// wordLower.push(el);
//     }
//     if (el === el.toUpperCase() && !Number.parseInt(el)) {
// wordUpper.push(el);
//     }  
// }


// if (wordUpper.length === 0 || wordLower.length === 0 || number.length === 0) {
//     return `${password} - Expected false`
// }
 
   
//     return password;
//   }
// console.log(validate('!Аdjn345'));


// var capitals = function (word) {
//     const indexWord = [];
// for (let i = 0; i < word.length; i += 1) {
// if (word[i] === word[i].toUpperCase()) {
    
// indexWord.push(word.indexOf(word[i]))
// }
// }
// return indexWord;
// };

// console.log(capitals('CodEWaRs'));

// function order(words){
//     words = words.split(' ');
//     let result;
//     let num = 0;
//     const arrSrring = [];
//     for (let i = 0; i < words.length; i += 1) {
//       for (let j = 0; j < words[i].length; j += 1) {
//         if (Number.parseInt(words[i][j])) {
          
//           arrSrring[Number.parseInt(words[i][j] - 1)] = words[i];
        
          
//         }
        
        
//       }
      
      
//     }
//      result = arrSrring.join(" ");

//     return result;
//   } 

//   console.log(order("is2 Thi1s T4est 3a"))

// const Car = function ({nameV, speed, year, city} = {}) {
// this.nameV = nameV;
// this.speed = speed * 2;
// this.year = year;
// this.city = city;
// this.color = "red";
// return this;
// }

// Car.prototype.chenchName = function(newName)  {
// this.nameV = newName;
// }

// const myCar1 = new Car({
// nameV: "Audy",
// speed: 250,
// year: 2021,
// city: 'New York'}
// );
// console.log(myCar1)

// const myCar2 = new Car({
//   nameV: "Audy",
//   speed: 220,
//   year: 2020,
//   city: 'New York'}
//   );
//   console.log(myCar2)

//   myCar2.chenchName('huna');
//   console.log(myCar2);


// const fun = function (...arr) {

// return Math.min(...arr);
// }

// console.log(fun(1, 2, 3, 4, 5, 10, 11))

// console.log()
// ! ВАЖНАЯ ЗАДАЧА 3 МОДУЛЯ
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// let counter = 0;

// const account = {
//     balance: 0,
//     transactions: [],

//     createTransaction(amount, type) {
//         const id = (counter += 1);

//         const addTransaction = {
//             id,        
//             amount,
//             type,
//         };
//         console.log(addTransaction);

//         return addTransaction;
//     },

//     getBalance() {
//         return this.balance;
//     },

//     deposit(amount) {
//         this.balance += amount;

//         const newTransaction = this.createTransaction(
//             amount,
//             Transaction.DEPOSIT,
//         );

//         this.transactions.push(newTransaction);

//         return `Операция успешна. Баланс пополнен на ${amount}. На Вашем счету ${this.getBalance()}`
    
//     },
    
//     withdraw(amount) {
//         if (amount > this.balance) {
//             return `Недостаточно средств на Вашем счете!`;
//         }

//         this.balance -= amount;

//         const newTransaction = this.createTransaction(
//             amount,
//             Transaction['WITHDRAW'],
//         );

//         this.transactions.push(newTransaction);

//         return `Операция успешна. Было снято ${amount}. На Вашем счету ${this.getBalance()}`;
//     },

//     getTransactionDetails(id) {
//         for (const item of this.transactions) {
//             if (id === item.id) {
//                 return item;
//             }
//         }
//         return 'Не найдено!';
//     },

//     getTransactionTotal(type) {
//         let total = 0;

//         for (const item of this.transactions) {
//             if (type === item.type) {
//                 total += item.amount;
//             }
//         }
//         return `Сумма транзакций ${type} - ${total} `;
//     },
// };
// console.log(account.createTransaction())

// console.log(account.deposit(100));
// console.log(account.deposit(200));
// console.log(account.deposit(300));
// console.log(account.deposit(100));


// !СALLBACK
// const newArr = []
//  const filter = function (arr, callback) {
//      for (const el of arr) {
//         if (callback(el)) {
//             newArr.push(el);
//         }
//      }
    
     
//      return newArr;
//  }

//  const min = function (a) {
//      return a > 5;
//  }


//  console.log(filter([1,2,3,4,550,270,850,129], min))

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 9 },
//   ];
  
// //   function calculateTotalPrice(productName) {
  
   
// //     for (const product of products) {
// //       let total = 0
     
// //       if (product.name === productName) {
// //         // возвращаем сумму в названии переменной
// //         total = product.price * product.quantity
     
        
        
// //       }
    
      
// //       return total;
// //     }
   
// //   }
// //   console.log(calculateTotalPrice('Бластер'));
// //   console.log(calculateTotalPrice('Радар'));
// //   console.log(calculateTotalPrice('Дроид'));



//   function calculateTotalPrice(productName) {
//     let total = 0
   
//     for (const product of products) {
      
     
//       if (product.name === productName) {
//         // возвращаем сумму в названии переменной
//         total = product.price * product.quantity;
//        break;
        
//       }
    
      
     
//     }
//     return total;
   
//   }
//   console.log(calculateTotalPrice('Бластер'));
//   console.log(calculateTotalPrice('Радар'));
//   console.log(calculateTotalPrice('Дроид'));


//   function calculateTotalPrice(productName) {
//     let total = 0
   
//     for (const product of products) {
      
     
//       if (product.name !== productName) {
//         // возвращаем сумму в названии переменной
//         continue;
       
        
//       }
    
//       total = product.price * product.quantity;
     
//     }
//     return total;
   
//   }
//   console.log(calculateTotalPrice('Бластер'));
//   console.log(calculateTotalPrice('Радар'));
//   console.log(calculateTotalPrice('Дроид'));

// const chenge = function () {
// const chengeColor = function (col) {
//   this.color = col;
//   return this.color;
// }
// const sweater = {
//   color: 'green',
  
// }
// console.log(sweater);

// sweater.chenchColSw = chengeColor;
// sweater.chenchColSw('red');
// console.log(sweater);

// }
// chenge();


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];


// // // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// };

// const message = orders.map(function(item, i, arr){
//   return composeMessage.call(item, i+1);
  
// });
// console.log(message);


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];


// // // Пиши код ниже этой строки
// function composeMessage(position) {
// return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// };

// const message = orders.map(function(item, i, arr){
//   return composeMessage.call(item, i+1);
  
// });
// console.log(message);


// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // for (let i = 0; i < orders.length; i += 1) {
 
  
  
// //   messages.push(composeMessage.call(orders[i], c = i + 1));
  
// // }

// const messages = orders.map(function (order, i, orders) {
//   console.log(order);
//   console.log(i);
//   console.log(orders);

   
//     return  composeMessage.call(order, i + 1);
// });

// // Пиши код ниже этой строки
// function composeMessage(position) {

//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }



// console.log(messages);





// ! ============================         ==========================================
// ! ============================         ==========================================
// ! ============================         ==========================================

// ! ============================ 5 MODUL ==========================================
// ! ============================         ==========================================
// ! ============================         ==========================================
// ! ============================         ==========================================

// function StringBuilder (baseValue) {
//   this.value = baseValue;
//   }
  
  
  // StringBuilder.prototype.getValue = function () {
  // return this.value;
  // };
  
  // StringBuilder.prototype.padEnd = function (str){
  // this.value = `${this.value + str}`;
  // }
  
  // StringBuilder.prototype.padStart = function (str) {
  // this.value = `${str + this.value}`;
  // };
  
  
  // StringBuilder.prototype.padBoth = function (str) {
  // this.value = `${str + this.value + str}`;
  // }
  
  // Пиши код выше этой строки
  // const builder = new StringBuilder('.');
  // console.log(builder.getValue()); // '.'
  // builder.padStart('^');
  // console.log(builder.getValue()); // '^.'
  // builder.padEnd('^');
  // console.log(builder.getValue()); // '^.^'
  // builder.padBoth('=');
  // console.log(builder.getValue()); // '=^.^='

  //!CLASS  CLASS  CLASS  CLASS 
//<<<<<<< HEAD
  /*

  class People {                                                              // !ƒ () { [native code] }
  name;
  age; 
  #region; 
  static EAT = true;                                                       // ! static cвойство автоматом попадает в конструктор и не попадает в прототайп 
static bigEge(user1, user2) {                                              // ! єто как свойство самого класса конструктора. имяфункции.имя свойства = значение(олд метод), доступен классу и дочерним классам
=======

class People {                                                              // !ƒ () { [native code] }
  name;
  age; 
  #region; 
  static EAT = true;                                                       // ! static cвойство автоматом попадает в конструктор 
static bigEge(user1, user2) {                                              // ! доступен классу и дочерним классам
>>>>>>> 5923e6a5cb44886d5a03696c6a88a809ee0bc6f4
  if (user1.age < user2.age2) {
    return user1.name;
  }
  return user2.name;
}

  constructor ({name, age, region} = {}) {                                   // !ƒ () { [native code] }
    this.age = age;
    this.name = name;
    this.#region = region;
<<<<<<< //! HEAD
    console.log(this);                                                       // ! Piople {name: "Oksana", ege: 36, #region: "Kherson"}
=======
    console.log(this);                                                       // ! Piople {name: "Oksana", ege: 36, #region: "Kherson"}
>>>>>>> 5923e6a5cb44886d5a03696c6a88a809ee0bc6f4
     }
     get userName () {
      return this.name;
    }
    set userName (newName) {
      this.name = newName;
    }
    
}

  const oksana = new People ({name:'Oksana', age: 36, region: 'Kherson'});   //!    {constructor: ƒ}
  const kolya = new People ({name:'Kolya', age: 9, region: 'Kherson'});   //!    {constructor: ƒ}
  
  
  console.log(People.EAT);                                                  // ! true
 // console.log(oksana.EAT);                                                  // ! undefined
 console.log(People.bigEge(oksana, kolya));                                 // ! Вернет того кто старше 
  console.log(Object.getPrototypeOf(People));
  console.log(Object.getPrototypeOf(oksana) === People.prototype);          // ! true
  console.log(Object.getPrototypeOf(People));
  console.log(oksana.userName);                                             //! операция чтения ГЕТТЕР
  oksana.userName = "Super Oksana"                                         // ! операция записи СЕТТЕР (изменение значения)

  console.log(oksana);

   class Boss extends People {
     constructor({config, level}){
      super(config);                 //  super(name);  //! surer вызывает конструктор объекта в прототип 
                                     //  super(ege);       // ! до this 
                                     //  super(region);
       this.level = level;
     }
   }

   const bor = new Boss ({name: 'Boris', age: 45, region: "Kherson", level: '1'});
   console.log(bor);
<<<<<<< HEAD
*/


class Hero {
    static strongest (subject1, subject2) {
if (subject1.attack > subject2.attack) {
    return `У ${subject1.name} атака выше чем у ${subject2.attack}  на ${subject1.attack - subject2.attack} единиц`;
}
return `У ${subject2.name} атака выше чем у ${subject1.name} на ${subject2.attack - subject1.attack} единиц`
    }
constructor ({name, attack, defense, health, speed}={}) {  // !ƒ () { [native code] }
this.name = name;
this.attack = attack;
this.defense = defense;
this.health = health;
this.speed = speed;
}  

get _attack() {
    return this._attack;
}
set _attack(newAttack) {
    this.attack = newAttack;
}

get _defense() {
    return this._defense;
}
set _defense(newDefense) {
    this.attack = newDefense;
}

get _health() {
    return this._health;
}
set _health(newHealth) {
    this.health = newHealth;
}

get _speed() {
    return this._speed;
}
set _speed(newSpeed) {
    this.speed = newSpeed;
}
impairment (sumImpairment) {
    this.health -= sumImpairment;
}


}


class Castle extends Hero {    // !ЗАМОК

constructor (config, resurrect = true) {
    super(config);
    this.resurrect = resurrect ;                        // !свойство воскрешение 
}

}

class Stronghold extends Hero {   // !ОПЛОТ
   constructor (config, resurrect = true) {
       super(config);
       this.resurrect = resurrect ;                     // !свойство воскрешение 
   }
}

const angelus = new Castle ({name:'Angelus', attack: 20, defense: 20, health: 200, speed: 12});
const dragon = new Stronghold ({name:'Green Dragon', attack: 25, defense: 25, health: 180, speed: 13});
console.log(angelus.impairment(50))

console.log(angelus);
console.log(dragon);
console.log(Hero.strongest(angelus, dragon));










   
=======
>>>>>>> 5923e6a5cb44886d5a03696c6a88a809ee0bc6f4
