console.log("This call from JS File");
var i = 1;
i = "test";

let j = 2;
const k = 3;

function plus(a,b) {
    console.log(a+b);
}
const result = plus(1,2);

const multip = (a,b) => {return a*b}

console.log(i,j,k,plus(1,2),multip(2,2));
