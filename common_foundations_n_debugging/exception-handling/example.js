'use strict';

/*try {
    add(); //if exception generates here then the lines below it will never be executed
    document.write("Skipped Code"); // it will never execute
}

catch (e) {
    document.write("Function is not defined " + "<br>"); 
}

finally {
  // it will be executed always no matter whether the exception is there or not
  // imp codes are pushed in this block
  document.write("finally get executed always");
}*/


//----------------------------------------------------------------------------------------------

function getRectArea(w, h) {
    if (isNaN(w) || isNaN(h)) {
        throw "Parameter is not a number";
    }
}

try {
    getRectArea(10, 'A');
}

catch (e) {
    document.write(e);
}