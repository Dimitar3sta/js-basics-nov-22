function getSuppliesForShool(input) {
    const priceOfPencilHolder = 5.80;
    const priceOfMarkerHolder = 7.20;
    const priceOfDeskCleaner = 1.20;
    const percent = 0.25;

    let numberPencilHolder = Number(input[0]);
    let numberMarkerHolder = Number(input[1]);
    let literDeskCleaner = Number(input[2]);
    let percentDiscount = percent;

    let totalPriceOfPencilHolder = numberPencilHolder * priceOfPencilHolder;
    let totalPriceOfMarkerHolder = numberMarkerHolder * priceOfMarkerHolder;
    let totalPriceOfLiterDeskCleaner = literDeskCleaner * priceOfDeskCleaner;
    
    totalPrice = totalPriceOfPencilHolder + totalPriceOfMarkerHolder + totalPriceOfLiterDeskCleaner;
    priceWithDiscount = totalPrice - (totalPrice * percentDiscount);

    console.log(priceWithDiscount);
}
getSuppliesForShool(["2", "3", "4", "25"]);