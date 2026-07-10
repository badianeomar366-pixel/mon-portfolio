// ============================
// MODE SOMBRE
// ============================


const darkBtn = document.getElementById("darkMode");


darkBtn.addEventListener("click",()=>{


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀️";

}

else{

darkBtn.innerHTML="🌙";

}


});





// ============================
// ANIMATION AOS
// ============================


AOS.init({

duration:1000,

once:true

});





// ============================
// MESSAGE CONSOLE
// ============================


console.log(
"Bienvenue sur le portfolio de Omar BADIANE - Web Developer"
);





// ============================
// ANNEE AUTOMATIQUE
// ============================


let annee = new Date().getFullYear();


document.getElementById("annee").innerHTML = annee;