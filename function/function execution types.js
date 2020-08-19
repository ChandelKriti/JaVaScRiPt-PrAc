
//Normal Function Call
function foo(){
    console.log("Hello");
    //console.log(this); here it will be a global one for normal function call and will be an empty obj for constructor fn
}

foo();

// Function call as property of an object
var obj = {/*"prop":"My object"*/};
obj.foo=function (){
    console.log("Hello");
    //console.log(this);  here this refers to the object itself
}

obj.foo();

// Call as an constructor
new foo();