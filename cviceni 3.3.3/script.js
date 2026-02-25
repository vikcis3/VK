let totalPrice = 110;

if (totalPrice >= 100) {
    let definitiveprice = totalPrice * 0.7
    console.log("Celková cena je" + definitiveprice + " Kč.");
} else {
    console.log("Utrať ještě" + (100 - totalPrice) + " Kč a získáš 30% slevu!")
}