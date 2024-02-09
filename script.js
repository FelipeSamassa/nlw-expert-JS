const perguntas = [
    {
        pergunta: "Qual é a função principal do JavaScript?",
        respostas: [
            "Manipulação de estilo",
            "Lógica do servidor",
            "Programação do lado do cliente",
        ],
        correta: 2 // A resposta correta é a opção C - Programação do lado do cliente
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const",
        ],
        correta: 0 // A resposta correta é a opção A - var
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "append()",
            "push()",
            "addToEnd()",
        ],
        correta: 1 // A resposta correta é a opção B - push()
    },
    {
        pergunta: "O que o método 'getElementById()' faz em JavaScript?",
        respostas: [
            "Busca um elemento pelo nome da classe",
            "Busca um elemento pelo ID",
            "Busca um elemento pelo nome da tag",
        ],
        correta: 1 // A resposta correta é a opção B - Busca um elemento pelo ID
    },
    {
        pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.log()",
            "print()",
            "write()",
        ],
        correta: 0 // A resposta correta é a opção A - console.log()
    },
    {
        pergunta: "Qual operador é usado para verificar igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1 // A resposta correta é a opção B - ===
    },
    {
        pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
        respostas: [
            "32",
            "5",
            "6",
        ],
        correta: 0 // A resposta correta é a opção A - 32
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "delete()",
        ],
        correta: 0 // A resposta correta é a opção A - pop()
    },
    {
        pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
        respostas: [
            "Remove um evento de um elemento",
            "Adiciona um evento a um elemento",
            "Dispara um evento",
        ],
        correta: 1 // A resposta correta é a opção B - Adiciona um evento a um elemento
    },
    {
        pergunta: "Qual é o tipo de dado do operador 'typeof' em JavaScript?",
        respostas: [
            "String",
            "Number",
            "Operador",
        ],
        correta: 2 // A resposta correta é a opção C - Operador
    },
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

// adicionar ou retirar, mas sem repetir o que tem dentro
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")

mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
    // aqui eu pego todas as perguntas, craindo um const e depois dizendo da onde vem as informações
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta

    // aqui eu coloco todas as resposta na tela
    for(let resposta of item.respostas) {
        // crio um const principal para poder editar ele
        const dt = quizItem.querySelector("dl dt").cloneNode(true)

        // digo da onde vem a informação
        dt.querySelector("span").textContent = resposta
        // pega o item, name de cada pergunta
        dt.querySelector("Input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        // vai pegar os valores de cada item, guardando-as
        dt.querySelector("input").value = item.respostas.indexOf(resposta)

        dt.querySelector("input").onchange = (e) => {
            const estaCorreta = e.target.value == item.correta

            // sempre deleta os itens, a menos que estejam corretos
            corretas.delete(item)

            if(estaCorreta){
                corretas.add(item)
            }

            // atualizar os dados na tela de acertos
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }

        // adiciono o conteúdo no dl. adicionando o filho
        quizItem.querySelector("dl").appendChild(dt)
    }

    // removeu o primeiro item
    quizItem.querySelector("dl dt").remove()

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
}