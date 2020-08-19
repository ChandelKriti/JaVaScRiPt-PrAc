

//--Normal function--
function createdBicycle (cadence,speed,gear){
    var newbicycle={};
    newbicycle.cadence= cadence;
    newbicycle.speed=speed;
    newbicycle.gear=gear;
    return newbicycle;
 
}


//-- constructor function---
function bicycle (cadence,speed,gear){
    //var this={}; done by default
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    //return this; done by default
}



var bicycle1 = createdBicycle(50,20,30); // call normal function

var bicycle2 = new bicycle(50,20,20);  //call constructor function as new is used

console.log(bicycle1);
console.log(bicycle2);


//--------------------

var bicycle3 = new createdBicycle(50,20,30); // it will intitialize normal function as constructor and also adds the var this={} and return this but its jst an extra work by interpreter bcoz another obj has already been initailized and returned before
var bicycle4 = bicycle(50,20,20) // here new is not used so it will not make constructor hence this will be treated as global var and as nothing is returned so fn will return undefined

console.log(bicycle3);
console.log(bicycle4);