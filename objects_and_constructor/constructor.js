
//-----------new keyword is used for calling the constructor--------------

function createEmployeeObject(firstName,lastName,gender,designation){
    //var newObject={}; this line will be called automatically by constructor as var this i.e. an object is created automatically by 'this' keyword
    /*newObject.firstName=firstName;*/ this.firstName=firstName;
    /*newObject.lastName=lastName;*/  this.lastName=lastName;
    /*newObject.gender=gender; */  this.gender=gender;
    /*newObject.designation=designation; */ this.designation=designation;
    // return newObject;
}

var emp3 = new createEmployeeObject("Jim","Halpart","male","HOD");
console.log(emp3);