/*
* INFO : Tracing covid
* Groupe 3
* 
*
*/


// [gsm, nom, prenom, isPositif, [gsm1, gsm2, ...]]
let contacts = [
    ["0478567453", "nom0", "prenom0",false, ["0479506841", "0488679654"]],
    ["0479506841", "nom1", "prenom1",true, ["0473847463", "0498372643"]],
    ["0473847463", "nom2", "prenom2",false, ["0478354673", "0498372643"]],
    ["0478354673", "nom3", "prenom3",true, ["0498372643", "0487545765"]],
    ["0498372643", "nom4", "prenom4",false, ["0473625384", "0488679659"]],
    ["0473625384", "nom5", "prenom5",false, ["0487545764", "0488679658"]],
    ["0487545764", "nom6", "prenom6",true, ["0487545765", "0488679657"]],
    ["0487545765", "nom7", "prenom7",true, ["0478567453", "0488679656"]]
];

function rajouterUnePersonne() {
    let nom = prompt("veuillez introduire le nom du patient");
    let prenom = prompt("veuillez introduire le prénom du patient");
    let gsm = prompt("veuillez introduire le numéro de téléphone du patient");
    let isPositif = confirm('Cette personne était-elle positive récemment ?');
    let listGsm = [];
    let nombreContact=0;
    for (let gsmPersonneAContacter=prompt("Indiquez un par un le numéro des personnes que vous avez cotoyé. Une fois terminé indiquez fin."); gsmPersonneAContacter !== "Fin" && gsmPersonneAContacter !== "fin" ; gsmPersonneAContacter=prompt("Indiquez un par un le numéro des personnes que vous avez cotoyé. Une fois terminé indiquez fin.")){
        listGsm[nombreContact]=gsmPersonneAContacter;
        nombreContact ++;
        }
    contacts[contacts.length]=[gsm, nom, prenom, isPositif,listGsm];

}

function randomBool() {
    return Math.random() >= 0.5;
}


function contactSiPositif() {
    for(let i=0; i < contacts.length; i++) {
        if(contacts[i][3] === true) {
            if(contacts[i][4].length > 0) {
                console.log(`La personne (nom : ${contacts[i][1]}, prenom : ${contacts[i][2]}) est positif au covid, veuillez contacter :`);
                aContacter(contacts[i][4]);
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
