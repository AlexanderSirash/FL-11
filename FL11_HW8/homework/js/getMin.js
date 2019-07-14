function getMin(...arg) {
    let min = arg[0];

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] < min) {
            min = arg[i];
        }
    }

    return min;
}

getMin(3, 0, -3);
