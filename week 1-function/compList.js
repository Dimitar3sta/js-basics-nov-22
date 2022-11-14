function compList(input) {
    let noPage = Number(input[0]);
    let pageHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = noPage / pageHour;
    let hourPerDay = totalHours / days;

    console.log(hourPerDay);
}

compList(["212", "20", "2"]);