const tempo = document.querySelector(".tempo");
const iniciar = document.querySelector("[data-inicio]");
const pause = document.querySelector("[data-pause]");
const reset = document.querySelector("[data-reset]");
const minutos = document.querySelector(".min");

iniciar.addEventListener("click", inicio);
pause.addEventListener("click", pararTempo);
reset.addEventListener("click", resetarTempo);

let sec = 00;
let min = 00;
let ml = 00
let hr = 00;
let timer;
function inicio() {
  timer = setInterval(() => {
    tempo.innerHTML = hr + ":" + min + ":" + sec + ':' + ml++;
    if(ml === 100){
      ml= 0
      sec++
      if (sec < 10) sec = "0" + sec;

      
    }
    if (sec === 60) {
      sec = 0;
      min++;
      if (min < 10) min = "0" + min;
      
      if (min === 60) {
        min = 0;
        hr++;

      }
    }
  },10);
  iniciar.setAttribute("disabled", ""); //desabilita o clicar enqnt o tempo ta rodando
}

function pararTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled"); //poder clicar no iniciar
}

function resetarTempo() {
  setTimeout(() => {
    tempo.innerHTML = "00:00:00";
    min = 0;
    sec = 0;
    hr = 0;
  });
}
