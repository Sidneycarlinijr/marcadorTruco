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

    target.value = target.textContent--;
}