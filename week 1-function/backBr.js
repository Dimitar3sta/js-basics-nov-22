function demo(input) {
    let name = input[0];
    let age = Number(input[1]);
    let city = input[2];

    console.log(`Hi, i am ${name}, I am ${age}, year old  and i am from ${city}.` )
}

demo(["Dimitar", 30, "Plovdiv"])
