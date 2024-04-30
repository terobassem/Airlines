alert('WELCOME')
function myfunction(){
    var text;
    if(confirm("Have you booked?")){
        text = "you pressed ok!";
    }else{
        txt="you pressed cancel ";
    }
    document.getElementById("demo").innerHTML= txt;
}
 function myfunction2(){
        document.getElementById('hidden').style.display="block"
}
var rooms=false;
function func2(){
   var img=document.getElementById('imgg');
   var img2=document.getElementById('imgg2');
   var img3=document.getElementById('imgg3');
   var textt=document.getElementById('textt');
   
   if(!rooms){
    img.src='../IMG/555.jpg';
    img2.src='../IMG/444.jpg';
    img3.src='../IMG/333.jpg';
    textt.textContent='Cet hôtel 5 étoiles possède 2 piscines ainsi qu’un spa et une salle de sport avec hammam, bain à remous et massages. Les chambres et les suites climatisées de lHôtel du Palais Biarritz disposent dune télévision par satellite à écran plat et dune connexion Wi-Fi gratuite.'
   
   } else{
    img.src='../IMG/hh2.jpg';
    img2.src='../IMG/hh3.webp';
    img3.src='../IMG/ff6.jpg';
    textt.textContent='Hotel du Palais is a symbolic jewel of Biarritz overlooking the Atlantic Ocean. Founded in 1854, the former imperial residence of Napoleon III and Empress Eugenie awaits you for a memorable experience and a place to embrace with the extraordinary We Have A special offer Here in Our Website 3 days with 2 nights'
   }
   rooms=!rooms;
}
var photo=false;
function dark(){
    var dark=document.body;
    if(!photo){
    dark.style.backgroundImage="url(../IMG/par.jpg)"
    } else{
     dark.style.backgroundImage="url(../IMg/ff4.jpg"
    }
    photo=!photo;
}

