$(document).ready(function(){
  var dziesetne = 0;
  var sekundy = 0;
  var minuty = 0;
  var godziny = 0;
  var zmiana = 0;

  $('#start').click(function(){
    if(zmiana == 0) {
      zmiana = 1;
      document.getElementById('start').innerHTML = 'Pauza';
    } else {
      zmiana = 0;
      document.getElementById('start').innerHTML = 'Start';
    }
  });

  $('#reset').click(function(){
    dziesetne = 0;
    sekundy = 0;
    minuty = 0;
    godziny = 0;
    document.getElementById('miedzy').innerHTML = '';
  });

  $('#miedzyczas').click(function(){
    var zapis = godziny + ':' + minuty + ':' + sekundy + ':' + dziesetne;
    document.getElementById('miedzy').innerHTML += zapis + '</br>';
  });

  function petla() {
    dziesetne = dziesetne + zmiana;
    if(dziesetne == 10) {
      sekundy = sekundy + 1;
      dziesetne = 0;
    }
    if(sekundy == 60) {
      minuty = minuty + 1;
      sekundy = 0;
    }
    if(minuty == 60) {
      godziny = godziny + 1;
      minuty = 0;
    }
    var napis = godziny + ':' + minuty + ':' + sekundy + ':' + dziesetne;
    document.getElementById('wynik').innerHTML = napis;
  }

  setInterval(petla, 100);
});