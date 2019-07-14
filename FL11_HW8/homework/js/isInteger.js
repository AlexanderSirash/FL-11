function isInteger(num) {
    const number = num + '';

    if (number.includes('.')) {
        return +number.split('.')[1] === 0;
    }

    return true;
}

isInteger(5);
