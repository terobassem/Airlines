var is_dark = false;

function light(){
    var body = document.body;
    var div=document.getElementById('moon')
    var container = document.getElementById('container');
    var container2 = document.getElementById('container2');
    var container3 = document.getElementById('container3');
    var text=document.getElementById('text')
    var text2=document.getElementById('text2')
    if(!is_dark) {
        text.style.color='black'
        text2.style.color='black'
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.356)';
        container2.style.backgroundColor = 'rgba(255, 255, 255, 0.356)';
        container3.style.backgroundColor = 'rgba(255, 255, 255, 0.356)';
        div.classList.remove('bi-moon-fill');
        div.classList.add('bi-brightness-high');
        div.style.color = 'white';
        body.style.backgroundImage = "url('../IMG/R (1).jpeg')";
        div.textContent='Light Mode'
    } else {
        text.style.color='white'
        text2.style.color='white'
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.356)';
        container2.style.backgroundColor = 'rgba(0, 0, 0, 0.356)';
        container3.style.backgroundColor = 'rgba(0, 0, 0, 0.356)';
        div.classList.add('bi-moon-fill');
        div.classList.remove('bi-brightness-high');
        div.style.color = 'black';
        body.style.backgroundImage = "url('../IMG/R.jpeg')";
        div.textContent='Dark Mode'
    }
    is_dark = !is_dark;
}
