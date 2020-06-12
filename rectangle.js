// create a node_modules:
module.exports = (x,y,callback) =>{

    if(x <=0 || y <=0)
    // use setTimeout method and arrow function:
    setTimeout(()=>
                callback(new Error("Rectangle dimension should be greator than zero: l = "+ x + ", and b = " +y),
                null),
                2000);
    else
    // use setTimeout method and arrow function:
        setTimeout(() =>
        callback(null,{
            perimeter: () => (2*(x+y)),
            area:() => (x+y)
        }),
        2000);                
}