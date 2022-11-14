function getBasketballExpenses(annualFeeInput) {
    let annualFeeForBasket = Number(annualFeeInput[0]);

    let shoesPricePercent = 40 / 100 * annualFeeForBasket;
    let basketShoesPrice = annualFeeForBasket - shoesPricePercent;
    let outfitPricePercent = 20 / 100 * basketShoesPrice;
    let basketOutfitPrice = basketShoesPrice - outfitPricePercent;
    let basketBallPrice = 1 / 4 * basketOutfitPrice;
    let basketAccessoriesPrice = 1 / 5 * basketBallPrice;

    let totalPriceOfEquipment = annualFeeForBasket + basketShoesPrice + basketOutfitPrice + basketBallPrice + basketAccessoriesPrice; 


    console.log(totalPriceOfEquipment)
}
getBasketballExpenses(["550 "])