function getRepaintingSum(repaintingMaterialsNumber) {

    const priceProtectingVinyl = 1.50;
    const priceDye = 14.50;
    const priceDiluent = 5.00

    const bonusNumberProtectVinyl = 2;
    const bonusPlasticBag = 0.40;
    const percentOfMaterialsPrice = 30 / 100;

    let numberOfProtectVinyl = Number(repaintingMaterialsNumber[0]);
    let numberOfDie = Number(repaintingMaterialsNumber[1]);
    let numberOfDiluent = Number(repaintingMaterialsNumber[2]);
    let timeOfWorkmanWork = Number(repaintingMaterialsNumber[3]);

    let bonusDyePercent = (10 / 100) * numberOfDie;

    const protectVinylSum = (numberOfProtectVinyl + bonusNumberProtectVinyl) * priceProtectingVinyl;
    const dyeSum = (bonusDyePercent + numberOfDie) * priceDye;
    const diluentSum = numberOfDiluent * priceDiluent;
    
    const finalPriceForMaterials = protectVinylSum + dyeSum + diluentSum + bonusPlasticBag;
    const priceForWorkman = finalPriceForMaterials * percentOfMaterialsPrice;
    const finalCustomerPricer = priceForWorkman * timeOfWorkmanWork;
    
    const finalPriceForWorkman = finalPriceForMaterials + finalCustomerPricer;
    
    console.log(finalPriceForWorkman);
}
getRepaintingSum(["10 ",

"11 ",

"4 ",

"8 "])