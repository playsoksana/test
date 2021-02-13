// let nameUser = prompt("Как вас зовут?");
// console.log("Привет, " + nameUser);


// var likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//  console.log("Ты классная кошка!");
// } else {
//  console.log("Что ж, не проблема. Все равно ты молодец!");
// }

// alert("JavaScript это здорово!");

// let words = [
//  "программа",
//  "макака",
//  "прекрасный",
//  "оладушек"
// ];

// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }
// // Наконец, создадим переменную remainingLetters, приравняв ее
// // к длине загаданного слова.
// // Каждый раз, когда
// // игрок угадает букву, мы будем декрементировать (то есть уменьшать)
// // значение этой переменной: на 1 для каждого вхождения буквы в слово.
// // 
// let remainingLetters = word.length;

// while (remainingLetters > 0) {
// //  Основной код
// //  Показываем состояние игры
// //  Запрашиваем вариант ответа
// //  Обновляем answerArray и remainingLetters для каждого
// //     вхождения угаданной буквы
//     alert(answerArray.join(" "));
//     let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
// if (guess === null) {
//     // break;
//      alert("Пожалуйста, введите только одну букву.");ісівсяс
// } else if (guess.length !== 1) {
//  alert("Пожалуйста, введите только одну букву.");
// }  else {
// // Обновляем состояние игры
//     for (let j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             remainingLetters--;
//  }
// }
// }
// }





// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);