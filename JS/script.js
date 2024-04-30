var car = document.createElement("img");
car.src = "../IMG/CAR.png";
car.style.position = "fixed";
car.style.bottom = "0";
car.style.left = "0";
car.style.width = "200px"; 
document.body.appendChild(car);

var position = 0;
var interval = setInterval(function() {
    position++;
    car.style.left = position + "px";
    if (position >= window.innerWidth) {
        position = -100;
    }
}, 10);
