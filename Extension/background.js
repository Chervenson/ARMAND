const MSG_INIT = 'init';
const MSG_ERROR = 'error';

let login, key;

function sendMessage(action, content) {
    return chrome.tabs.query({ active: true, lastFocusedWindow: true }, async tabs => {
        return chrome.tabs.sendMessage(tabs[0].id, { action: action, content: content });
    });
}

async function storage() {
    return new Promise(function (resolve, reject) {
        return chrome.storage.sync.get({ login: null, key: null }, async items => {
            login = items.login;
            key = items.key;

            return resolve();
        });
    });
}
/*
async function load(tab) {
    await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['pwdmngr.css']
    }).catch(error => console.log(error));

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['templates.js']
    }).catch(error => console.log(error));

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['pwdmngr.js']
    }).catch(error => console.log(error));

    await storage();
}

chrome.action.onClicked.addListener(async (tab) => {
    await load(tab);

    if (!login || !key) {
        return sendMessage(MSG_ERROR, 'API KEY is not configured.<br>Go to Extensions &rarr; Settings &rarr; Options');
    }

    sendMessage(MSG_INIT, { login: login, apikey: key, url: tab.url });
});
*/