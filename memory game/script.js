card_pokemon = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
images = ["bulbasaur.png","charmander.png","mewtwo.png","pidgey.png","pikachu.png","snorlax.png","sqiurtle.png","togepi.png"];
broj_okrenutih = 0;
karta_id_1 = -1;
karta_id_2 = -1;

//određivanje na kojem mjestu je koji pokemon
function izmjesajNiz(niz){
    var currentIndex = niz.length;
    var temp, i = 0, randomIndex;

    while(i <= 15){
        randomIndex = Math.floor(Math.random() * 16);
        if(i != randomIndex){
            temp = niz[i];
            niz[i] = niz[randomIndex];
            niz[randomIndex] = temp;
        }
        i++;
    }
}


izmjesajNiz(card_pokemon);
//console.log(card_pokemon);

function vrati_karte(){
    console.log("Vraćanje karata");
    var id1 = "b" + (karta_id_1+1);
    console.log(id1);
    var btn1 = document.getElementById(id1);
    console.log(btn1);
    var img1 = btn1.childNodes[1];
    img1.src = "pokemon_slike/pokeball.png";

    var id2 = "b" + (karta_id_2+1);
    console.log(id2);
    var btn2 = document.getElementById(id2);
    console.log("ZZZ: " + btn2.childNodes);
    var img2 = btn2.childNodes[1];
    img2.src = "pokemon_slike/pokeball.png";
}

function show_image(btn){
    broj_okrenutih++;
    var btn_id = btn.value - 1;
    var img = btn.childNodes[1];
    img.src = "pokemon_slike/" + images[card_pokemon[btn_id]];

    if(broj_okrenutih== 2){
        karta_id_2 = btn_id;
        if(images[card_pokemon[btn_id]] == images[card_pokemon[karta_id_1]]){
            //alert("karte su iste");
        }
        else{
            setTimeout(() => {vrati_karte();}, 500);
        }
        broj_okrenutih = 0;
    }
    else if(broj_okrenutih == 1){
        karta_id_1 = btn_id;
    }
}