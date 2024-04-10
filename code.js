const inputMate = document.getElementById("notaDMate");
const inputLengua = document.getElementById("notaDLengua");
const inputEfsi = document.getElementById("notaDEfsi");
const kali = document.getElementById("mostrar");
let notaMate;
let notaLengua;
let notaEfsi;
let promedioN = document.getElementById("pro");;

inputMate.onkeyup = () => {
    notaMate = inputMate.value;
    if ((inputMate.value.length > 1 && inputMate.value != "10") || inputEfsi.value == "0"){
        inputMate.style.color = "red";
    }
    else{
        inputMate.style.color = "green";   
    }
}
inputLengua.onkeyup = () => {
    notaLengua = inputLengua.value;
    if ((inputLengua.value.length > 1 && inputLengua.value != "10") || inputEfsi.value == "0"){
        inputLengua.style.color = "red";
    }
    else{
        inputLengua.style.color = "green";   
    }
}
inputEfsi.onkeyup = () => {
    notaEfsi = inputEfsi.value;
    if ((inputEfsi.value.length > 1 && inputEfsi.value != "10") || inputEfsi.value == "0"){
        inputEfsi.style.color = "red";
    }
    else{
        inputEfsi.style.color = "green";   
    }
}

promedioN.onclick = () => {
    let lulikal = validar();
    if (!lulikal) 
        return;
    let inscky = [inputMate.value, inputLengua.value, inputEfsi.value];
    germankal.src = "mariposa.jpg"
    let n = parseInt(inscky[0]) + parseInt(inscky[1]) + parseInt(inscky[2]);
    let promedioN = n/3;
    if (promedioN>= 6) {
        mostrar.style.color = "green";
        germankal.src = 'bienn.png';
    } else {
        mostrar.style.color = "red";
        germankal.src = 'mal.png';
    }
    mostrar.innerText = 'El promedio es: ' + promedioN + '!!';
}

mayorN.onclick = () => {
    mostrar.style.color = "black";
    let lulikal = validar();
    if (!lulikal) 
        return;
    const max = Math.max(Math.max(inputMate.value, inputLengua.value), inputEfsi.value);
    let inscky = [inputMate, inputLengua, inputEfsi];
    inscky.sort(function (a, b){
        return a.value - b.value;
    });
    inscky.reverse();
    mostrar.style.color = "blue";
    kali.innerHTML = `materia con mayor nota: ${inscky[0].placeholder}`;
    for (let i = 1; i <= 2; i++) {
        if (inscky[i].value == max) {
        kali.innerHTML = kali.innerHTML + ', ' + inscky[i].placeholder;
        }
    }
    
}

function validar(){
    let inscky = [inputMate, inputLengua, inputEfsi];
    for (let i = 0; i < inscky.length; i++){
        if (inscky[i].value == "") {
            alert("Todos los campos deben tener un valor");
            return false;
        }
        if (inscky[i].value > 10 || inscky[i].value < 1) {
            alert("Los valores deben estar entre 1 y 10");
            return false;
        }
    }
    return true;
}
    