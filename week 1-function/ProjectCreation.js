function projCreation(input) {
    let name = input[0];
    let project = parseInt(Number(input[1]));
    let projectTime = project* 3;
    console.log(`The architect ${name} will need ${projectTime} hours to complete ${project} project/s.`);
} 
projCreation(["George " , "4"]);