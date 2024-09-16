let day_integer;

while (true) {
    day_integer = parseInt(prompt("Enter a number representing a day of the week (1-7 inclusive)"));

    if (day_integer >= 1 && day_integer <= 7 && !isNaN(day_integer)) {
        break;
    }

    alert("Invalid input");
}

let day;
switch (day_integer) {
    case 1:
        day = "Sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day = "Saturday";
        break;
}

alert(`Corresponding day name: ${day}`);
