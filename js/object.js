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

// Хранение информации о фильмах
let movies = {
"В поисках Немо": {
releaseDate: 2003,
duration: 100,
actors: ["Альберт Брукс", "Эллен Дедженерес",
"Александр Гоулд"],
format: "DVD"
},
"Звездные войны: Эпизод VI — Возвращение джедая": {
releaseDate: 1983,
duration: 134,
actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
format: "DVD"
},
"Гарри Поттер и Кубок огня": {
releaseDate: 2005,
duration: 157,
actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
format: "Blu-ray"
}
};

console.log(movies["В поисках Немо"]);

console.log(movies["В поисках Немо"].format);




let cars = {
releaseDate: 2006,
duration: 117,
actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
format: "Blu-ray"
};

movies["Тачки"] = cars;

console.log(Object.keys(movies));

// my friends dz
let myFriend = {
    "masha": {
        scores: 0
    },
    "pasha": {
        scores: 0
    }
};


myFriend.masha += 3;
myFriend.pasha += 5;

console.log(myFriend);

var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};

console.log(myCrazyObject["some array"][2]["number"]);


