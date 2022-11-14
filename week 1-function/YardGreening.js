function getYardPrice(input) {
    const squareMeterPrice = 7.61;
    const percentDiscount = 0.18;

    let totalSquareMeterPrice = Number(input[0]) *  squareMeterPrice;
    let discountYardPrice = percentDiscount * totalSquareMeterPrice;
    let totalPrice = totalSquareMeterPrice - discountYardPrice;
    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discountYardPrice} lv.`);
}
getYardPrice([550]); 