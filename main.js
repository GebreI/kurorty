var obrazki = new Array("img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg");

var info = new Array("Austria","Szwajcaria","Niemcy","Włochy","Polska");

var img=0;


/*-------------DATA------------------*/

function czas(){
            var dzisiaj = new Date();
            
            var godziny = dzisiaj.getHours();
            if(godziny<10)  godziny="0"+godziny;
            var minuty = dzisiaj.getMinutes();
            if(minuty<10) minuty="0"+minuty;
            var sekundy = dzisiaj.getSeconds();
            if(sekundy<10)  sekundy="0"+sekundy;
            
            var timer = godziny + ":" + minuty + ":" + sekundy;
            
            document.getElementById("czas_obecny").innerHTML = timer;
            
            var tab = ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'];
            document.getElementById("dzis_jest").innerHTML = dzisiaj.getDate() + " " + tab[dzisiaj.getMonth()] + " " + dzisiaj.getFullYear();
            
            var wakacje = new Date(2020,06,27,23,59);
            var ile = wakacje - dzisiaj;
            
            var ile_do = (ile)/(1000*60*60*24);
            document.getElementById("do_konca").innerHTML = Math.floor(ile_do) + " dni";
            
        }
        setInterval(czas,1000);

