var button = document.querySelector("button");
var body = document.getElementsByTagName("body");

button.addEventListener("click", function(){
    if(document.body.style.background == "white") {
        document.body.style.background = "purple";
    } else {
        document.body.style.background = "white";
    }
    
})