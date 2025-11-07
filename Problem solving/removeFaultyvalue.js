const obj = {
    a: "lws",
    b: undefined,
    c: "academy",
    d: null,
    e:"is",
    f: 40,
    g: false,
    h: "awesome",
    i: NaN,
    j: 0,
};

const trueArray = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(trueArray(obj));