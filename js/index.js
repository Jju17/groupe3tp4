/*
* INFO : Tracing covid
* Groupe 3
* 
*
*/

// [id, nom, prenom, gsm, isPositif, [idPersonneAContacter1, idPersonneAContacter2, ...]]
let contacts = [
    [0, "nom0", "prenom0", "0478567453", false, [1]],
    [1, "nom1", "prenom1", "0479506841", true, [2, 3, 5]],
    [2, "nom2", "prenom2", "0473847463", false, [0]],
    [3, "nom3", "prenom3", "0478354673", true, []],
    [4, "nom4", "prenom4", "0498372643", false, [0, 5, 6]],
    [5, "nom5", "prenom5", "0473625384", false, [3, 4]],
    [6, "nom6", "prenom6", "0487545764", true, [0, 1, 6]],
];

function rajouterUnePersonne() {
    let nom = prompt();
    let prenom = prompt();
    let gsm = prompt();
    let isPositif = confirm('Cette personne était-elle positive récemment ?');
    let idPersons = [];

}



function randomBool() {
    return Math.random() >= 0.5;
}


function contactSiPositif() {
    for(let i=0; i < contacts.length; i++) {
        if(contacts[i][4] === true) {
            if(contacts[i][5].length > 0) {
                console.log(`La personne (nom : ${contacts[i][1]}, prenom : ${contacts[i][2]}) est positif au covid, veuillez contacter :`);
                aContacter(contacts[i][5]);
            } else {
                console.log(`La personne (nom : ${contacts[i][1]}, prenom : ${contacts[i][2]}) est positif au covid mais personne n'est affiché dans son tracing, veuillez vérifier auprès de la personne directement : ${contacts[i][3]}`);
            }
        } 
    }

}

function aContacter(idPersonnesAContacter) {

    for(let i=0; i < idPersonnesAContacter.length; i++) {
        for(let j=0; j < contacts.length; j++) {
            if(idPersonnesAContacter[i] === contacts[j][0]) {
                console.log(`${contacts[j][2]} ${contacts[j][1]} au numéro : ${contacts[j][3]}, `);
                contacts[j][4] == true;
            }
        }
    }
}