// examples:
// create a object and pass two parameter onit:
// var rect = {
//             perimeter: (x,y) => (2*(x+y)),
//             area: (x,y) => (x*y)
// };

// import node_modules which we are created:
// import rectangle node_modules:

var rect = require('./rectangle');

// create a new function too print the values:
function solveRect(l,b){
    console.log("Solving the rectangle with l =" +l + "and b =" +b);

    if(l <= 0 || b<= 0)
    {
        console.log("Rectangle dimension should be greater than zero: l =" +l + "and b=" +b);
    }
    else{
        console.log("The area of the ractangle is: " +rect.area(l,b));
        console.log("The perimeter of the rectangle is: "+rect.perimeter(l,b));
    }
}

solveRect(2,5);
solveRect(0,1);
solveRect(-3,3);
solveRect(4,-1);