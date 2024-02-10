const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma função em JavaScript?",
        respostas: [
            "função myFunction() {}",
            "const myFunction = function() {}",
            "var myFunction = () => {}",
            "function myFunction() {}"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
        respostas: [
            "6",
            "33",
            "Erro",
            "NaN"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "delete()",
            "splice()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é o operador de atribuição composto para adicionar e atribuir em JavaScript?",
        respostas: [
            "+=",
            "=+",
            "-=",
            "=="
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para juntar os elementos de um array em uma string em JavaScript?",
        respostas: [
            "join()",
            "concat()",
            "merge()",
            "implode()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'setTimeout()' em JavaScript?",
        respostas: [
            "Executar uma função após um período de tempo especificado",
            "Interromper a execução de uma função",
            "Pausar a execução de uma função",
            "Executar uma função repetidamente"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a saída do código: console.log(typeof([]));",
        respostas: [
            "'array'",
            "'object'",
            "'arrayobject'",
            "'undefined'"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
        respostas: [
            "'==' compara valores e '===' compara valores e tipos",
            "'===' compara valores e '==' compara valores e tipos",
            "'==' é mais rápido que '==='",
            "'===' é usado apenas para comparação de strings"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é o operador lógico 'OR' em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
            "??"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'splice()' em JavaScript?",
        respostas: [
            "Adicionar elementos em uma determinada posição de um array",
            "Remover elementos de um array",
            "Substituir elementos em um array",
            "Cortar um array em pedaços menores"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
        respostas: [
            "// Este é um comentário de várias linhas",
            "/* Este é um comentário de várias linhas */",
            "' Este é um comentário de várias linhas",
            "<!-- Este é um comentário de várias linhas -->"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'toUpperCase()' em JavaScript?",
        respostas: [
            "Converter uma string para maiúsculas",
            "Converter uma string para minúsculas",
            "Converter uma string para um array",
            "Converter um número para uma string"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para selecionar elementos por classe em JavaScript?",
        respostas: [
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "querySelectorAll()"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é o operador de igualdade em JavaScript?",
        respostas: [
            "==",
            "=",
            "===",
            "!="
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
        respostas: [
            "para (i = 0; i < 5; i++) {}",
            "para (i < 5; i++) {}",
            "para (var i = 0; i < 5; i++) {}",
            "loop (i = 0; i < 5; i++) {}"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a saída do código: console.log('2' + 2);",
        respostas: [
            "'22'",
            "'4'",
            "'2' + 2",
            "'undefined'"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é o operador de atribuição em JavaScript?",
        respostas: [
            "=",
            "==",
            "+=",
            ":-="
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para encontrar a posição de um elemento em um array em JavaScript?",
        respostas: [
            "find()",
            "index()",
            "search()",
            "indexOf()"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a função do método 'map()' em JavaScript?",
        respostas: [
            "Aplicar uma função a cada elemento de um array e retornar um novo array com os resultados",
            "Remover elementos de um array",
            "Adicionar elementos em uma determinada posição de um array",
            "Selecionar um elemento pelo ID"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário em linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "' Este é um comentário",
            "/* Este é um comentário */",
            "<!-- Este é um comentário -->"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é o resultado da expressão '5 == '5' em JavaScript?",
        respostas: [
            "true",
            "false",
            "Erro",
            "NaN"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'toLowerCase()' em JavaScript?",
        respostas: [
            "Converter uma string para maiúsculas",
            "Converter uma string para minúsculas",
            "Converter um número para uma string",
            "Converter uma string para um array"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual método é usado para converter uma string em um array em JavaScript?",
        respostas: [
            "split()",
            "join()",
            "concat()",
            "slice()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'while' em JavaScript?",
        respostas: [
            "enquanto (i < 5) {}",
            "para (i = 0; i < 5; i++) {}",
            "enquanto (i = 0; i < 5) {}",
            "enquanto (i < 5; i++) {}"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a saída do código: console.log(2 + '2');",
        respostas: [
            "'22'",
            "'4'",
            "'2' + 2",
            "'undefined'"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'filter()' em JavaScript?",
        respostas: [
            "Remover elementos de um array",
            "Selecionar elementos de um array com base em uma condição",
            "Adicionar elementos em uma determinada posição de um array",
            "Substituir elementos em um array"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é o operador de diferença em JavaScript?",
        respostas: [
            "!=",
            "<>",
            "==",
            "!=="
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é o operador lógico 'AND' em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
            "??"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'concat()' em JavaScript?",
        respostas: [
            "Adicionar elementos em uma determinada posição de um array",
            "Concatenar dois ou mais arrays",
            "Substituir elementos em um array",
            "Dividir um array em pedaços menores"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é o resultado da expressão '5 === '5' em JavaScript?",
        respostas: [
            "true",
            "false",
            "Erro",
            "NaN"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a saída do código: console.log(5 - '2');",
        respostas: [
            "3",
            "7",
            "52",
            "Erro"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a sintaxe correta para um loop 'do-while' em JavaScript?",
        respostas: [
            "faça {} enquanto (condição);",
            "enquanto (condição) faça {}",
            "faça {} enquanto condicional;",
            "faça enquanto (condição) {}"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'slice()' em JavaScript?",
        respostas: [
            "Adicionar elementos em uma determinada posição de um array",
            "Remover elementos de um array",
            "Retornar uma cópia de parte de um array dentro de um novo array",
            "Cortar um array em pedaços menores"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a finalidade do método 'toFixed()' em JavaScript?",
        respostas: [
            "Converter um número para uma string",
            "Arredondar um número para um número específico de casas decimais",
            "Retornar o valor absoluto de um número",
            "Arredondar um número para o inteiro mais próximo"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual método é usado para ordenar os elementos de um array em JavaScript?",
        respostas: [
            "sort()",
            "order()",
            "sortBy()",
            "arrange()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'find()' em JavaScript?",
        respostas: [
            "Selecionar o primeiro elemento de um array",
            "Selecionar elementos de um array com base em uma condição",
            "Adicionar um novo elemento no final de um array",
            "Substituir elementos em um array"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a saída do código: console.log(Math.min(1, 3, 2));",
        respostas: [
            "1",
            "3",
            "2",
            "undefined"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é o operador de negação em JavaScript?",
        respostas: [
            "&&",
            "||",
            "!",
            "??"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do método 'reduce()' em JavaScript?",
        respostas: [
            "Remover elementos de um array",
            "Aplicar uma função a cada elemento de um array e reduzir o array a um único valor",
            "Adicionar elementos em uma determinada posição de um array",
            "Substituir elementos em um array"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é o resultado da expressão 'typeof(undefined)' em JavaScript?",
        respostas: [
            "'undefined'",
            "'object'",
            "'null'",
            "'string'"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a saída do código: console.log('2' - 1);",
        respostas: [
            "1",
            "3",
            "21",
            "Erro"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'substring()' em JavaScript?",
        respostas: [
            "Remover elementos de um array",
            "Retornar uma parte da string entre os índices inicial e final",
            "Converter uma string para maiúsculas",
            "Converter uma string para minúsculas"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a sintaxe correta para criar um objeto em JavaScript?",
        respostas: [
            "const obj = {key: 'value'};",
            "obj = {key: 'value'};",
            "var obj = {key: 'value'};",
            "obj: {key: 'value'};"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para remover o primeiro elemento de um array em JavaScript?",
        respostas: [
            "shift()",
            "removeFirst()",
            "deleteFirst()",
            "splice()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'charAt()' em JavaScript?",
        respostas: [
            "Remover elementos de um array",
            "Retornar o caractere em um índice especificado em uma string",
            "Retornar uma parte da string entre os índices inicial e final",
            "Converter uma string para minúsculas"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'parseFloat()' em JavaScript?",
        respostas: [
            "Converter um número para uma string",
            "Converter uma string para um número de ponto flutuante",
            "Arredondar um número para um número específico de casas decimais",
            "Retornar o valor absoluto de um número"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'replace()' em JavaScript?",
        respostas: [
            "Remover elementos de um array",
            "Substituir parte de uma string por outra string",
            "Retornar o caractere em um índice especificado em uma string",
            "Converter uma string para minúsculas"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a sintaxe correta para comentários em bloco em JavaScript?",
        respostas: [
            "// Este é um comentário em bloco",
            "/* Este é um comentário em bloco */",
            "' Este é um comentário em bloco",
            "<!-- Este é um comentário em bloco -->"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter um número para uma string",
            "Converter uma string para um número inteiro",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'isNaN()' em JavaScript?",
        respostas: [
            "Verificar se um valor é um número",
            "Verificar se um valor é NaN (não é um número)",
            "Converter uma string para um número inteiro",
            "Arredondar um número para um número específico de casas decimais"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'isArray()' em JavaScript?",
        respostas: [
            "Verificar se um valor é uma string",
            "Verificar se um valor é um array",
            "Verificar se um valor é um número",
            "Verificar se um valor é um objeto"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'Math.random()' em JavaScript?",
        respostas: [
            "Retornar um número aleatório entre 0 e 1",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número",
            "Verificar se um número é NaN (não é um número)"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.floor()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar um número aleatório entre 0 e 1"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.ceil()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar um número aleatório entre 0 e 1"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.abs()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a função do método 'Math.pow()' em JavaScript?",
        respostas: [
            "Retornar o valor absoluto de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.sqrt()' em JavaScript?",
        respostas: [
            "Calcular a raiz quadrada de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.max()' em JavaScript?",
        respostas: [
            "Retornar o maior número de uma lista de argumentos",
            "Retornar o menor número de uma lista de argumentos",
            "Retornar a média de uma lista de argumentos",
            "Retornar o valor absoluto de um número"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.min()' em JavaScript?",
        respostas: [
            "Retornar o maior número de uma lista de argumentos",
            "Retornar o menor número de uma lista de argumentos",
            "Retornar a média de uma lista de argumentos",
            "Retornar o valor absoluto de um número"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'Math.round()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar um número aleatório entre 0 e 1"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.sin()' em JavaScript?",
        respostas: [
            "Calcular o seno de um ângulo em radianos",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.cos()' em JavaScript?",
        respostas: [
            "Calcular o cosseno de um ângulo em radianos",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.tan()' em JavaScript?",
        respostas: [
            "Calcular a tangente de um ângulo em radianos",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.log()' em JavaScript?",
        respostas: [
            "Calcular o logaritmo natural de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.exp()' em JavaScript?",
        respostas: [
            "Calcular o exponencial de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
	{
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "variável myVar = valor;",
            "const myVar = valor;",
            "let myVar = valor;",
            "var myVar = valor;"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Compara dois valores para igualdade, sem verificar o tipo",
            "Compara dois valores para igualdade, verificando o tipo",
            "Compara dois valores, ignorando o tipo",
            "Atribui um valor a uma variável"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "addToEnd()",
            "append()",
            "concat()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter um número para uma string",
            "Converter uma string para um número inteiro",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário",
            "<!-- Este é um comentário -->"
        ],
        correta: 0,
    },{
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "variável myVar = valor;",
            "const myVar = valor;",
            "let myVar = valor;",
            "var myVar = valor;"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Compara dois valores para igualdade, sem verificar o tipo",
            "Compara dois valores para igualdade, verificando o tipo",
            "Compara dois valores, ignorando o tipo",
            "Atribui um valor a uma variável"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "addToEnd()",
            "append()",
            "concat()"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'parseInt()' em JavaScript?",
        respostas: [
            "Converter um número para uma string",
            "Converter uma string para um número inteiro",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário",
            "<!-- Este é um comentário -->"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'getElementById()' em JavaScript?",
        respostas: [
            "Seleciona um elemento pelo nome da classe",
            "Seleciona um elemento pelo ID",
            "Seleciona um elemento pelo nome da tag",
            "Seleciona um elemento pelo nome do atributo"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a sintaxe correta para uma função arrow em JavaScript?",
        respostas: [
            "function myFunction() {}",
            "const myFunction = function() {}",
            "var myFunction = () => {}",
            "arrow myFunction() {}"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual método é usado para remover o primeiro elemento de um array em JavaScript?",
        respostas: [
            "removeFirst()",
            "deleteFirst()",
            "splice()",
            "shift()"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a função do operador '++' em JavaScript?",
        respostas: [
            "Adiciona 1 a uma variável",
            "Subtrai 1 de uma variável",
            "Multiplica uma variável por 2",
            "Divide uma variável por 2"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
        respostas: [
            "toNumber()",
            "parseNumber()",
            "parseInt()",
            "parseFloat()"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a função do operador '%' em JavaScript?",
        respostas: [
            "Realiza a multiplicação de dois números",
            "Realiza a divisão de dois números",
            "Retorna o resto da divisão de dois números",
            "Retorna o quociente da divisão de dois números"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a finalidade do método 'indexOf()' em JavaScript?",
        respostas: [
            "Encontra a posição do último elemento de um array",
            "Encontra a posição de um elemento específico de um array",
            "Encontra a posição do primeiro elemento de um array",
            "Encontra a posição do maior elemento de um array"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
        respostas: [
            "Formata um número com um número específico de casas decimais",
            "Arredonda um número para o inteiro mais próximo",
            "Retorna o valor absoluto de um número",
            "Converte um número para uma string com notação científica"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a sintaxe correta para uma estrutura condicional 'if' em JavaScript?",
        respostas: [
            "se (condição) {}",
            "if (condição) {}",
            "quando (condição) {}",
            "selecionar (condição) {}"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do operador '!=' em JavaScript?",
        respostas: [
            "Verifica se dois valores são iguais, incluindo o tipo",
            "Verifica se dois valores são diferentes, incluindo o tipo",
            "Verifica se dois valores são iguais, sem verificar o tipo",
            "Verifica se dois valores são diferentes, sem verificar o tipo"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a finalidade do método 'concat()' em JavaScript?",
        respostas: [
            "Concatena dois ou mais arrays",
            "Adiciona elementos em uma determinada posição de um array",
            "Substitui elementos em um array",
            "Divide um array em pedaços menores"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do operador '||' em JavaScript?",
        respostas: [
            "Realiza a operação OR lógica entre dois operandos",
            "Realiza a operação AND lógica entre dois operandos",
            "Inverte o valor lógico de um operando",
            "Incrementa o valor de um operando"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'slice()' em JavaScript?",
        respostas: [
            "Adiciona elementos em uma determinada posição de um array",
            "Remove elementos de um array",
            "Retorna uma cópia de parte de um array dentro de um novo array",
            "Corta um array em pedaços menores"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do método 'substring()' em JavaScript?",
        respostas: [
            "Retorna uma parte da string entre os índices inicial e final",
            "Retorna o caractere em um índice especificado em uma string",
            "Converte uma string para maiúsculas",
            "Converte uma string para minúsculas"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'replace()' em JavaScript?",
        respostas: [
            "Substitui parte de uma string por outra string",
            "Remove elementos de um array",
            "Retorna o caractere em um índice especificado em uma string",
            "Converte uma string para minúsculas"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'trim()' em JavaScript?",
        respostas: [
            "Remove espaços em branco do início e do fim de uma string",
            "Remove espaços em branco do início de uma string",
            "Remove espaços em branco do fim de uma string",
            "Substitui espaços em branco por outro caractere em uma string"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'toUpperCase()' em JavaScript?",
        respostas: [
            "Converter uma string para minúsculas",
            "Converter uma string para maiúsculas",
            "Converter uma string para um array",
            "Converter um número para uma string"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a função do método 'toLowerCase()' em JavaScript?",
        respostas: [
            "Converter uma string para minúsculas",
            "Converter uma string para maiúsculas",
            "Converter uma string para um array",
            "Converter um número para uma string"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'charAt()' em JavaScript?",
        respostas: [
            "Retornar o caractere em um índice especificado em uma string",
            "Retornar uma parte da string entre os índices inicial e final",
            "Converter uma string para maiúsculas",
            "Converter uma string para minúsculas"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'includes()' em JavaScript?",
        respostas: [
            "Verificar se um array inclui um determinado elemento",
            "Verificar se uma string inclui outra string",
            "Verificar se um objeto inclui uma determinada propriedade",
            "Verificar se um número está dentro de um intervalo específico"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.abs()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número"
        ],
        correta: 3,
    },
    {
        pergunta: "Qual é a função do método 'Math.pow()' em JavaScript?",
        respostas: [
            "Retornar o valor absoluto de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.floor()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar um número aleatório entre 0 e 1"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.ceil()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar um número aleatório entre 0 e 1"
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.round()' em JavaScript?",
        respostas: [
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar um número aleatório entre 0 e 1"
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é a função do método 'Math.random()' em JavaScript?",
        respostas: [
            "Retornar um número aleatório entre 0 e 1",
            "Arredondar um número para o inteiro mais próximo",
            "Retornar o valor absoluto de um número",
            "Verificar se um número é NaN (não é um número)"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.sqrt()' em JavaScript?",
        respostas: [
            "Calcular a raiz quadrada de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.sin()' em JavaScript?",
        respostas: [
            "Calcular o seno de um ângulo em radianos",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.cos()' em JavaScript?",
        respostas: [
            "Calcular o cosseno de um ângulo em radianos",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.tan()' em JavaScript?",
        respostas: [
            "Calcular a tangente de um ângulo em radianos",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função do método 'Math.log()' em JavaScript?",
        respostas: [
            "Calcular o logaritmo natural de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a finalidade do método 'Math.exp()' em JavaScript?",
        respostas: [
            "Calcular o exponencial de um número",
            "Calcular a potência de um número",
            "Arredondar um número para baixo para o inteiro mais próximo",
            "Arredondar um número para cima para o inteiro mais próximo"
        ],
        correta: 0,
    },
    // Adicione mais perguntas aqui...
];


export default { perguntas };