let jogadas = 0;
let baralho = Array("bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot");

function initGame(){

  let numCartas = window.prompt("Com quantas cartas quer jogar? 🦜");

  numCartas = parseInt(numCartas);

  if(numCartas < 4 || numCartas > 14 || numCartas%2 !== 0){
    location.reload();
  }else{
    distribuiCartas ( embaralha(numCartas) );
  }
  
}

function embaralha(numCartas){

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
              <div class="card" onclick="flip(this)">
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
  
  card.classList.toggle("flipped");
}

function comparador() { 
	return Math.random() - 0.5; 
}


initGame();