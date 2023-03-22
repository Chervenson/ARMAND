const $save = document.getElementById('save');
var url;

document.addEventListener('DOMContentLoaded', () => {

    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
        function (tabs) {
            url = tabs[0].url;
            // console.log(tabs[0].url);
            let domain = (new URL(url).hostname);
            console.log("domain", domain);
            document.getElementById("url").value = domain;
        }
    );

    chrome.storage.sync.get({ login: '', key: '' }, items => {
        document.getElementById('login').value = items.login;
        document.getElementById('key').value = items.key;
        //console.log(items.url);
        //let domain = (new URL(items.url).pathname);
        //domain2 = domain.hostname;

    });
});

$save.addEventListener('click', () => {
    const login = document.getElementById('login').value.replace(/\/*$/, '');
    const key = document.getElementById('key').value;

    console.log("url", url);

    //API pour stocker et recuperer les données utilisateur
    chrome.storage.sync.set({ login: login, key: key }, () => {
        $save.classList.add('success');
        setTimeout(() => $save.classList.remove('success'), 1000);
        console.log("Votre login est: " + login);
        console.log("Votre mots de passe est: " + key);
        alert("Identifiant enregistrer");
    });
});





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