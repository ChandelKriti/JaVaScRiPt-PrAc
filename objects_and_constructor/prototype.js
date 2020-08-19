function Employee(name){
 this.name=name;
}
var emp1= new Employee("jim");
console.log(emp1);

Employee.prototype.playPranks = function(){
    console.log("Prank Played");
    return 1;
}

//console.log(Employee.prototype.playPranks());
console.log(emp1.playPranks());

console.log(emp1.__proto__.constructor); // It will tell that for which function object is created 

var b= emp1.__proto__.constructor; // obj of employee fn is created just with the use of prototype of emp1 obj
console.log(b);

//------------it is not recommended to use doondo proto bcoz it can change the function aftrwards also,which can be hazardous 
emp1.__proto__.constructor= function bar() {};

var c= emp1.__proto__.constructor;
console.log(c);
console.log(emp1.__proto__.constructor);

//--------------we have a global function named Object----------------
// so var emp1={}; is equal to var emp1=new Object();
console.log(emp1.__proto__.__proto__ === Object.prototype);
