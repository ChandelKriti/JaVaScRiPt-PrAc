function bicycle (cadence, speed, gear, tirePressure){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    this.tirePressure=tirePressure;

    //adding function
    this.inflateTire=function(){
        tirePressure +=3;
        console.log(tirePressure);
    }

}

var bicycle1= new bicycle(10,20,3,20);
console.log(bicycle1);
bicycle1.inflateTire();

//prototype obj
//console.log(bicycle.prototype);