var clicks = 0;
var resultsSection = document.getElementById("gameOver");


function getTarget(target){
    //Escala os niveis de hierarquia
    //se posicionando no elemento a ser alterado
    dad = target.parentNode;
    grandpa = dad.parentNode;
    sibling = grandpa.parentNode;
    targetElement = sibling.previousElementSibling;
    h1Target = targetElement.children;

    return h1Target[0];
}

function truco(){
    let trucoBox = document.getElementById("trucoButtonText");

    clicks++
    switch(clicks){
        case 1:
            trucoBox.innerHTML = "É 6 CUZAO!";
            pointsQuantity = "+3"
            switchTrucoPoints(pointsQuantity)
            break;
        
        case 2:
            trucoBox.innerHTML = "9 ENTAO!";
            pointsQuantity = "+6"
            switchTrucoPoints(pointsQuantity)
            break;
        
        case 3:
            trucoBox.innerHTML = "12 PRA ACABAR LOGO!";
            pointsQuantity = "+9"
            switchTrucoPoints(pointsQuantity)
            break;

        case 4:
            trucoBox.innerHTML = "TRUCO!"
            pointsQuantity = "+12"
            switchTrucoPoints(pointsQuantity)
            break;

        default:
            trucoBox.innerHTML = "TRUCO!"
            pointsQuantity = "reset";
            switchTrucoPoints(pointsQuantity)
            clicks=0;
            break;
    }
}

function add(element){

    var target = getTarget(element);

    switch(clicks){
        case 1:
            target.innerHTML = parseInt(target.innerHTML) + 3;
            clicks= 4; //retorno o botao truco para a posicao inicial
            truco()
            break;

        case 2:
            target.innerHTML = parseInt(target.innerHTML) + 6;
            clicks= 4;
            truco();
            break;

        case 3:
            target.innerHTML = parseInt(target.innerHTML) + 9;
            clicks= 4;
            truco();
            break;

        case 4:
            target.innerHTML = parseInt(target.innerHTML) + 12;
            clicks = 4;
            truco()
            break;

        default:
            target.innerHTML++;
            break;
    }

    //Chamada quando o game encerra
    if(target.innerHTML > 11){
        gameResults();
    }
}

function remove(element){

    target = getTarget(element);

    if(target.textContent > 0){
        target.value = target.textContent--;
    }
}

function gameResults(){
    resultsSection.classList.remove("d-none");

    team1Result.innerHTML = team1Points.innerHTML;
    team1Name.innerHTML = inputNameTeam1.value

    team2Result.innerHTML = team2Points.innerHTML;
    team2Name.innerHTML = inputNameTeam2.value;

    console.log(inputNameOne.value);
    
}

function playAgain(){
    team1Points.innerHTML = "0";
    team2Points.innerHTML = "0";

    resultsSection.classList.add("d-none");
}

function switchTrucoPoints(pointsQuantity){
    let trucoPoints = document.getElementsByClassName("trucoPoints");
    let buttons = document.getElementsByClassName("plusButton");
    
    if(pointsQuantity != "reset"){
        for(points of trucoPoints){
            points.style.display = "block";
            points.innerHTML = pointsQuantity;
        }
        for(button of buttons){
            button.style.display = "none";
        }
    }else{
        for(points of trucoPoints){
            points.style.display = "none";
            points.innerHTML = pointsQuantity;
        }
        for(button of buttons){
            button.style.display = "block";
        }
    }
}

const requestWakeLock = async () => {
    if ('wakeLock' in navigator) {
        try {
            await navigator.wakeLock.request('screen');
        } catch (err) {
            console.log(`${err.name}, ${err.message}`);
        }
    } 
}
  
  requestWakeLock();