function FishTank(input) {
    let lengtth = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;
    
    let tankSpace = lengtth * width * hight;
    let spaceLiters = tankSpace / 1000;
    let necessaryLit = spaceLiters * (1 - percentTaken);
    console.log(necessaryLit);
}

FishTank(["85", "75", "47", "17"])