function rekniAhoj() {
    console.log("čus bus");
 
}
 
rekniAhoj();
rekniAhoj();
 
let pozdrav = "Pozdrav!";
 
function ukazPozdrav() {
    console.log(pozdrav)
}
 
function testLocal() {
    let localValue = 123;
    console.log(localValue)
}
 
ukazPozdrav();
testLocal();
 
 
// tady byla chyba
 
if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);
   
//Parametr & Argument
 
function sayHello(name) { // name = parametr
     console.log("Ahoj" + name);
}
 
sayHello("Alice");
 
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
 
addNumber(5,8);


function addNumber1(num3, num4){
    console.log(num3 * num4);
}
 
 addNumber1(1,8);

 function addNumber2(num5, num6){
    console.log(num5 / num6);
}
 
 addNumber2(18,9);

 function addNumber3(num7, num8){
    console.log(num7 - num8);
}
 
 addNumber3(36,6);

function vypisCisla(zacatek, konec){
    for (let i = zacatek; i <= konec; i++) 
        console.log(i);
       
}
vypisCisla(2, 10)