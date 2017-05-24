/**
 * Created by Adrian Lundhe, on 2017-04-08, Solna.
 *
 * Session.js starts a session, performs GET and parse the data.
 * Finally presents the information in a new body view.
 */

/**
 * Get username and password.
 */
loginUser = function(){
    let username = document.getElementsByName("username")[0].value;
    let password = document.getElementsByName("password")[0].value;

    session(username, password);
};

/**
 * Start new session.
 * @param username Username
 * @param password Password
 */
session = function(username, password){
    let xmlStart = '<?xml version="1.0" encoding="UTF-8"?><REQ><AUTH><USER>';
    let xmlMiddle = '</USER><PASSWORD>';
    let xmlEnd = '</PASSWORD></AUTH></REQ>';
    let postData = xmlStart + username + xmlMiddle + password + xmlEnd;
    let xhr = new XMLHttpRequest();

    xhr.open("POST", 'https://papi-stage.contentmedia.eu/1.0/auth/authenticate');
    xhr.setRequestHeader('Content-Type', 'text/xml');
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            if (xhr.responseText !== null){
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(xhr.response, "text/xml");
                let pSessionId = xmlDoc.getElementsByTagName("PARTNERSESSION")[0].childNodes[0].nodeValue;

                getNParseData(pSessionId);
            }else{
                console.log("Failed to start async session.");
                return false;
            }
        }
    };

    xhr.send(postData);
};

/**
 * GET data from request and parse it.
 * @param pSessionId Session id
 */
getNParseData = function(pSessionId){
    let dStart = 'https://papi-stage.contentmedia.eu/1.0/game/listround?partnersession=';
    let dEnd = '&operatorid=4&roundid=1572549';
    let reqData = dStart + pSessionId + dEnd;
    let xhr = new XMLHttpRequest();

    xhr.open("GET", reqData);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            if (xhr.responseText !== null){
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(xhr.responseText, "text/xml");
                let gameData = xmlDoc.getElementsByTagName("GAMEDATA")[0].childNodes[0].nodeValue;
                gameData = parser.parseFromString(gameData, "text/html");

                document.getElementsByTagName('title')[0].innerHTML = gameData.title;
                newBody(gameData);
            }else{
                console.log("Failed to get async game data.");
                return false;
            }
        }
    };

    xhr.send();
};

/**
 * Inserts gameData body into documents body.
 * @param gameData
 */
newBody = function(gameData){
    let body = document.getElementsByTagName("body")[0];
    body.innerHTML = gameData.body.outerHTML;
};