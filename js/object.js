let car1 = {
    color: "red",
    spiden: "250",
    cont: 500

}

let car2 = {
    color:"green",
    size: 250
}

car1.color = car2.color;

console.log(typeof car1);
console.log(car1.color);

console.log(car1.color);

if (car1.cont < 600) {
    console.log("min-cont")
}
else if (car1.cont < 200) {
    console.log("cont - 200")
}

let cont = car1.cont == 500 ? "true" : "false"
console.log(cont);
