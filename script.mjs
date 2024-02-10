import pkg from "./questoes.mjs"
const { perguntas } = pkg

/* Versão que exibe todas as questões */
/* =============================================================================== */

// const quiz = document.querySelector("#quiz")
// const template = document.querySelector("template")

// const corretas = new Set()
// const totalDePerguntas = perguntas.length
// const mostrarTotal = document.querySelector("#acertos span")
// mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

// for (const item of perguntas) {
// 	const quizItem = template.content.cloneNode(true)
// 	quizItem.querySelector("h3").textContent = item.pergunta

// 	for (let resposta of item.respostas) {
// 		const dt = quizItem.querySelector("dl dt").cloneNode(true)
// 		// substitui o conteúdo de span por "resposta"
// 		dt.querySelector("span").textContent = resposta
// 		// atribui o index da pergunta
// 		dt.querySelector("input").setAttribute(
// 			"name",
// 			"pergunta-" + perguntas.indexOf(item)
// 		)
// 		// atribui o index da resposta
// 		dt.querySelector("input").value = item.respostas.indexOf(resposta)
// 		dt.querySelector("input").onchange = (event) => {
// 			const estaCorreta = event.target.value == item.correta

// 			corretas.delete(item)
// 			if (estaCorreta) {
// 				corretas.add(item)
// 			}
// 			mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
// 		}
// 		quizItem.querySelector("dl").appendChild(dt)
// 	}

// 	// Remove o item invalido
// 	quizItem.querySelector("dl dt").remove()

// 	// Exibe a pergunta na tela
// 	quiz.appendChild(quizItem)
// }

/* =============================================================================== */





/* VERSÃO PARA SELECIONAR QUESTÕES ALEATÓRIAS*/
/* =============================================================================== */

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = 20 // Defina o número desejado de perguntas
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

const perguntasSelecionadas = []
while (perguntasSelecionadas.length < totalDePerguntas) {
	const indiceAleatorio = Math.floor(Math.random() * perguntas.length)
	if (!perguntasSelecionadas.includes(indiceAleatorio)) {
		perguntasSelecionadas.push(indiceAleatorio)
	}
}

perguntasSelecionadas.forEach((indice) => {
	const item = perguntas[indice]
	const quizItem = template.content.cloneNode(true)
	quizItem.querySelector("h3").textContent = item.pergunta

	for (let resposta of item.respostas) {
		const dt = quizItem.querySelector("dl dt").cloneNode(true)
		dt.querySelector("span").textContent = resposta
		dt.querySelector("input").setAttribute("name", "pergunta-" + indice)
		dt.querySelector("input").value = item.respostas.indexOf(resposta)
		dt.querySelector("input").onchange = (event) => {
			const estaCorreta = event.target.value == item.correta

			corretas.delete(item)
			if (estaCorreta) {
				corretas.add(item)
			}
			mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
		}
		quizItem.querySelector("dl").appendChild(dt)
	}

	// Remove o item inválido
	quizItem.querySelector("dl dt").remove()

	// Exibe a pergunta na tela
	quiz.appendChild(quizItem)
})

/* =============================================================================== */
