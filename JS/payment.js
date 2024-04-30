var name_input = document.getElementById("name");
var name_overlay = document.getElementById("name_overlay");

var number_overlay = document.getElementById("number_overlay");
var number_input = document.getElementById("card");

var expiry_overlay = document.getElementById("expiry_overlay");
var expire_date = document.getElementById("expiry");

name_input.addEventListener("input", () => {
    if(name_input.value.length == 0) {
        name_overlay.innerText = "Kerollos";
    } else {
        name_overlay.innerText = name_input.value;
    }
});

number_input.addEventListener("keypress", () => {
    if(number_input.value.replaceAll(" ", "").length % 4 == 0 && number_input.value.length != 0 && number_input.value.length != 19) {
        number_input.value += " ";
    } 
});

number_input.addEventListener("input", () => {
    if(number_input.value.length == 0) {
        number_overlay.innerText = "0000 0000 0000 0000";
    } else {
        number_overlay.innerText = number_input.value;
    }
})

expire_date.addEventListener("keypress", () => {
    if(expire_date.value.length == 2){
        expire_date.value += '/';
   }
});

expire_date.addEventListener("input", () => {
    if(expire_date.value.length == 0) {
        expiry_overlay.innerText = "MM/YY";
    } else {
        expiry_overlay.innerText = expire_date.value;
    }
});