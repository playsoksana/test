// let radData = 'My NaMe Is MuD';
// let browserType = 'mozilla';
// console.log(radData.toLowerCase());
// console.log(radData.toUpperCase());

// browserType.indexOf("2");
// console.log(browserType.indexOf("m"));
// console.log(browserType.slice(0, 2));
// browserType = browserType.replace("a", "p");
// console.log(browserType);

// var list = document.querySelector('.output ul');
// list.innerHTML = '';
// var greetings = ['С днём рождения!',
//                  'С Рождеством, любовь моя',
//                  'Счастливого Рождества всей твоей семье',
//                  'Ты — та, кто нужен мне на Рождество',
//                  'Поправляйся скорее'];

// for (var i = 0; i < greetings.length; i++) {
//   var input = greetings[i];
//   // Ваше решение должно быть в фигурных скобках
//   // ниже: вы должны что-то добавить
//     if (greetings[i]) {

//         var result = input;
//         var listItem = document.createElement('li');
//         listItem.textContent = result;
//         list.appendChild(listItem);
//     }};
// let num1 = 1;
// let num2 = 5 + 10 * 3;
// console.log(num2);
// let num3 = (num2 % 9) * 2;
// console.log(num3);
// let sum = 5 ** 2;

// console.log(sum);
// sum++;
// console.log(sum);
// let x = 10;
// let y = 5;
// let z = x*=2;
// console.log(z);

// var button = document.querySelector('.btn');

// button.onclick = function() {
//   var name = prompt('What is your name?');
//   alert('Hello ' + name + ', nice to see you!');
// }
// let g = "5";
// g = Number(g);
// console.log(typeof g);
// g = toString(g);
// console.log(typeof g);

// let myArray = [1, 2, 3];
// console.log(typeof myArray);
// myArray[3] = 5;

// console.log(myArray);
// console.log(myArray.length);

// var sequence = [1, 1, 2, 3, 5, 8, 13];
// for (var i = 0; i < sequence.length; i++) {
//   console.log(sequence[i]);
// }
// var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// var myArrays = myData.split(',');
// myArrays;
// myArrays.length;
// myArrays[0]; // первый элемент в массиве
// myArrays[1]; // второй элемент в массиве
// myArrays[myArrays.length - 1];
// console.log(myArrays);
// var myNewString = myArrays.join(', ');
// myNewString;
// console.log(myNewString);
// var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
// console.log(dogNames);
// dogNames = dogNames.toString(); 
// console.log(dogNames);
// console.log(myArrays);
// myArrays.push('Cardiff');
// console.log(myArrays.length);
// myArrays.pop();
// console.log(myArrays.length);
// var list = document.querySelector('.output ul');
// // var totalBox = document.querySelector('.output p');
// var total = 0;

// let totalBox = "'Underpants:6.99' 'Socks:5.99' 'T-shirt:14.99' 'Trousers:31.99' 'Shoes:23.99'";

// console.log(totalBox);           
// let products = totalBox.split(" ");




// for (let i = 0; i < products.length; i += 1) {
//     // number 2
//   // number 3
 
//     let price = Number.parseFloat(products[i].slice(products[i].indexOf(":") + 1));
    
//     let nameProducts = products[i].slice(1, (products[i].indexOf(":")));
  
//   // number 4

//   // number 5
//     total += price;


//    let currentItemName = nameProducts + "-$" + price;
//     console.log(currentItemName);
// };
// console.log(total.toFixed(2));
