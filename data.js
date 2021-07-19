$(document).ready(function(){
  function odlicz(rok, miesiac, dzien, godzina, minuta) {
    var aktualnyCzas = new Date();
    var dataPodana = new Date(rok, miesiac-1, dzien, godzina, minuta, 0, 0);
    var pozostalyCzas = dataPodana.getTime() - aktualnyCzas.getTime();

    if(pozostalyCzas > 0) {
      var sekundy = pozostalyCzas / 1000;
      var minuty = sekundy / 60;
      var godziny = minuty / 60;
      var dni = godziny / 24;
      var lata = dni / 365;

      var pozostaleSek = Math.floor(sekundy % 60);
      var pozostaleMin = Math.floor(minuty % 60);
      var pozostaleGodz = Math.floor(godziny % 24);
      var pozostaleDni = Math.floor(dni % 365);
      var pozostaleLata = Math.floor(lata);

      return `Do podanej daty pozostało ${pozostaleLata} lat, ${pozostaleDni} dni, ${pozostaleGodz} godzin, ${pozostaleMin} minut, ${pozostaleSek} sekund.`
    } else {
      return 'Podana data już minęła.';
    }
  }

  $('#odliczD').click(function(){
    var r = document.getElementById('rokD').value;
    var m = document.getElementById('miesiacD').value; 
    var d = document.getElementById('dzienD').value; 
    var g = document.getElementById('godzinaD').value; 
    var min = document.getElementById('minutaD').value; 

    document.getElementById('wynikD').innerHTML = odlicz(r,m,d,g,min);
  });
});