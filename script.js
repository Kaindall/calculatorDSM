//Este projeto foi desenvolvido por Karen Letica, Michael Douglas e Gustavo Zanetti.
        
//Descrição do problema: Este projeto é uma calculadora de médias. Ele é projetado para ajudar os alunos a calcular suas médias com base em suas notas de exames e atividades.

//Funcionamento do algoritmo: O usuário insere suas notas nos campos fornecidos. O algoritmo então calcula a média dessas notas e exibe o resultado.

//Variáveis de entrada:
//exam1: Esta variável é usada para armazenar a nota do aluno na Prova 1. É um número de ponto flutuante que o usuário insere no campo correspondente.
//task1: Esta variável é usada para armazenar a nota do aluno na Atividade 1. É um número de ponto flutuante que o usuário insere no campo correspondente.
//exam2: Esta variável é usada para armazenar a nota do aluno na Prova 2. É um número de ponto flutuante que o usuário insere no campo correspondente.
//task2: Esta variável é usada para armazenar a nota do aluno na Atividade 2. É um número de ponto flutuante que o usuário insere no campo correspondente.

//Variáveis de saída:
//average: Esta variável é usada para armazenar a média calculada das notas inseridas pelo usuário. É calculada somando as notas das provas e atividades e dividindo por 4.
//resultContainer.innerText: Esta variável é usada para exibir o resultado final ao usuário. Se a média for maior ou igual a 6,0, ela exibirá uma mensagem de parabéns junto com a média. Se a média for menor que 6,0, ela exibirá uma mensagem encorajando o usuário a estudar mais.//



document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("grade-form");
    const resultContainer = document.getElementById("result-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const exam1 = parseFloat(document.getElementById("exam1").value);
        const task1 = parseFloat(document.getElementById("task1").value);
        const exam2 = parseFloat(document.getElementById("exam2").value);
        const task2 = parseFloat(document.getElementById("task2").value);

        const average = ((exam1 + task1 + exam2 + task2) / 4).toFixed(2);

        const isFirstBimesterBelowAverage = (exam1 + task1) / 2 < 6;
        const isSecondBimesterBelowAverage = (exam2 + task2) / 2 < 6;

        if (average >= 6.0) {
            resultContainer.innerText = `Parabéns! Você passou com média ${average}. \u{1F44D}`;
        } else {
            resultContainer.innerHTML = `Infelizmente, sua média foi ${average}. Estude mais para a próxima! \u{1F44E}`;

            if (isFirstBimesterBelowAverage) {
                const activitiesDiv = document.createElement("div");
                activitiesDiv.className = "activities";
                activitiesDiv.innerHTML = "<h3>Sugestões de Estudo (JavaScript Básico):</h3>" +
                    "<ol style='text-align: left; padding-left: 20px;'>" +
                    "<li>Estude variáveis, tipos de dados e operadores.</li>" +
                    "<li>Aprenda sobre estruturas de controle (if, else, while, for).</li>" +
                    "<li>Pratique a manipulação de arrays e objetos.</li>" +
                    "</ol>";
                resultContainer.appendChild(activitiesDiv);
            }

            if (isSecondBimesterBelowAverage) {
                const activitiesDiv = document.createElement("div");
                activitiesDiv.className = "activities";
                activitiesDiv.innerHTML = "<h3 style='padding-top: 20px;'>Sugestões de Estudo (JavaScript Avançado):</h3>" +
                    "<ol style='text-align: left; padding-left: 20px;'>" +
                    "<li>Estude funções de ordem superior e callbacks.</li>" +
                    "<li>Aprenda sobre Promises e async/await para lidar com assincronicidade.</li>" +
                    "<li>Pratique manipulação do DOM (document object model) avançada.</li>" +
                    "</ol>";
                resultContainer.appendChild(activitiesDiv);
            }
        }

        // Atualiza o background, a borda e o tamanho da fonte do resultContainer
        resultContainer.style.backgroundColor = "#f5f5f5";
        resultContainer.style.border = "2px solid #ccc";
        resultContainer.style.borderRadius = "10px";
        resultContainer.style.padding = "20px";
        resultContainer.style.fontSize = "18px";
    });
});
