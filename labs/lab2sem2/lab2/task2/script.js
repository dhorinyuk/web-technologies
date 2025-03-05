// Функція для перевірки, чи число знаходиться в діапазоні
function isNumberInRange(num, min, max) {
    // Перевіряємо, чи число в межах діапазону
    if (num >= min && num <= max) {
        return true;  // Число в діапазоні
    } else {
        return false; // Число не в діапазоні
    }
}

// Тестування функції для числа 5 в діапазоні від 1 до 10
let number = 5;
let min = 1;
let max = 10;
let inRange = isNumberInRange(number, min, max);
document.getElementById("rangeResult").textContent = `Число ${number} ${inRange ? 'знаходиться' : 'не знаходиться'} в діапазоні від ${min} до ${max}.`;

// Використання логічного оператора NOT для зміни стану змінної
let isActive = true;
isActive = !isActive;  // Зміна стану змінної
document.getElementById("notOperatorResult").textContent = `Стан змінної після використання NOT: ${isActive}`;
