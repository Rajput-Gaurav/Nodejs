
// import node_modules which we are created:
// import rectangle node_modules:

var rect = require('./rectangle');

// create a new function too print the values:
function solveRect(l,b){
    console.log("Solving the rectangle with l =" +l + "and b =" +b);

    rect(l,b, (err,rectangle) => {
        if (err) {
	        console.log("ERROR: ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("This statement after the call to rect()");
}

solveRect(2,5);
solveRect(0,1);
solveRect(-3,3);
solveRect(4,-1);