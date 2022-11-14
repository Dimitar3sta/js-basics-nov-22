function deposidCal(input) {
    let deposidSum = Number(input[0]);
    let deposidMonth = Number(input[1]);
    let deposidYear = Number(input[2]);

    let Percent = deposidYear / 100;
    
    let Sum = deposidSum + deposidMonth * ((deposidSum * Percent / 12));

    console.log(Sum);
}

deposidCal(["200 ", "3 ", "5.7 "]);