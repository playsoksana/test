// general
let cat = {
    legs: 4,
    color: "black",
    nameCat: "Tomas"
}

console.log(cat["nameCat"]);
console.log(cat.nameCat);
console.log(Object.keys(cat));

let dog = {

};
dog["legs"] = 4;
dog["color"] = "white";
dog["nameDog"] = "Flash";
console.log(dog);
console.log(Object.keys(dog));

let mouse = {};
mouse.nameMouse = "Mimi";
mouse.age = 5;
mouse.color = "grey";
console.log(Object.keys(mouse));
console.log(mouse);

// Массивы объектов

let dinosaurs = [
    {
        name: "Тираннозавр рекс",
        period: "Верхнемеловой"
    },
    {
        name: "Стегозавр",
        period: "Верхнеюрский"
    },
    {
        name: "Платеозавр",
        period: "Триасовый"
    }
];

console.log(dinosaurs[1]["name"])
console.log(dinosaurs[0]);
console.log(dinosaurs[2].name);

// Массив друзей

let anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
let dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };
let friends = [anna, dave, kate];

console.log(friends[0]);
console.log(friends[2].name);

let owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
owedMoney["Джимми"] = owedMoney["Джимми"] + 3;
owedMoney["Джимми"] +=   3;
console.log(owedMoney["Джимми"]);


