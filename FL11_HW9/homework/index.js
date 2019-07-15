function getNumbers(string) {
    const stringArr = string.split('');
    const numbersARr = [];
    stringArr.forEach(e => {
        if (!isNaN(+e)) {
            numbersARr.push(e);
        }
    });
    return numbersARr;
}

getNumbers('n1um3ber95');


function findTypes(...arg) {
    const typesObj = [];

    arg.forEach(e => {
        const type = typeof e;

        if (typesObj[type]) {
            typesObj[type]++;
        } else {
            typesObj[type] = 1;
        }
    });
    return typesObj;
}

findTypes(null, 5, 'hello');

function executeForEach(arr, func) {
    arr.forEach(e => {
        func(e);
    });
}

executeForEach([1, 2, 3], function (el) {
    console.log(el);
});


function mapArray(arr, func) {
    const array = [];
    executeForEach(arr, el => {
        array.push(func(el));
    });
    return array;
}

mapArray([2, 5, 8], function (el) {
    return el + 3;
});

function filterArray(arr, func) {
    const array = [];
    executeForEach(arr, el => {
        if (func(el)) {
            array.push(el);
        }
    });
    return array;
}

filterArray([2, 5, 8], function (el) {
    return el > 3;
});


function showFormattedDate(date) {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `Date: ${monthArr[month]} ${day} ${year}`;
}

showFormattedDate(new Date('2019-01-27T01:10:00'));

function canConvertToDate(string) {
    return !!Date.parse(string);
}

canConvertToDate('2016-13-18T00:00:00');


function daysBetween(dateOne, dateTwo) {
    const msInDay = 86400000;
    if (dateOne > dateTwo) {
        return Math.round((dateOne - dateTwo) / msInDay)
    } else {
        return Math.round((dateTwo - dateOne) / msInDay)
    }
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));


const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(info) {
    let amount = 0;
    filterArray(info, function (el) {
        if (daysBetween(Date.now(), +new Date(el.birthday)) / 365 > 18) {
            amount++;
        }
    });
    return amount;
}

getAmountOfAdultPeople(data);

function keys(obj) {
    const arrayOfKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrayOfKeys.push(key);
        }
    }
    return arrayOfKeys;
}


keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(obj) {
    const arrayOfKeys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrayOfKeys.push(obj[key]);
        }
    }
    return arrayOfKeys;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});
