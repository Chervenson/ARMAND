window.addEventListener("DOMContentLoaded", (event) =>{

//var ligne = document.querySelectorAll('.ligne');            
//var col = document.querySelectorAll('.lettre');             // Déclaration des variables!!!
//var supp = document.getElementById('supp');                
//var entre = document.getElementById('entre');

var ligne = 0;
var col = 0;
var grille = document.getElementById('grille');
var cases = document.querySelectorAll('.lettre');
    //const mots = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ananas", "Abeille", "Chien"];
var lignes = document.getElementsByTagName("table")[0].rows;
var Message = document.querySelector('.Message');



const listeMots = ["ABEILLE", "ABORDER", "ACCUEIL", "ACTIVER", "BRAISER", "BOOSTER", "BUISSON", "CABINET", "CAMPEUR", "CANETTE", "CENTIME", "EDITEUR", "EFFACER", "ECUSSON", "ELEMENT", "FERMIER", "FITNESS", "FOOTING", "FRAUDES", "GENERAL", "GALERIE", "GLOBALE", "GOUTTER", "GRENIER", "HARICOT", "HEURTER", "HOSTILE"];
var motTape = "";
const random = Math.floor(Math.random() * listeMots.length);
var motADeviner = listeMots[random];

console.log(motADeviner);


//ajoute un event qui écoute le clavier et appelle la fonction "afficherLettre" en passant les infos de l'event à la fonction

//console.log(ligne);
document.addEventListener('keypress', ecouterClavier);

function ecouterClavier(event){

let lettre = event.key;
var charCode = event.keyCode;

//si c'est une lettre de l'alphabet
if (((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8))
{

//force la lettre en majuscule
lettre = lettre.toUpperCase();

if( col < 7 ){
               
   //1. on affiche la lettreZ
           afficherLettre(lettre);
         

           if(col < 7 )
            col++;
           
           console.log("col = " + col);
           console.log("ligne = " + ligne);
//2. on complète le motTape
motTape = motTape + lettre;
//console.log(motTape);

//3. on déplace le cursuer

}


}
//Sinon si la touche est entré
else if(charCode == 13){
console.log(col);

if( col == 7 && motTape == motADeviner ){
        alert(" Bravo !!! ");

        //Quand le mots est bon on dit bravo et on reinitialise la page
   }
   else if (ligne == 5 && motTape == motADeviner) {
    console.log("tkt");
   }
    else if (ligne == 5 && motTape !== motADeviner) {
    alert("Vous avez perdu");
    location.reload();
                return false;


   }

    else if (col == 7 && motTape !== motADeviner){
    console.log("tente");
alert("retente ta chance");
// passer à la ligne suivante
ligne++;
col = 0;
motTape = "";
   }
   
 
 


            //Faire en sorte que le tableau s'adapte au mot a deviner
   // faire en sorte que la premiere lettre du mot a deviner soit toujour dans la premire case
   //Et aussi que le ou les bonnes lettre trouver passe a la ligne suivante
   //Les lettre qui sont dans le mot a deviner sont en jaune et les lettres a la bonne place en rouge

           
}
   
}

    function afficherLettre(lettre){
    console.log(ligne);
    console.log(col);
//j'affiche une lettre
lignes[ligne].cells[col].innerHTML = lettre; //Afficher une lettre dans un élément HTML

}


}); 