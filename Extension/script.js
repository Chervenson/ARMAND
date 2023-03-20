const $save = document.getElementById('save');

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({ login: '', key: '' }, items => {
        document.getElementById('login').value = items.login;
        document.getElementById('key').value = items.key;

    });
});

$save.addEventListener('click', () => {
    const login = document.getElementById('login').value.replace(/\/*$/, '');
    const key = document.getElementById('key').value;

    //API pour stocker et recuperer les données utilisateur
    chrome.storage.sync.set({ login: login, key: key }, () => {
        $save.classList.add('success');
        setTimeout(() => $save.classList.remove('success'), 1000);
        console.log("Votre login est: " + login);
        console.log("Votre mots de passe est: " + key);
        alert("Identifiant enregistrer");
    });
});

/*window.addEventListener("DOMContentLoaded", (event) => {

    var btn = document.querySelector('input[type="button"]');
    var txt = document.querySelector('p');

    btn.addEventListener('click', updateBtn);

    function updateBtn() {

        if (btn.value === 'Enregistrer') {
            console.log("ok");

        }
    }*/
/*
    var log = document.getElementById('log');
    var mdp = document.getElementById('mdp');
    var entrer = document.getElementById('entrer');
 
 
 
    if (event.which === 13) {
        // Code à exécuter lorsque la touche "Entrée" est pressée
        console.log("ok");
    }
    console.log("ok");
 
 
 
});
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        alert('ok!');
    }
});
*/

