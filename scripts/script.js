

// function add(){
//     var team1Points = document.querySelector("#team1Points");

//     team1Points.value = team1Points.textContent++


function add(a){

    dad = a.parentNode;
    grandpa = dad.parentNode;
    sibling = grandpa.parentNode;
    targetElement = sibling.previousElementSibling;
    h1Target = targetElement.children;

    h1Target[0].value = h1Target[0].textContent++

console.log(h1Target[0].textContent);

}

