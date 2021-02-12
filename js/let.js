// let car1 = {
//     color: "red",
//     spiden: "250",
//     cont: 500

// }

// let car2 = {
//     color:"green",
//     size: 250
// }

// car1.color = car2.color;

// console.log(typeof car1);
// console.log(car1.color);

// console.log(car1.color);

// if (car1.cont < 600) {
//     console.log("min-cont")
// }
// else if (car1.cont < 200) {
//     console.log("cont - 200")
// }

// let cont = car1.cont == 500 ? "true" : "false"
// console.log(cont);

let letter = ["a", "b", "s", ["a", 4, 9], 5, 8];
console.log(letter);
console.log(typeof letter);

console.log(letter.length);
console.log(letter[3] [2]);
console.log(letter[letter.length - 1]);
letter.push("bread");
letter.unshift("milk");
console.log(letter);
let animals = [];
animals.push("cat");
animals.push("dog");
animals.push("mouse");
animals.unshift("bird");
// с конца масива уберает 
let firstAnimals = animals.pop();
animals.pop();
// начало масива уберает 
let oneAnimals = animals.shift(); 
oneAnimals = "cow" ;

console.log(animals);

// обединение массивов
let furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
let scalyAnimals = ["Удав", "Годзилла"]; 
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);
console.log(furryAnimals);

let featheredAnimals = ["Ара", "Додо", "Ара"];
let featheredAndFurryAndScalyAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(featheredAndFurryAndScalyAnimals);
console.log(featheredAndFurryAndScalyAnimals.indexOf("Ара"));
console.log(featheredAndFurryAndScalyAnimals[5]);
// масив в строку
let string = featheredAndFurryAndScalyAnimals.join(); 
console.log(string);
// масив в строку + и между ними 
let strings = featheredAndFurryAndScalyAnimals.join(" и ");
console.log(strings);
// Добавление и вычеркивание масива 

// ++++
let landmarks = [];
landmarks.push("my house");
landmarks.push("my road to house");
landmarks.push("Flashing light");
landmarks.push("Leaking hydrant ");
landmarks.push("my friens house");
console.log(landmarks);

//  --- 
landmarks.pop();
landmarks.pop();
landmarks.pop();
landmarks.pop();
console.log(landmarks);

// Math random() and Math.floor()
let arrayMat = ["aa", "bb", "cc", "dd"]
let randomArray = Math.floor(Math.random() * arrayMat.length);

console.log(arrayMat[randomArray]);

// ball of fate

var phrases = ["Звучит неплохо", "Да, это определенно надо сделать",
"Не думаю, что это хорошая идея", "Может, не сегодня?", "Компьютер говорит нет"];

console.log(phrases.length);
let randomphrases = Math.floor(Math.random() * phrases.length);
console.log(phrases[randomArray]);

// Рандом 3 части 
let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючая", "унылая", "дурацкая"];
let randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log("У тебя " + randomBodyPart + " как " + randomAdjective + " " + randomWord);

let ger = ["У тебя", randomBodyPart, "как", randomAdjective, randomWord].join(" ");
console.log(ger);

// шар удачи 
let times = ["Сегодня буду", "Вечером буду", "Завтра буду", "Ночью буду", "Никогда не буду"];
let tasks = ["работать", "учиться", " в кино", "посплю", "есть"];
let howMuch = ["много", "мало", "как всегда", "продуктивно"];

let timesRandom = times[Math.floor(Math.random() * times.length)];
let tasksRandom = tasks[Math.floor(Math.random() * tasks.length)];
let howMuchRandom = howMuch[Math.floor(Math.random() * howMuch.length)];
let all = ["Я", timesRandom, tasksRandom, howMuchRandom].join(" ");
console.log(all);

let numbers = [3, 2, 1];
let nambersJoin = numbers.join(" больше, чем ");
console.log(nambersJoin);