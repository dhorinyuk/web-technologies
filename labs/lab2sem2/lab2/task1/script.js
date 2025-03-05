function findMaxMin(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min];
}
let numbers = [12, 5, 8, 22, 1, -3];
let [max, min] = findMaxMin(numbers);
document.getElementById("maxMinResult").textContent = `Максимум: ${max}, Мінімум: ${min}`;

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
}

let car1 = new Car("Toyota", 180);
let car2 = new Car("Honda", 200);

let carComparisonMessage = "";
if (car1.speed > car2.speed) {
    carComparisonMessage = "Toyota швидший за Honda";
} else if (car1.speed < car2.speed) {
    carComparisonMessage = "Honda швидший за Toyota";
} else {
    carComparisonMessage = "Обидва автомобілі мають однакову швидкість";
}

document.getElementById("carComparisonResult").textContent = carComparisonMessage;
