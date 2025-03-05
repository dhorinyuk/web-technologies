function getGradeInWords(grade) {
    if (grade >= 90) {
        return 'Відмінно';
    } else if (grade >= 75) {
        return 'Добре';
    } else if (grade >= 50) {
        return 'Задовільно';
    } else {
        return 'Незадовільно';
    }
}
let studentGrade = 85;
let gradeInWords = getGradeInWords(studentGrade);
document.getElementById("gradeResult").textContent = `Оцінка: ${gradeInWords}`;

function getSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
        return 'Зима';
    } else if (month >= 3 && month <= 5) {
        return 'Весна';
    } else if (month >= 6 && month <= 8) {
        return 'Літо';
    } else if (month >= 9 && month <= 11) {
        return 'Осінь';
    } else {
        return 'Невірний місяць';  // Для невірних значень
    }
}

let month = 5;
let season = getSeason(month);
document.getElementById("seasonResult").textContent = `Місяць ${month} — це ${season}.`;

let seasonWithTernary = (month === 12 || month === 1 || month === 2) ? 'Зима' :
    (month >= 3 && month <= 5) ? 'Весна' :
        (month >= 6 && month <= 8) ? 'Літо' :
            (month >= 9 && month <= 11) ? 'Осінь' :
                'Невірний місяць';
document.getElementById("seasonResult").textContent += ` (Тернарний оператор: ${seasonWithTernary})`;
