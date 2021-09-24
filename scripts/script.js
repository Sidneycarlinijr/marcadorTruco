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

        default:
            trucoBox.innerHTML = "É truco papudo!"
            clicks = 0;
            break;
    }
    



    console.log(trucoBox,clicks);


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
    
    target.value = target.textContent++
}

function remove(element){

    target = getTarget(element);

    if(target.textContent > 0){
        target.value = target.textContent--;
    }
}


//validar se < 0 
//validar se =11