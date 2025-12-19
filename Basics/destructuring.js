const user = {
    id: 146,
    name: "Arafath",
    age:35,
    eduction: {
        degree: "B.Tech",
    }
};

// const {name} = user;
// const {name: userName} = user;

const {eduction : {degree : eduDegree} = {} } = user;

var numbers = [1, 2, 3,[10, 100, 500], 4, 5];

// var [,a, ,b]= numbers;

// var[,a, ,[, ,b]] = numbers;

var a = 1;
var b = 2;

[a,b] = [b,a];

console.log(a,b); // B.Tech