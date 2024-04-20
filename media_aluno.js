function calcularMedia(){

    const nome = document.getElementById("nome").value
    const nota1 = parseFloat(document.getElementById("nota1").value); // inputs
    const nota2 = parseFloat(document.getElementById("nota2").value); // inputs

    media =(nota1+nota2)/2; // Calculo da minha variavel de saida 

    console.log(nota1); 
    console.log (media); // mostre a variavel de saida 

    // para aprovacao considere media >= 7.0

    if (media>=7){
        alert("o aluno " + "obteve media = " + media+ "\n Resultado: " + "aprovado")

    }
     else{
        alert("o aluno " + "obteve media = " + media+ "\n Resultado: " + "Reprovado")

     }

}