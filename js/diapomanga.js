let data = ["Akame Ga Kill","FullMetal Alchimist","My Hero Academia","Fire Force","Neon Genesis Evangelion","Demon Slayer","Berserk","Death Note","Hell's Paradise"]
let imgs1 = ["../images/diapomanga/akame1.jpg",
            "../images/diapomanga/fullmetal1.jpg",
            "../images/diapomanga/mha1.jpg",
            "../images/diapomanga/fireforce1.png",
            "../images/diapomanga/evangelion1.jpg",
            "../images/diapomanga/demonslayer1.jpg",
            "../images/diapomanga/berserk1.jpg",
            "../images/diapomanga/deathnote1.jpg",
            "../images/diapomanga/hellsparadise1.png"]

let imgs2 = ["../images/diapomanga/akame2.jpg",
            "../images/diapomanga/fullmetal2.jpg",
            "../images/diapomanga/mha2.jpg",
            "../images/diapomanga/fireforce2.jpg",
            "../images/diapomanga/evangelion2.jpg",
            "../images/diapomanga/demonslayer2.jpg",
            "../images/diapomanga/berserk2.jpg",
            "../images/diapomanga/deathnote2.jpg",
            "../images/diapomanga/hellsparadise2.png"]

let imgs3 = ["../images/diapomanga/akame3.jpg",
            "../images/diapomanga/fullmetal3.jpg",
            "../images/diapomanga/mha3.jpg",
            "../images/diapomanga/fireforce3.jpg",
            "../images/diapomanga/evangelion3.jpg",
            "../images/diapomanga/demonslayer3.jpg",
            "../images/diapomanga/berserk3.jpg",
            "../images/diapomanga/deathnote3.jpg",
            "../images/diapomanga/hellsparadise3.jpg"]

let imgs4 = ["../images/diapomanga/akame4.jpg",
            "../images/diapomanga/fullmetal4.jpg",
            "../images/diapomanga/mha4.jpg",
            "../images/diapomanga/fireforce4.jpg",
            "../images/diapomanga/evangelion4.jpg",
            "../images/diapomanga/demonslayer4.jpg",
            "../images/diapomanga/berserk4.jpg",
            "../images/diapomanga/deathnote4.jpg",
            "../images/diapomanga/hellsparadise4.jpg"]

var diaporama = 1;
affichage(diaporama);

function boutons(n) {
  affichage(diaporama += n);
}

function actifIndic(n) {
  affichage(diaporama = n);
}

function affichage(n) {
    var i;
    var diapoImg = document.getElementsByClassName("diapo");
    var indic = document.getElementsByClassName("demo");
    if (n > diapoImg.length) {diaporama = 1}    
    if (n < 1) {diaporama = diapoImg.length}
    for (i = 0; i < diapoImg.length; i++) {
       
       diapoImg[i].style.opacity = "0";
    }
    for (i = 0; i < indic.length; i++) {
       indic[i].className = indic[i].className.replace(" numeros", "");
    }
    diapoImg[diaporama-1].style.opacity = "1";    
  }
        
        let num = 0;
        let sco = 0;
        let end = 0;

        let score = document.getElementById("score");
        let h1 =document.getElementById("h1")
        let input = document.getElementById("inpu");
        input.addEventListener("keypress",function(){
            if (event.key === "Enter") {
                let img1 = document.getElementById("img1")
                let img2 = document.getElementById("img2")
                let img3 = document.getElementById("img3")
                let img4 = document.getElementById("img4")
                let inpu = document.getElementById("inpu").value;
                event.preventDefault()
                event.currentTarget.value = ""
                if(inpu == data[num] || inpu == data[num].toLowerCase()){
                    num++;
                    sco++;
                    end++;
                    h1.innerHTML = data[num] ;
                    img1.src = imgs1[num];
                    img2.src = imgs2[num];
                    img3.src = imgs3[num];
                    img4.src = imgs4[num];
                    affichage(1)
                    score.innerHTML = sco;
                    console.log(end)
                }else if(end == 10){
                let win = document.getElementById("win");
                win.innerHTML =  "Félicitations !"+ "<br>" + "Score total: " + sco + "<br>" + "Temps écoulé : " + count;
                }else if(end == 11){
                    num = 11;
                    but.innerHTML = "play again";
                    window.location.replace("../4images1mot.html");
                }
            
                if( h1.style.display = "block"){
                    h1.style.display = "none";
                }
            }
        })
        // timer logic
        let count = 0;
        let cou = document.getElementById("count");
        setInterval(run,1000)
        function run(){
            if(end <= 9){
                count = count + 1;
                cou.innerHTML= count;
            }else{
                clearInterval(run)
            }
            
        }
        // hint logic
        // get data from local storage
        let play = document.getElementById("play");
        let rel = localStorage.getItem('player');