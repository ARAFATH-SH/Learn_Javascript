const mixedArr = [
    "lws",
    undefined,
    "academy",
    null,
    "is",
    40,
    false,
    "awesome",
    NaN,
    0,
];

const trueArray = mixedArr.filter(Boolean);

console.log(trueArray);