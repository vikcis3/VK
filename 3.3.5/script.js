let podminka = !false;

podminka = true && true;

podminka = false || true;

console.log(podminka)

// Podmínka přes if

let number = 10;
let message;

if (number > 0) {
    message = "Kladné číslo"
} else {
    message = "Není kladné";
}

console.log(message);

// Druhé řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "Kladné číslo" : "Není kladné";

console.log(message2)


let number3 = 20;
let message3 = (number3 >= 18) ? "Už můžeš pít!" : "Ještě pít nemůžeš.";
console.log(message3)