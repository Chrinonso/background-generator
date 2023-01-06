const button = document.getElementById("Btn","delbutton");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");




button.addEventListener("click", function() {
    if(input.value.length > 0 ) {
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    
})

input.addEventListener("keypress", function(event) {
    if(input.value.length > 0 && event.key === "Enter") {
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    
})

button.addEventListener("click", function() {
    if(input.value.length > 0 ) {
        const li=document.createElement("li");
        li.removeChild(document.createTextNode(input.value));
        ul.removeChild(li);
        input.value = "";
    }
    
})
