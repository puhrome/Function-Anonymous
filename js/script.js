/**
 * Anonymous Functions Created by puhrome on 4/29/14.
 */
//Also known as Closures
//code that is run and created at the same time

//can only call this function if we assign it to a variable name
/*function(){
    //code to run
}
//example of how function will work
var functionName = function(){//assign a variable name

}

functionName();

*/

//normally this is how you write a function
function calcArea(width * height){
    //code the function runs
    var area = width * height;
    return area;
}
//how to write it as an anonymous function
var calcArea = function(width * height){//define function first in anonymous function
    var area = width * height;
    return area;

}
//calcArea(20, 30); normal function call
var a = calcArea(20, 30);//anonymous calling, then you can invoke or call function

console.log(a);

//downside to anonymous function is that they have to be declared before they are called
