function modifier(strings, ...values) {
    const m = strings.reduce((prev, curr)=>{
         return prev + curr + (values.length ? "Mr. " + values.shift() : "")
    },"")
    return m;
}

var player1 = 'Sachin Tendulkar';
var player2 = 'Virat Kohli';
var player3 = 'MS Dhoni';

console.log(modifier`We have three great players: ${player1}, ${player2}, and ${player3}.`);