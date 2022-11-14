function petShop(dogFood,catFood) {
    dogFood = Number(dogFood); 
    let dogFPrice = dogFood * 2.50;
    catFood = Number(catFood); 
    let catFPrice = catFood * 4;
    let finalPrice = dogFPrice + catFPrice;

    console.log(`${finalPrice} Lv.`);
}

petShop(5 , 4);