// localStorage.clear();
let array = JSON.parse(localStorage.getItem("array"))? JSON.parse(localStorage.getItem("array")) : [];
console.log(JSON.parse(localStorage.getItem("array")));
let form = document.forms.form;
let input = document.getElementById('input');
let divBox = document.getElementById('divBox');
let check = document.getElementById('check');
if(array){
    array.forEach(element => {
        console.log(element);
        let p = document.createElement('p');
        p.classList.add('pDiv');
        divBox.appendChild(p);
        p.innerText = element.name;
        input.value = '';
    });
}


form.onsubmit = function(ev){
    ev.preventDefault();
    if(!input.value.match(/^\w+\s*=\s*\w+$/)){
        return false;
    }
    let value = {name: input.value};

    console.log(value.name);
    if(value.name) {

        array.push({name: input.value });
        localStorage.setItem("array", JSON.stringify(array));

        let p = document.createElement('p');
        divBox.appendChild(p);
        p.innerText = value.name;
        input.value = '';
    }
}

check.onclick = function(){
    console.log(array);
}

let buttonSortByName = document.getElementById('buttonSortByName');
buttonSortByName.onclick = function () {
    if (divBox.children.length > 0){
    for (let i = divBox.children.length - 1; i >= 0; i--) {
        divBox.removeChild(divBox.children[i]);
    }
}
    array.sort(function(a, b) {
        let valueA = a.name?.split('=')[0] || '';
        let valueB = b.name?.split('=')[0] || '';
        return valueA.localeCompare(valueB);
    });
    for (let i = 0; i < array.length; i++){
        let p = document.createElement('p');
        p.innerText = array[i].name;
        divBox.appendChild(p);
    }
}

let buttonSortByValue = document.getElementById('buttonSortByValue');
buttonSortByValue.onclick = function () {
    if (divBox.children.length > 0){
    for (let i = divBox.children.length - 1; i >= 0; i--) {
        divBox.removeChild(divBox.children[i]);
    }
}
    array.sort(function(a, b) {
        let valueA = a.name?.split('=')[1] || '';
        let valueB = b.name?.split('=')[1] || '';
        return valueA.localeCompare(valueB);
    });
    for (let i = 0; i < array.length; i++){
        let p = document.createElement('p');
        p.innerText = array[i].name;
        divBox.appendChild(p);
    }
}
let buttonSortByDelete = document.getElementById('buttonSortByDelete')
buttonSortByDelete.addEventListener('click', clearArray);


function clearArray(){
     array = [];
     localStorage.setItem("array", JSON.stringify(array));
     if(divBox.children.length > 0){}

    location. reload();
}

