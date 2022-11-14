function getConvertRadianToDegrees(input) {
    const degrees = 180/Math.PI

    let convertRadianToDegrees = Number(input[0]) * degrees;

    console.log(convertRadianToDegrees);

}

getConvertRadianToDegrees(["3.1416"])
    
