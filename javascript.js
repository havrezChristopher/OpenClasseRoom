
let score=0
let liste;
let choix=""
// afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ; 
function afficherResultat(score,liste) {
    let message=`votre Scores! = ${score}"/" ${i +1}`
        return message
}

// choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots.


//Demandez à l’utilisateur s’il veut la liste de mots ou la liste de phrases. 
do {
    choix=prompt(`Veuillez Faire un choix entre mots Ou phrase ` )
    
    
} 
while (choix !== "mots" && choix !== "phrase")

//Répétez la question tant que l’utilisateur n’a pas écrit “mots” ou “phrases”.
// Code de terrence 
switch (choix) {
    case "mots":
        liste=[...listeMots]
        
        break;
    case "phrase":
        liste=[...listeMots2]
    default:
        alert(" Fuck Off Ecrit Correctement !")
        break;
}
// Code de terrence 

for (let i = 0; i < liste.length; i++) {
    mots=prompt("veuillez Entre " + liste[i])
    
    if (mots==liste[i]) {
        score+=1
    }
}
