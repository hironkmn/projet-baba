let data = ["Super Size Me","Psychose","E.T","Edward aux mains d'argent","Là-Haut","Game of Thrones","Breaking Bad","L'odysée de Pi","Sherlock","Stranger Things"]
let imgs = ["../images/cinemoji/supersizeme.png",
              "../images/cinemoji/psychose.png",
              "../images/cinemoji/et.png",
              "../images/cinemoji/edwardmains.png",
              "../images/cinemoji/lahaut.png",
              "../images/cinemoji/gameofthrones.png",
              "../images/cinemoji/breakingbad.png",
              "../images/cinemoji/odyseedepi.png",
              "../images/cinemoji/sherlock.png",
              "../images/cinemoji/strangerthings.png"]
        
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