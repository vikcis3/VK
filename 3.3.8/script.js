function dejMi3() {
    return 3;
}
 
console.log(dejMi3())
 
//funkce s logem
function nasobic(a,b) {
    console.log(a*b);
}
 
let r = nasobic(5,3)
console.log(r)
 
//funkce s return
 
function nasobic2(a,b) {
    return(a*b);
}
 
let r2 = nasobic2(5,3)
console.log(r2)
 
//return ukončí fuknci
 
function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B"); //toto neprojde
}
 
let konec2 = konec();
console.log(konec())
 
//cviceni
 
function jeSude(cislo) {
    if (cislo % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
 
console.log(jeSude(20));
console.log(jeSude(7));
 