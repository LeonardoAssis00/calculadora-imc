function calcular() {
    var inPeso = document.getElementById("inPeso");
    var inAltura = document.getElementById("inAltura")
    var outResultado = document.getElementById("outResultado");

    var peso = Number(inPeso.value);
    var altura = Number(inAltura.value);
    
    if(peso == 0 || isNaN(peso) && altura == 0 || isNaN(altura)) {
        alert("Preencha os campos corretamente");
        inPeso.focus();
        return;
    }

    var alturaConvertida = altura / 100;

    var massa = peso / (alturaConvertida * alturaConvertida);

    var classificar = "";

    if(massa < 16) {
        classificar = "Baixo peso, muito grave";
    } else if(massa > 16 && massa <= 16.99) {
        classificar = "Baixo peso, grave";
    } else if(massa > 17 && massa <= 18.49) {
        classificar = "Baixo peso";
    } else if(massa > 18.50 && massa <= 24.99) {
        classificar = "Peso normal"
    } else if(massa > 25 && massa <= 29.99) {
        classificar = "Sobrepeso";
    } else if(massa > 30 && massa <= 34.99) {
        classificar = "Obesidade grau I"
    } else if(massa >35 && massa <= 39.99) {
        classificar = "Obesidade grau II";
    } else if(massa > 40) {
        classificar = "Obesidade grau III"
    }

    outResultado.textContent = "Seu indice de massa corporal é igual a: " + massa.toFixed(2) + ", " + " sendo classificado como: " + classificar;
}
    var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcular)