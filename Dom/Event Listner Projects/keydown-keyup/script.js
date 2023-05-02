const container = document.getElementById("container");
const display = document.getElementById("display");

document.addEventListener("keydown",function(){
   display.style.color = "red"
   display.innerText = e.key + "is keydown"
});
document.addEventListener("keyup",function(e){
    display.style.color = "black"
   display.innerText = e.key + " is keyup"
});