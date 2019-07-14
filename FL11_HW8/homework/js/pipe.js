function addOne(x) {
    return x + 1;
}

function pipe(num, ...fns) {
    let calc = num;

    fns.forEach(fn => {
        calc = fn(calc);
    });

    return calc;
}

pipe(1, addOne, addOne);
