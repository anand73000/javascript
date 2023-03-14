document.write("hello this is JS");

console.log("this is JS console");

document.getElementById('t').innerHTML = "hello this is <u>heading 2 </u>";

/*
Variable/Identifire : to store values

1. var (defalut/globle)
2. let (scope related)
3. const

var/let/const = values ;

Rules :

1. Var name can not start with a number
2. Variable name cant be a keywords
*/

document.write("<br>");

var switch1 = 35; //declaration
var switch1 = 45; // Re - declaration (ALLOWED)
switch1 = 55; // Re - assignment (ALLOWED)
document.write(switch1);

document.write("<br><br>");

let flex = "anand"; //declaration
// let flex = "moahn"; --  Re - declaration (NOT ALLOWED)
 flex = "mohan"; //  Re - assignment (ALLOWED)
document.write(flex);

document.write("<br><br>");

const jk = 77;
//const jk = 88; // Re - declaration (NOT ALLOWED)
//jk = 99; // Re - assignment  (NOT ALLOWED)
document.write(jk);

document.write("<br><br>");

xyz = "kjhkxjf";
document.write(xyz);
