$(document).ready(function(){

  function ktoraGodzina() {
    var aktualnyCzas = new Date();
    var godz = aktualnyCzas.getHours();
    var min = aktualnyCzas.getMinutes();
    var sek = aktualnyCzas.getSeconds();
    // console.log('czas', godz,':', min,':', sek);
    
    if(godz < 10) {
      godz = '0' + godz;
    }
    if(min < 10) {
      min = '0' + min;
    }
    if(sek < 10) {
      sek = '0' + sek;
    }

    document.getElementById('zegarWynik').innerHTML = `${godz}:${min}:${sek}`;
  }

  setInterval(ktoraGodzina, 1000);
});