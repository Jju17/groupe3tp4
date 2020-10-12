
let contacts = [
    [id, "nom1", "prenom1", isPositif, numero,[id1, id2, id3]],
    [id, "nom2", "prenom2", false, numero,[id1, id2, id3]],
    [id, "nom3", "prenom3", true, numero,[id1, id2, id3]]
]

function randomBool() {
    return Math.random() >= 0.5;
}


function contactIfPositif() {
    for(let i=0; i < contacts.length; i++) {
        if(contacts[i][2] === true) {
            console.log(`Le contact (nom : ${contacts[i][0]}, prenom : ${contacts[i][1]}) est positif au covid, veuillez contacter :`);
            for(let j=0; j<contacts[i][4]; j++) {
                console.log(`numéro de téléphone n°${j}`)
            }
        } 
    }

}