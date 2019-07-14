function reverseNumber(number) {
    const sign = Math.sign(number);
    let x = 0;

    number = Math.abs(number);

    while (number > 0) {
        x = x * 10 + number % 10;
        number = Math.floor(number / 10);
    }

    return sign * x;
}

reverseNumber(-456);
