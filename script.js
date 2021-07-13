var can = document.getElementById('gra');
var ctx = can.getContext('2d');

var grafikaPlatformy = new Image();
grafikaPlatformy.src = 'files/file1.jpg';
var plat = [];
plat[0] = new Platforma(0, 500, 750, 80);
plat[1] = new Platforma(730, 500, 750, 80);
plat[2] = new Platforma(100, 250, 100, 40);
plat[3] = new Platforma(240, 360, 100, 40);
plat[4] = new Platforma(500, 430, 100, 40);
plat[5] = new Platforma(380, 180, 100, 40);
plat[6] = new Platforma(730, 300, 100, 40);
plat[7] = new Platforma(670, 100, 100, 40);
plat[8] = new Platforma(1000, 390, 100, 40);
plat[9] = new Platforma(200, 70, 100, 40);
plat[10] = new Platforma(1160, 320, 100, 40);
plat[11] = new Platforma(910, 160, 100, 40);

var grafikaMonety = new Image();
grafikaMonety.src = 'files/coin-flip-49.gif';
// grafikaMonety.style.height = '40px';
// grafikaMonety.style.width = '40px';
// grafikaMonety.style.borderRadius = '50%'
grafikaMonety.backgroundColor = 'gold';
var mon = [];
mon[0] = new Moneta(110, 180, 80, 80);
mon[1] = new Moneta(250, 290, 80, 80);
mon[2] = new Moneta(510, 360, 80, 80);
mon[3] = new Moneta(390, 110, 80, 80);
mon[4] = new Moneta(740, 230, 80, 80);
mon[5] = new Moneta(680, 30, 80, 80);
mon[6] = new Moneta(1010, 320, 80, 80);
mon[7] = new Moneta(210, 0, 80, 80);
mon[8] = new Moneta(1170, 250, 80, 80);

var przesz = [];
przesz[0] = new Przeszkoda(40, 170, 40, 50, 5, 'files/flame.png')
przesz[1] = new Przeszkoda(420, 340, 35, 55, 10, 'files/dragon.png')

function rysuj() {
	//wyczyszczenie obszaru roboczego, by kolejne klatki nie nakłądały się na siebie
	ctx.clearRect(0, 0, can.width, can.height);
	//rysowanie platform z wykorzystaniem pętli po tablicy plat 
	rysujPlatformy();
	// rysowanie monet z wykorzystaniem pętli po tablicy mon
	rysujMonety();
	// rysowanie przeszkód z wykorzystaniem pętli po tablicy przesz
	rysujPrzeszkody();
}

setInterval(rysuj, 10);

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