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


var ourFirstFunction = function () {
 console.log("Привет, мир!");
};

ourFirstFunction();


var sayHelloTo = function (name) {
 console.log("Привет, " + name + "!");
};

sayHelloTo("nic");

var drawCats = function (howManyTimes) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " =^.^=");
 }
};

drawCats(5);

var printMultipleTimes = function (howManyTimes, whatToDraw) {
 for (var i = 0; i < howManyTimes; i++) {
 console.log(i + " " + whatToDraw);
 }
};

printMultipleTimes(5, " ***++///");

var double = function (number) {
return number * 2;
};

console.log(double(5) + double(6));
console.log(double(double(3)));
var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];
var pickRandomWord = function (words) {
 return words[Math.floor(Math.random() * words.length)];
};

console.log(pickRandomWord(randomWords));

var generateRandomInsult = function () {
 var randomBodyParts = ["глаз", "нос", "череп"];
 var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
 var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " kak " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
return randomString;
 };
generateRandomInsult();
console.log(generateRandomInsult());
console.log(generateRandomInsult());
   console.log(generateRandomInsult());


   var fifthLetter = function (name) {
if (name.length < 5) {
return;
 }
 return "Пятая буква вашего имени: " + name[4] + ".";
};

console.log(fifthLetter("Николай"));

var medalForScore = function (score) {
 if (score < 3) {
return "Бронзовая";
 }
if (score < 7) {
 return "Серебряная";
 }
return "Золотая";
};

console.log(medalForScore(8));

let add = function (a, b) {
    let f = a * b;
    return f;
};

console.log(add(763, 9824));

let multiply = function (f, s) {
    let d = f + s;
    return d;
};
console.log(multiply(add(763, 9824), 777));
let p;
let o;

for (let k = 0; k <= aa.length; k++) {
    p[k] === o[k];
}


console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

