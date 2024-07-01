console.log("This call from JS File");
var i = 1;
i = "test";

let j = 2;
const k = 3;

function plus(a,b) {
    const eInput1 = document.getElementById("input1").value;
    const eInput2 = document.getElementById("input2").value;
    var a = parseInt(eInput1);
    var b = parseInt(eInput2);
    const output = a + b;
    document.getElementById('output').value = output;
    
}

const multip = (a,b) => {return a*b}
console.log(i,j,k,plus(1,2),multip(2,2));
