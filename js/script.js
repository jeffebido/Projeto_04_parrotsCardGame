let jogadas = 0;
let par = 0;
let baralho = Array("bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot");
let wait = false;
let numCartas = 0;

function initGame(){

  numCartas = window.prompt("Com quantas cartas quer jogar? 🦜");

  numCartas = parseInt(numCartas);

  if(numCartas < 4 || numCartas > 14 || numCartas%2 !== 0){
    location.reload();
  }else{
    distribuiCartas ( embaralha() );
  }
  
}

function embaralha(){

  let cartas = Array();

  baralho = baralho.sort( comparador );

  for(let i=0; i< numCartas/2; i++ ){

    cartas[i] = baralho[i];

  }

  cartas = cartas.concat(cartas);

  return cartas.sort( comparador );
}

function distribuiCartas(cartas){

  let html = '';

  for(let i=0; i < cartas.length ; i++ ){

    html += `
            <div class="col">
              <div class="card" onclick="flip(this)" card="${cartas[i]}">
                  <div class="card-front"></div>
                  <div class="card-back">
                      <img src="img/${cartas[i]}.gif"/>
                  </div>
              </div>
            </div>
    `;
  }

  let cards = document.querySelector('.cards');
  //console.log(cards);
  cards.innerHTML = html;



} 




function flip(card){
  
  if(!card.classList.contains("par-formado") && !wait){
    
    let anterior = document.querySelector(".anterior");
    let paresFormados = document.getElementsByClassName("par-formado");
    let viradas = document.getElementsByClassName("flipped");


    if( !card.classList.contains("flipped") ){

      card.classList.add("flipped");
      
    }
    
  

    if(anterior !== null){

      

      if(anterior.getAttribute("card") === card.getAttribute("card") ){

        anterior.classList.add("par-formado");
        card.classList.add("par-formado");
      }else{
        wait = true;
        setTimeout(function(){
          anterior.classList.remove("flipped");
          card.classList.remove("flipped");
          wait = false;
        },1000);

      }

      anterior.classList.remove("anterior");
    }else{
      card.classList.add("anterior");
    }

    jogadas++;

    if(numCartas == paresFormados.length){
      setTimeout(function(){
        encerraJogo();
      },1000);
    }
     
  }
}

function encerraJogo(){

  alert("Você ganhou em "+ jogadas +" jogadas!");

  while( !jogarNovamente() ){
    
  }
  
  
}

function jogarNovamente(){

  let jogarNovamente = window.prompt("Gostaria de reiniciar a partida?");

  if( jogarNovamente == "sim"){
    location.reload();
    return true;
  }else if(jogarNovamente == "não"){
    alert("Obrigado por jogar!");
    return true;
  }else{
    return false;
  }
}

function comparador() { 
	return Math.random() - 0.5; 
}

 

initGame();