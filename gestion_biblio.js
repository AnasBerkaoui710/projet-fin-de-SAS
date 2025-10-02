const prompt = require("prompt-sync")();

let livres = []; 

let abonnes = []; 

let emprunts = []; 



//fonctions pour gérer les livres:
function checkIfLivreExiste(target) {
    for (let i = 0; i < livres.length; i++) {
        if(livres[i].isbn == target && livres[i].disponible == true){
            return true
        }
    }
    
    return false
}


function ajouterlivre() {
    let newbookISBN=prompt("entrer l'isbn du livre: ")
    let newTitre=prompt("entrer le titre du livre: ")
    let newaAuteur=prompt("entrer l'auteur du livre: ")
    let newanee=parseInt(prompt("entrer l'année de publication du livre: "))
    livres.push({isbn:newbookISBN, titre:newTitre, auteur:newaAuteur, annee:newanee, disponible:true})    
}



function triAnnee() {
    livres.sort((a, b) => b.annee - a.annee);
    console.log(livres);
}
function triTitre() {
    let az_za=+prompt("1. ascendant: \n2.descendant: ")
    switch (az_za) {
        case 1:
            livres.sort((a, b) => a.titre.localeCompare(b.titre))
            console.log(livres);
            break;

        case 2:
            livres.sort((a, b) => b.titre.localeCompare(a.titre))
            console.log(livres);
            break;

        default:
            console.log("choix invalide !!");
            break;
    }
}



function livresDisponibles(){
            for(let j=0; j<livres.length;j++){
        if(livres[j].disponible == true){
        console.log(livres[j]);
        }
    }
}


function trouverLivre(){
    let isbnVoulu=prompt("entrer l' isbn du livre à rechercher: ")
for (let i = 0; i < livres.length; i++) {
    if(livres[i].isbn == isbnVoulu)  {
        return true
        }
    }return false
}





//fonction pour gérer les abonnés
function ajoutAbonné() {
    let newNom=prompt("entrer le nom de l'abonné(e): ")
    let newPrenom=prompt("entrer le prénom de l'abonné(e): ")
    
    abonnes.push({id: abonnes.length+1,nom:newNom,prenom:newPrenom,email:newPrenom+"@gmail.com"}) 
    console.log("Abonné(e) ajouté avec succés");  
    return abonnes
}

function checkIfAbonneExist(target) {

    for (let i = 0; i < abonnes.length; i++) {
        if(abonnes[i].id == target){
            return true
        }   
    }
    return false
}

//fonctions pour gérer les emprunts

function enregistrerEmprunt(emprunts) {
    let livreVoulu = prompt("Entrer l'isbn du livre que tu veux empreinter: ")
    let idVoulu =+ prompt("Entrer l'id de l'abonné qui a emprunté: ")


    if(checkIfLivreExiste(livreVoulu)===true){

        if(checkIfAbonneExist(idVoulu)===true){

            emprunts.push({abonneId:idVoulu,isbn:livreVoulu,dateEmprunt: "30-09-2025"})
            console.log("Emprunt enregistré avec succès !");
            
            livres.forEach(livre => {
            if (livre.isbn === livreVoulu) { 
            livre.disponible = false; }
        });

        }else {

      console.log("Abonné introuvable !!!");
    }
    }else {
    console.log("Livre introuvable !!!");
  }return emprunts

  
}

function retourn(){
    

}


while (true) {
    console.log("=== Gestion d'une bibliothéque===\n1.Gérer les livres. \n2.Gérer les abonné(e)s. \n3.Gérer les emprunts  \n0.Quitter.")
    let choice1=+prompt("Choisissez une option: ")
    if(choice1 == 0)break


    switch (choice1) {
    case 1:
                console.log("=== Gestion d'une bibliothéque.===\n1.afficher les livres. \n2.Ajouter un livre. \n3.Trier par titre. \n4.Trier par annee. \n5.Afficher les livres disponibles. \n6.Rechercher un livre par ISBN. \n0.Quitter. ");
                let choice2 =+ prompt("Choisissez une option: ");
    


        switch (choice2) {
            case 1:
        console.log(livres);

        break;

            case 2:
        ajouterlivre(livres)
        break;

            case 3:
        triTitre(livres)
        break;

            case 4:
        triAnnee(livres)
        break;

            case 5:
        livresDisponibles(livres)
        break;

            case 6:
        trouverLivre(livres)
        break;

        default:
        console.log("Choix invalide !!!");
        
        break;
}
            
            break;
    case 2:
            let choice3 =+ prompt("1.Afficher les abonné(e)s: \n2.Ajouter un abonné")
            switch (choice3) {
                case 1:
                    console.log(abonnes);
                    break;

                case 2:
                    ajoutAbonné(abonnes)
                    break;

                default:
                    console.log("Choix invalide !!!");
                    break;
            }
            break
    case 3:
            let choice4 =+ prompt("1.Afficher les emprunts: \n2.Enregistrer un emprunt. \n3.Retourner un livre.")
            switch (choice4) {
                case 1:
                    console.log(emprunts);
                    break;

                case 2:
                    enregistrerEmprunt(emprunts)

                    break;

                default:
                    console.log("Choix invalide !!!");
                    break;
            }
    break
    
    default:
    console.log("Choix invalide !!!");
    break;
    }

}

