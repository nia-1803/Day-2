const button= document.getElementById("changeBtn");
const message = document.getElementById("message");

let count=0;
button.addEventListener("click",function(){
    count++;
    if(count==1){
    message.textContent = "I am learning Javascript for Day 4"
    } else {
    message.textContent = "Clicked " + count + " times";
    }
});