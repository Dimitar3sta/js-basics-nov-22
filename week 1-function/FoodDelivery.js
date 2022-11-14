function FoodDelivery(input) {
    let chikenMenu = Number(input[0]) * 10.35;
    let fishMenu = Number(input[1]) * 12.40;
    let veganMenu = Number(input[2]) * 8.15;

    let menuPrice = chikenMenu + fishMenu + veganMenu;

    let dessertPrice = menuPrice * 0.20;
    let totalPrice = menuPrice + dessertPrice + 2.50;

    console.log(totalPrice);
}

FoodDelivery(["2", "4", "3"]);