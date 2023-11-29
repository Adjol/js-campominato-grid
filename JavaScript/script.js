
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// let playBtn = document.getElementById("play")
let griglia = document.querySelector(".grid");



for (let i=1; i<=100; i++) {

    let quadro = document.createElement("div");

    quadro.className = ("square");

    griglia.append(quadro);
    
    quadro.append(i)
    

    quadro.addEventListener("click",
    
    function(){

        quadro.className = ("clicked_square");
        console.log(i);
        

    }
    
    );
}




