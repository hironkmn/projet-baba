let data = ["Katana Zero","Bloons TD","Celeste","Dead by Daylight","Hitman","Mass Effect","Team Fortress","Death Stranding","Cuphead","Journey To The Savage Planet"]
let imgs = ["../images/4images1jeu/katanazero.png",
              "../images/4images1jeu/bloonstd.png",
              "../images/4images1jeu/celeste.png",
              "../images/4images1jeu/dbd.png",
              "../images/4images1jeu/hitman.png",
              "../images/4images1jeu/masseffect.png",
              "../images/4images1jeu/teamfortress.png",
              "../images/4images1jeu/deathstranding.png",
              "../images/4images1jeu/cuphead.png",
              "../images/4images1jeu/journeytothesavageplanet.png",]
        
        let num = 0;
        let sco = 0;
        let end = 0;

        let score = document.getElementById("score");
        let h1 =document.getElementById("h1")
        let input = document.getElementById("inpu");
        input.addEventListener("keypress",function(){
            if (event.key === "Enter") {
                let img = document.getElementById("img")
                let inpu = document.getElementById("inpu").value;
                event.preventDefault()
                event.currentTarget.value = ""
                if(inpu == data[num] || inpu == data[num].toLowerCase()){
                    num++;
                    sco++;
                    end++;
                    h1.innerHTML = data[num] ;
                    img.src = imgs[num];
                    score.innerHTML = sco;
                    console.log(end)
                }else if(end == 10){
                let win = document.getElementById("win");
                win.innerHTML = rel + "<br>" + "Félicitations !"+ "<br>" + "Score total: " + sco + "<br>" + "Temps écoulé : " + count;
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
        let but1 = document.getElementById("but1");
        but1.addEventListener("click",function(){
            if(sco >= 3){
                h1.style.display = "block";
                sco = sco - 3;
            }else(
                alert("Il faut que tu aies au moins 3 points bg !")
            )
        })
        // get data from local storage
        let play = document.getElementById("play");
        let rel = localStorage.getItem('player');
        play.innerHTML += rel ;