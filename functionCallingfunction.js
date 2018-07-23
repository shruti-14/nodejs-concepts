
function callingAnotherFunction(func){
    func();
}


//function expression
var a= function(){
    console.log("Function inside function executed");
}

//calling the function expression
callingAnotherFunction(a);