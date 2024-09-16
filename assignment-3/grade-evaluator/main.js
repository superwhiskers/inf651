let score;

while (true) {
    score = parseInt(prompt("Enter your score (0 to 100 inclusive)"));

    if (score >= 0 && score <= 100 && !isNaN(score)) {
        break;
    }

    alert("Invalid score");
}

let letter_grade;
if (score >= 90) {
    letter_grade = "A";
} else if (score >= 80) {
    letter_grade = "B";
} else if (score >= 70) {
    letter_grade = "C";
} else if (score >= 60) {
    letter_grade = "D";
} else {
    letter_grade = "F";
}

alert(`Letter grade: ${letter_grade}`);
