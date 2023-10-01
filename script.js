//Inicia o código. 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("grade-form");
    const resultContainer = document.getElementById("result-container");

    //informa que a media deve ser calculada depois de clicar no botão submit
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        //Declaração das váriaveis e de onde elas estão
        const exam1 = parseFloat(document.getElementById("exam1").value);
        const task1 = parseFloat(document.getElementById("task1").value);
        const exam2 = parseFloat(document.getElementById("exam2").value);
        const task2 = parseFloat(document.getElementById("task2").value);

        //Cálculo da média
        const average = ((exam1 + task1 + exam2 + task2) / 4).toFixed(2);

        //Comparação para aprovado ou não
        if (average >= 6.0) {
            resultContainer.innerText = `Parabéns! Você passou com média ${average}.`;
        } else {
            resultContainer.innerText = `Infelizmente, sua média foi ${average}. Estude mais para a próxima!`;
        }
    });
});
