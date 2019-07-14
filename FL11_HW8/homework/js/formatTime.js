function formatTime(mins) {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    while (mins > 0) {
        mins--;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        if (hours === 24) {
            hours = 0;
            days++;
        }

    }

    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`
}

console.log(formatTime(3601));
