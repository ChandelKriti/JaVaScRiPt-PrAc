
//-------------------Callback Function--------------------
/*function taskOne(){
    console.log("task 1");
}

function taskTwo(){
    console.log("task 2");
}

taskOne();
taskTwo(); */


//----------------task 2 will print first--------------
/*function taskOne(){
    console.log("task 1");
}

function taskTwo(){
    console.log("task 2");
}

setTimeout(taskOne,2000);
taskTwo(); */



//--------------------In this way we can delay 1 task to be executed after sometime using setTimeout Callback-------
/*const message = function() {
    console.log("This message is shown after 2 seconds");
}

setTimeout(message,2000);*/



//-------------Precise Way for callback--------------------
/* setTimeout(function() {
    console.log("This message is shown after 2 seconds");
}
,2000); */


//---------------Arrow Function---------------------
/*setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}
,2000); */


//----------------------event listening on browser console---------------
window.onload = function(){
document.querySelector("#callback-btn").addEventListener("click",function (){
    console.log("User has clicked");
})
}