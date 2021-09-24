var clicks = 0;

function truco(){
    let trucoBox = document.getElementById("trucoButtonText");

    clicks++
    switch(clicks){
        case 1:
            trucoBox.innerHTML = "É 6 CUZAO!";
            break;
        
        case 2:
            trucoBox.innerHTML = "9 ENTAO!";
            break;
        
        case 3:
            trucoBox.innerHTML = "12 PRA ACABAR LOGO!";
            break;

        case 4:
            trucoBox.innerHTML = "É truco papudo!"
            break;

        default:
            trucoBox.innerHTML = "É truco papudo!"
            break;
    }

}

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

function add(element){

    target = getTarget(element);

    switch(clicks){
        case 1:
            target.innerHTML = parseInt(target.innerHTML) + 3;
            break;

        case 2:
            target.innerHTML = parseInt(target.innerHTML) + 6;
            break;

        case 3:
            target.innerHTML = parseInt(target.innerHTML) + 9;
            break;

        case 4:
            target.innerHTML = 12;
            clicks = 0;
            break;

        default:
            target.innerHTML++;
            break;
    }
}

function remove(element){

    target = getTarget(element);

    if(target.textContent > 0){
        target.value = target.textContent--;
    }
}


//validar se < 0 
//validar se =11