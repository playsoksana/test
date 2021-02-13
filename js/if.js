// var nameN = "Никolay";
// console.log("Привет, " + nameN);
// if (nameN.length > 6) {
// console.log("Ну и длиннющее же у вас имя!");
// }
//  else {
//  console.log("Имя у вас не из длинных.");
// };

// var lemonChicken = false;
// var beefWithBlackBean = true;
// var sweetAndSourPork = true;
// if (lemonChicken) {
//  console.log("Отлично! Я буду курицу с лимоном!");
// } else if (beefWithBlackBean) {
//  console.log("Заказываю говядину.");
// } else if (sweetAndSourPork) {
//  console.log("Ладно, закажу свинину.");
// } else {
//  console.log("Что ж, остается рис с яйцом.");
// };

// let myName = "Ksuha";
// if (myName === "Ksu") {
//     console.log("Привет мене")
// }
// else {
//     console.log("Привет незнакомец!")
// };

// // Считаем овец с помощью цикла while

// let sheepCounted = 0;
// while (sheepCounted <= 10) {
// console.log("Посчитано овец: " + sheepCounted + "!");
//  sheepCounted++;
// }
// console.log("Хрррррррррр-псссс");


// // for 

// let timesToSayHello = 5;
// for (let i = 0; i < timesToSayHello; i++) {
//  console.log("Привет!" + i);
// }

// let animals = ["лев", "фламинго", "белый медведь", "удав"];
// for (let i = 0; i < animals.length; i++) {
//  console.log("В этом зоопарке есть " + animals[i] + ".");
// }

// let nameV = "Ник";
// for (var i = 0; i < nameV.length; i++) {
//  console.log("В моем имени есть буква " + nameV[i] + ".");
// }

// for (var x = 2; x < 10000; x = x * 2) {
//  console.log(x);
// }

// for (let y = 3; y < 10000; y = 3 * y) {
//     console.log(y);
// }

// let e = 3;
// while (e < 10000) {
//     console.log(e);
//     e = e * 3;
// }

let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let a = 0; a < animals.length; a++) {
    console.log(animals[a] + ' - прекрасное животное');
};

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
 
// . Генератор случайных строк

let randomString = "";
while (randomString.length < 6) {
 randomString += alphabet[Math.floor(Math.random() * alphabet.length)];

}
    
console.log(randomString);
   
let input = "javascript is awesome";
let output = "";
for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    }
    else if (input[i] === "e") {
        output += "3";
    }
     else if (input[i] === "i") {
        output += "1";
    }
        else if (input[i] === "o") {
        output += "0";
    }
     else  {
        output += input[i];
    }
}
console.log(output);



