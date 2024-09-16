let password = prompt("Enter a password");
let confirmation;

do {
    confirmation = prompt("Enter the same password again");

    if (confirmation !== password) {
        alert("The passwords do not match. Try again");
    }
} while (confirmation !== password);

alert("Password confirmed");
