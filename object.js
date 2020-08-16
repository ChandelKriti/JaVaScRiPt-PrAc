//---------------basic obj intro-----------
/*var myObj = {
    "foo":"Value",
    "age": 30,
    "address":{
        "street": "123 JS",
        "city":"JS",
        "pincode": 12345
    }
};

console.log(myObj.foo);
console.log(myObj.address);
console.log(myObj ["age"]);*/

//---------------------function to get obj values (not harcoded)----------------------

function createEmployeeObject(firstName,lastName,gender,designation){
    var newObject={};
    newObject.firstName=firstName;
    newObject.lastName=lastName;
    newObject.gender=gender;
    newObject.designation=designation;
    return newObject;
}

var emp3 = createEmployeeObject("Jim","Halpart","male","HOD");
console.log(emp3);