//MASSA

document.getElementById("massa").onchange = function(){update()};

function update(){

let massa = document.getElementById("massa");   
let opcao = massa.options[massa.selectedIndex];

document.getElementById("selecionado").value = "Massa: " + opcao.text + ".";
}
update();

//RECHEIO

document.getElementById("recheio").onchange = function(){update2()};

function update2(){

let recheio = document.getElementById("recheio");   
let opcao2 = recheio.options[recheio.selectedIndex];

document.getElementById("selecionado2").value = "Recheio: " + opcao2.text + ".";
}
update2();

//COBERTURA

document.getElementById("cobertura").onchange = function(){update3()};

function update3(){

let cobertura = document.getElementById("cobertura");   
let opcao3 = cobertura.options[cobertura.selectedIndex];

document.getElementById("selecionado3").value = "Cobertura: " + opcao3.text + ".";
}
update3();

//DECORAÇÃO

document.getElementById("decoração").onchange = function(){update4()};

function update4(){

let decoração = document.getElementById("decoração");   
let opcao4 = decoração.options[decoração.selectedIndex];

document.getElementById("selecionado4").value = "Decoração: " + opcao4.text + ".";
}
update4();

//BOTÃO ENVIAR

document.getElementById("btn").onclick = function(){enviar()};

function enviar(){

    location.href='https://api.whatsapp.com/send?phone=5562982714110&text=' + document.getElementById("selecionado4").value + "\n" + document.getElementById("selecionado3").value + "\n" + document.getElementById("selecionado2").value + "\n" + document.getElementById("selecionado").value +''
    //alert(document.getElementById("selecionado4").value + "\n" + document.getElementById("selecionado3").value + "\n" + document.getElementById("selecionado2").value + "\n" + document.getElementById("selecionado").value) //ISSO FUNCIONA!!!!!!!
}