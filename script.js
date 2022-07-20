//MASSA



document.getElementById("massa").onchange = function () { update() };

function update() {

    let massa = document.getElementById("massa");
    let opcao = massa.options[massa.selectedIndex];

    document.getElementById("selecionado").value = "*MASSA*: " + opcao.text + ".";
}
update();

//RECHEIO

document.getElementById("recheio").onchange = function () { update2() };

function update2() {

    let recheio = document.getElementById("recheio");
    let opcao2 = recheio.options[recheio.selectedIndex];

    document.getElementById("selecionado2").value = "*RECHEIO*: " + opcao2.text + ".";
}
update2();

//COBERTURA

document.getElementById("cobertura").onchange = function () { update3() };

function update3() {

    let cobertura = document.getElementById("cobertura");
    let opcao3 = cobertura.options[cobertura.selectedIndex];

    document.getElementById("selecionado3").value = "*COBERTURA*: " + opcao3.text + ".";
}
update3();

//DECORAÇÃO

document.getElementById("decoração").onchange = function () { update4() };

function update4() {

    let decoração = document.getElementById("decoração");
    let opcao4 = decoração.options[decoração.selectedIndex];

    document.getElementById("selecionado4").value = "*DECORAÇÃO*: " + opcao4.text + ".";
}
update4();

//BOTÃO ENVIAR

document.getElementById("btn").onclick = function () { enviar() };

function enviar() {

    window.open('https://api.whatsapp.com/send?phone=5562982714110&text=' + "Olá, gostaria de fazer uma *ENCOMENDA*! " + document.getElementById("selecionado").value + " " + document.getElementById("selecionado2").value + " " + document.getElementById("selecionado3").value + " " + document.getElementById("selecionado4").value + '', '_blank');

    //alert(document.getElementById("selecionado4").value + "\n" + document.getElementById("selecionado3").value + "\n" + document.getElementById("selecionado2").value + "\n" + document.getElementById("selecionado").value) //ISSO FUNCIONA!
}

document.getElementById("rolarDir").onclick = function () {
    rolarDir ()};
var vidro = document.getElementById("vidro")
function rolarDir () {
vidro.scrollBy(-10, 0);
}

document.getElementById("rolarEsq").onclick = function () {
    rolarEsq ()};
var vidro = document.getElementById("vidro")
function rolarEsq () {
vidro.scrollBy(10, 0);
}

/* Dá certo, mas não é fluido...
const button = document.getElementById("setaEsq");

button.onclick = function () {
    document.getElementById("vidro").scrollLeft -= 800;
};

const button2 = document.getElementById("setaDir");

button2.onclick = function () {
    document.getElementById("vidro").scrollLeft += 800;
};*/