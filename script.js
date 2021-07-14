var can = document.getElementById('gra');
var ctx = can.getContext('2d');

var grafikaPlatformy = new Image();
grafikaPlatformy.src = 'files/file1.jpg';
var plat = [];
plat[0] = new Platforma(0, 500, 750, 80);
plat[1] = new Platforma(730, 500, 750, 80);

plat[2] = new Platforma(80, 260, 100, 40);
plat[3] = new Platforma(240, 360, 100, 40); 
plat[4] = new Platforma(500, 430, 100, 40);
plat[5] = new Platforma(380, 180, 100, 40); //
plat[6] = new Platforma(630, 300, 100, 40); 
plat[7] = new Platforma(750, 160, 100, 40); 
plat[8] = new Platforma(1000, 390, 100, 40);
plat[9] = new Platforma(230, 140, 100, 40); //
plat[10] = new Platforma(1160, 320, 100, 40);
plat[11] = new Platforma(920, 250, 100, 40); 

var grafikaMonety = new Image();
grafikaMonety.src = 'files/coin-flip-49.gif';
var mon = [];
mon[0] = new Moneta(90, 190, 80, 80);
mon[1] = new Moneta(250, 290, 80, 80); 
mon[2] = new Moneta(510, 360, 80, 80);
mon[3] = new Moneta(390, 110, 80, 80); //
mon[4] = new Moneta(640, 230, 80, 80); 
mon[5] = new Moneta(760, 90, 80, 80); 
mon[6] = new Moneta(1010, 320, 80, 80);
mon[7] = new Moneta(240, 70, 80, 80); //
mon[8] = new Moneta(1170, 250, 80, 80);
mon[9] = new Moneta(930, 180, 80, 80);

var przesz = [];
przesz[0] = new Przeszkoda(60, 170, 40, 70, 5, 'files/flame.png');
przesz[1] = new Przeszkoda(420, 340, 55, 75, 10, 'files/dragon.png');
przesz[2] = new Przeszkoda(780, 310, 40, 70, 5, 'files/flame.png');
przesz[3] = new Przeszkoda(580, 20, 55, 75, 10, 'files/dragon.png');
przesz[4] = new Przeszkoda(1170, 400, 40, 70, 5, 'files/flame.png');
przesz[5] = new Przeszkoda(1100, 80, 55, 75, 10, 'files/dragon.png');


var grafikaPostaci = new Image();
grafikaPostaci.src = 'files/hero.png';
var xPos = 10;
var yPos = 20;
var szerPos = 40;
var wysPos = 65;
var hp = 2;
var wysSkok = 160;
var licznik = 0;

function Platforma(px, py, pszer, pwys) {
	this.x = px;
	this.y = py;
	this.szer = pszer;
	this. wys = pwys;
}

function Moneta(px, py, pszer, pwys) {
	this.x = px;
	this.y = py;
	this.szer = pszer;
	this. wys = pwys;
	this.czyWidoczna = true;
}

function Przeszkoda(px, py, pszer, pwys, pzabiera, pnazwa) {
	this.x = px;
	this.y = py;
	this.szer = pszer;
	this. wys = pwys;
	this.czyWidoczna = true;
	this.zabiera = pzabiera;
	this.grafikaPrzeszkody = new Image();
	this.grafikaPrzeszkody.src = pnazwa;
}

function rysujPlatformy() {
	for(var i = 0; i < plat.length; i++) {
		ctx.drawImage(grafikaPlatformy, plat[i].x, plat[i].y, plat[i].szer, plat[i].wys);
	}
}

function rysujMonety() {
	for(var i = 0; i < mon.length; i++) {
		if(mon[i].czyWidoczna == true) {
			ctx.drawImage(grafikaMonety, mon[i].x, mon[i].y, mon[i].szer, mon[i].wys);
		}
	}
}

function rysujPrzeszkody() {
	for(var i = 0; i < przesz.length; i++) {
		if(przesz[i].czyWidoczna == true) {
			ctx.drawImage(przesz[i].grafikaPrzeszkody, przesz[i].x, przesz[i].y, przesz[i].szer, przesz[i].wys);
		}
	}
}

function rysujPostac() {
	ctx.drawImage(grafikaPostaci, xPos, yPos, szerPos, wysPos)
}

// wprowadzamy zmienną dy, która ułatwi sprawdzanie, czy posytać stoi na platformie; gry dy = 0 postać zatrzymuje się, gdy dy>0 opada
var dy = 0;
function grawitacja() {
	if(dy >= 0) {
		dy = 3;
		for(var i = 0; i < plat.length; i++) {
			if(yPos + wysPos > plat[i].y &&
			yPos + 0.8*wysPos < plat[i].y &&
			xPos + szerPos/2 > plat[i].x &&
			xPos + szerPos/2 < plat[i].x + plat[i].szer) {
				dy = 0;
			}
		}
	} else  {
		licznik = licznik + 3;
		if(licznik >= wysSkok) {
			dy = 0;
			licznik = 0;
		}
	}
	yPos = yPos + dy;
}

// sterowanie postacią lewo/prawo; dx decyduje o ruchu postaci; gdy dy=0 to stoi, inne wartości to ruch w lewo lub w prawo
document.addEventListener('keydown', ruchPostaci, false);
document.addEventListener('keyup', stopPostaci, false);
var dx = 0;
function ruchPostaci(e) {
	if(e.keyCode == 37) {
		dx = -2;
	} else if(e.keyCode ==39) {
		dx = 2;
	}
}
function stopPostaci(e) {
	if(e.keyCode == 37) {
		dx = 0;
	} else if(e.keyCode == 39) {
		dx = 0;
	} else if(e.keyCode == 38 && dy == 0) {
		dy = -3;
	}
}

//  zbieranie monet 
function kolizjaZMoneta() {
	for(var i = 0; i < mon.length; i++) {
		if(yPos < mon[i].y + mon[i].wys/2 &&
		yPos + wysPos > mon[i].y + mon[i].wys/2 &&
		xPos < mon[i].x + mon[i].szer/2 &&
		xPos + szerPos > mon[i].x + mon[i].szer/2) {
			mon[i].czyWidoczna = false;
		}
	}
}

// strata punktów = kolizja z przeszkodą
var przegrales = false;
function kolizjaZPrzeszkoda() {
	for(var i = 0; i < przesz.length; i++) {
		if(yPos < przesz[i].y + przesz[i].wys/2 &&
		yPos + wysPos > przesz[i].y + przesz[i].wys/2 &&
		xPos < przesz[i].x + przesz[i].szer/2 &&
		xPos + szerPos > przesz[i].x + przesz[i].szer/2 &&
		przesz[i].czyWidoczna == true) {
			przesz[i].czyWidoczna = false;
			hp = hp - przesz[i].zabiera;
			if(hp <= 0) {
				przegrales = true;
			}
		}
	}
}

function przegrywasz() {
	if(przegrales == true) {
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.font = '120px Georgia';
		ctx.fillText('Spróbuj jeszcze raz!', 170, 330);
	}
}

// zakończenie gry - wygrana
function wygrywasz() {
	var czySaMonety = false;
	for(var i =0; i < mon.length; i++) {
		if(mon[i].czyWidoczna == true) {
			czySaMonety = true;
		}
	}
	if(czySaMonety == false) {
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.font = '120px Georgia';
		ctx.fillText('Wygrałeś!', 370, 330);
	}
}


function rysuj() {
	//wyczyszczenie obszaru roboczego, by kolejne klatki nie nakłądały się na siebie
	ctx.clearRect(0, 0, can.width, can.height);
	//rysowanie platform z wykorzystaniem pętli po tablicy plat 
	rysujPlatformy();
	// rysowanie monet z wykorzystaniem pętli po tablicy mon
	rysujMonety();
	// rysowanie przeszkód z wykorzystaniem pętli po tablicy przesz
	rysujPrzeszkody();
	// rysowanie postaci (tylko jedna, więc nie ma żadnej tablicy)
	rysujPostac();
	// spadanie postaci
	grawitacja();
	// ruch postaci
	xPos = xPos + dx;
	// zbieranie monet (po dotknięciu moneta znika)
	kolizjaZMoneta();
	// strata punktów po dotknięciu przeszkody
	kolizjaZPrzeszkoda();
	// koniec gry po zebraniu wszystkich monet
	wygrywasz();
	przegrywasz()
}

setInterval(rysuj, 10);