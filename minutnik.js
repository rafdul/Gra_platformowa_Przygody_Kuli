const button = document.getElementById('odliczM');
let odliczajOdMinuty = 0;
let odliczajWSek = 0;
let interval = '';

button.addEventListener('click', e => {
  e.preventDefault();
  console.log('start listener');
  odliczajOdMinuty = document.getElementById('minutaM').value; 
  
  setTimeout(reset, 1000);
  interval = setInterval(odliczaj, 1000);  
});

function reset() {
  document.getElementById('minutaM').value = '';
}

function odliczaj() {
  const pokazOdliczanie = document.getElementById('wynikM');
  odliczajWSek += 1;
  console.log('odliczajOdMinuty w f.odliczaj:', odliczajOdMinuty);

  const inputWSek = odliczajOdMinuty*60;
  const reszta = (inputWSek - odliczajWSek)%60;
  pokazOdliczanie.innerHTML = Math.floor((inputWSek - odliczajWSek)/60) + ':' + ((reszta > 9) ? reszta : '0' + reszta) ;

  if(pokazOdliczanie.textContent[0] == '-') {
    pokazOdliczanie.innerHTML = '0:00';
    clearInterval(interval); 
  }
}



