
const perguntas = [
    // Questão 1
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
    // Questão 2
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
    // Questão 3
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
    // Questão 4
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
    // Questão 5
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
    // Questão 6
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
    // Questão 7
    {
        pergunta: "Qual é a finalidade do operador '%' em JavaScript?",
        respostas: [
            "Realiza a multiplicação de dois números",
            "Realiza a divisão de dois números",
            "Retorna o resto da divisão de dois números",
            "Retorna o quociente da divisão de dois números"
        ],
        correta: 2,
    },
    // Questão 8
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
    // Questão 9
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
    // Questão 10
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
    // Questão 11
    {
        pergunta: "Qual é a função do método 'slice()' em JavaScript?",
        respostas: [
            "Adiciona elementos em uma determinada posição de um array",
            "Remove elementos de um array",
            "Retorna uma cópia de parte de um array dentro de um novo array",
            "Corta um array em pedaços menores"
        ],
        correta: 2,
    },
    // Questão 12
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
    // Questão 13
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
    // Questão 14
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
    // Questão 15
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
    // Questão 16
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
    // Questão 17
    {
        pergunta: "Qual é a função do método 'concat()' em JavaScript?",
        respostas: [
            "Concatena dois ou mais arrays",
            "Cria uma cópia superficial de um array",
            "Converte um array para uma string",
            "Remove elementos duplicados de um array"
        ],
        correta: 0,
    },
    // Questão 18
    {
        pergunta: "Qual é a finalidade do método 'split()' em JavaScript?",
        respostas: [
            "Divide uma string em um array de substrings",
            "Junta os elementos de um array em uma string",
            "Remove o último elemento de um array",
            "Reverte a ordem dos elementos de um array"
        ],
        correta: 0,
    },
    // Questão 19
    {
        pergunta: "Qual é a função do método 'join()' em JavaScript?",
        respostas: [
            "Junta os elementos de um array em uma string",
            "Divide uma string em um array de substrings",
            "Remove o último elemento de um array",
            "Reverte a ordem dos elementos de um array"
        ],
        correta: 0,
    },
    // Questão 20
    {
        pergunta: "Qual é a finalidade do método 'reverse()' em JavaScript?",
        respostas: [
            "Reverte a ordem dos elementos de um array",
            "Junta os elementos de um array em uma string",
            "Divide uma string em um array de substrings",
            "Remove o último elemento de um array"
        ],
        correta: 0,
    },
    // Questão 21
    {
        pergunta: "Qual é a função do método 'find()' em JavaScript?",
        respostas: [
            "Retorna o primeiro elemento de um array que satisfaz a condição especificada",
            "Retorna o último elemento de um array que satisfaz a condição especificada",
            "Retorna o número de elementos em um array",
            "Verifica se todos os elementos de um array satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 22
    {
        pergunta: "Qual é a finalidade do método 'findIndex()' em JavaScript?",
        respostas: [
            "Retorna o índice do primeiro elemento de um array que satisfaz a condição especificada",
            "Retorna o índice do último elemento de um array que satisfaz a condição especificada",
            "Retorna o número de elementos em um array",
            "Verifica se todos os elementos de um array satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 23
    {
        pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
        respostas: [
            "Executa uma função para cada elemento de um array",
            "Retorna um novo array com os elementos que satisfazem a condição especificada",
            "Junta os elementos de um array em uma string",
            "Verifica se todos os elementos de um array satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 24
    {
        pergunta: "Qual é a finalidade do método 'filter()' em JavaScript?",
        respostas: [
            "Retorna um novo array com os elementos que satisfazem a condição especificada",
            "Executa uma função para cada elemento de um array",
            "Junta os elementos de um array em uma string",
            "Verifica se todos os elementos de um array satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 25
    {
        pergunta: "Qual é a função do método 'map()' em JavaScript?",
        respostas: [
            "Retorna um novo array com os resultados da aplicação de uma função a cada elemento de um array",
            "Executa uma função para cada elemento de um array",
            "Junta os elementos de um array em uma string",
            "Verifica se todos os elementos de um array satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 26
    {
        pergunta: "Qual é a finalidade do método 'reduce()' em JavaScript?",
        respostas: [
            "Executa uma função para cada elemento de um array",
            "Retorna um novo array com os elementos que satisfazem a condição especificada",
            "Aplica uma função a cada elemento de um array, resultando em um único valor",
            "Verifica se todos os elementos de um array satisfazem a condição especificada"
        ],
        correta: 2,
    },
    // Questão 27
    {
        pergunta: "Qual é a função do método 'some()' em JavaScript?",
        respostas: [
            "Verifica se pelo menos um elemento de um array satisfaz a condição especificada",
            "Verifica se todos os elementos de um array satisfazem a condição especificada",
            "Executa uma função para cada elemento de um array",
            "Retorna um novo array com os elementos que satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 28
    {
        pergunta: "Qual é a finalidade do método 'every()' em JavaScript?",
        respostas: [
            "Verifica se todos os elementos de um array satisfazem a condição especificada",
            "Verifica se pelo menos um elemento de um array satisfaz a condição especificada",
            "Executa uma função para cada elemento de um array",
            "Retorna um novo array com os elementos que satisfazem a condição especificada"
        ],
        correta: 0,
    },
    // Questão 29
    {
        pergunta: "Qual é a função do método 'sort()' em JavaScript?",
        respostas: [
            "Ordena os elementos de um array alfabeticamente",
            "Inverte a ordem dos elementos de um array",
            "Remove o último elemento de um array",
            "Substitui elementos de um array por outros elementos"
        ],
        correta: 0,
    },
    // Questão 30
    {
        pergunta: "Qual é a finalidade do método 'splice()' em JavaScript?",
        respostas: [
            "Remove, adiciona ou substitui elementos de um array",
            "Ordena os elementos de um array alfabeticamente",
            "Inverte a ordem dos elementos de um array",
            "Junta os elementos de um array em uma string"
        ],
        correta: 0,
    },
    // Questão 31
    {
        pergunta: "Qual é a função do método 'slice()' em JavaScript?",
        respostas: [
            "Adiciona elementos em uma determinada posição de um array",
            "Remove elementos de um array",
            "Retorna uma cópia de parte de um array dentro de um novo array",
            "Corta um array em pedaços menores"
        ],
        correta: 2,
    },
    // Questão 32
    {
        pergunta: "Qual é a finalidade do método 'includes()' em JavaScript?",
        respostas: [
            "Verifica se um array inclui um determinado valor",
            "Junta os elementos de um array em uma string",
            "Remove elementos duplicados de um array",
            "Inverte a ordem dos elementos de um array"
        ],
        correta: 0,
    },
    // Questão 33
    {
        pergunta: "Qual é a função do método 'isArray()' em JavaScript?",
        respostas: [
            "Verifica se um valor é um array",
            "Verifica se um valor é uma função",
            "Verifica se um valor é um objeto",
            "Verifica se um valor é uma string"
        ],
        correta: 0,
    },
    // Questão 34
    {
        pergunta: "Qual é a finalidade do método 'isNaN()' em JavaScript?",
        respostas: [
            "Verifica se um valor é um número",
            "Verifica se um valor é nulo",
            "Verifica se um valor é indefinido",
            "Verifica se um valor não é um número"
        ],
        correta: 3,
    },
    // Questão 35
    {
        pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
        respostas: [
            "Formata um número com um número específico de casas decimais",
            "Arredonda um número para o inteiro mais próximo",
            "Retorna o maior inteiro menor ou igual a um número",
            "Retorna o menor inteiro maior ou igual a um número"
        ],
        correta: 0,
    },
    // Questão 36
    {
        pergunta: "Qual é a finalidade do método 'toPrecision()' em JavaScript?",
        respostas: [
            "Formata um número com um número específico de casas decimais",
            "Retorna o valor absoluto de um número",
            "Retorna a representação de string de um objeto",
            "Retorna a precisão de um número em notação exponencial"
        ],
        correta: 3,
    },
    // Questão 37
    {
        pergunta: "Qual é a função do método 'toExponential()' em JavaScript?",
        respostas: [
            "Formata um número com um número específico de casas decimais",
            "Retorna o valor absoluto de um número",
            "Retorna a representação de string de um objeto",
            "Retorna a precisão de um número em notação exponencial"
        ],
        correta: 3,
    },
    // Questão 38
    {
        pergunta: "Qual é a finalidade do método 'toPrecision()' em JavaScript?",
        respostas: [
            "Formata um número com um número específico de casas decimais",
            "Retorna o valor absoluto de um número",
            "Retorna a representação de string de um objeto",
            "Retorna a precisão de um número em notação exponencial"
        ],
        correta: 3,
    },
    // Questão 39
    {
        pergunta: "Qual é a função do método 'toLocaleString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de um objeto",
            "Retorna a representação de string de um número de acordo com o idioma e as opções especificadas",
            "Formata um número com um número específico de casas decimais",
            "Retorna o valor absoluto de um número"
        ],
        correta: 1,
    },
    // Questão 40
    {
        pergunta: "Qual é a finalidade do método 'toString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de um objeto",
            "Retorna a representação de string de um número de acordo com o idioma e as opções especificadas",
            "Formata um número com um número específico de casas decimais",
            "Retorna o valor absoluto de um número"
        ],
        correta: 0,
    },
    // Questão 41
    {
        pergunta: "Qual é a função do método 'toTimeString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna a representação de string de um número",
            "Retorna a representação de string de um objeto"
        ],
        correta: 1,
    },
    // Questão 42
    {
        pergunta: "Qual é a finalidade do método 'toUTCString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data e hora em UTC",
            "Retorna a representação de string de uma data e hora em um fuso horário específico",
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora"
        ],
        correta: 0,
    },
    // Questão 43
    {
        pergunta: "Qual é a função do método 'getTime()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna o número de milissegundos desde 1º de janeiro de 1970",
            "Retorna o número de segundos desde 1º de janeiro de 1970"
        ],
        correta: 2,
    },
    // Questão 44
    {
        pergunta: "Qual é a finalidade do método 'setTime()' em JavaScript?",
        respostas: [
            "Define uma data em milissegundos desde 1º de janeiro de 1970",
            "Define uma hora em milissegundos desde 1º de janeiro de 1970",
            "Define uma data em segundos desde 1º de janeiro de 1970",
            "Define uma hora em segundos desde 1º de janeiro de 1970"
        ],
        correta: 0,
    },
    // Questão 45
    {
        pergunta: "Qual é a função do método 'setFullYear()' em JavaScript?",
        respostas: [
            "Define o ano de uma data",
            "Define o mês de uma data",
            "Define o dia de uma data",
            "Define a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 46
    {
        pergunta: "Qual é a finalidade do método 'setMonth()' em JavaScript?",
        respostas: [
            "Define o mês de uma data",
            "Define o ano de uma data",
            "Define o dia de uma data",
            "Define a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 47
    {
        pergunta: "Qual é a função do método 'setDate()' em JavaScript?",
        respostas: [
            "Define o dia de uma data",
            "Define o ano de uma data",
            "Define o mês de uma data",
            "Define a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 48
    {
        pergunta: "Qual é a finalidade do método 'setHours()' em JavaScript?",
        respostas: [
            "Define a hora de uma data",
            "Define o ano de uma data",
            "Define o mês de uma data",
            "Define o dia de uma data"
        ],
        correta: 0,
    },
    // Questão 49
    {
        pergunta: "Qual é a função do método 'setMinutes()' em JavaScript?",
        respostas: [
            "Define os minutos de uma data",
            "Define os segundos de uma data",
            "Define os milissegundos de uma data",
            "Define a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 50
    {
        pergunta: "Qual é a finalidade do método 'setSeconds()' em JavaScript?",
        respostas: [
            "Define os segundos de uma data",
            "Define os minutos de uma data",
            "Define os milissegundos de uma data",
            "Define a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 51
    {
        pergunta: "Qual é a função do método 'setMilliseconds()' em JavaScript?",
        respostas: [
            "Define os milissegundos de uma data",
            "Define os segundos de uma data",
            "Define os minutos de uma data",
            "Define a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 52
    {
        pergunta: "Qual é a finalidade do método 'toLocaleDateString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna a representação de string de uma data de acordo com o idioma e as opções especificadas",
            "Retorna a representação de string de uma data e hora de acordo com o idioma e as opções especificadas"
        ],
        correta: 2,
    },
    // Questão 53
    {
        pergunta: "Qual é a função do método 'toLocaleTimeString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna a representação de string de uma data de acordo com o idioma e as opções especificadas",
            "Retorna a representação de string de uma data e hora de acordo com o idioma e as opções especificadas"
        ],
        correta: 3,
    },
    // Questão 54
    {
        pergunta: "Qual é a finalidade do método 'toDateString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna a representação de string de uma data de acordo com o idioma e as opções especificadas",
            "Retorna a representação de string de uma data e hora de acordo com o idioma e as opções especificadas"
        ],
        correta: 0,
    },
    // Questão 55
    {
        pergunta: "Qual é a função do método 'toTimeString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna a representação de string de uma data de acordo com o idioma e as opções especificadas",
            "Retorna a representação de string de uma data e hora de acordo com o idioma e as opções especificadas"
        ],
        correta: 1,
    },
    // Questão 56
    {
        pergunta: "Qual é a finalidade do método 'toUTCString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data e hora em UTC",
            "Retorna a representação de string de uma data e hora em um fuso horário específico",
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora"
        ],
        correta: 0,
    },
    // Questão 57
    {
        pergunta: "Qual é a função do método 'now()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data e hora atual",
            "Retorna o número de milissegundos desde 1º de janeiro de 1970",
            "Retorna o número de segundos desde 1º de janeiro de 1970",
            "Retorna a representação de string de uma data atual"
        ],
        correta: 1,
    },
    // Questão 58
    {
        pergunta: "Qual é a finalidade do método 'UTC()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data e hora em UTC",
            "Retorna a representação de string de uma data e hora em um fuso horário específico",
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora"
        ],
        correta: 0,
    },
    // Questão 59
    {
        pergunta: "Qual é a função do método 'toJSON()' em JavaScript?",
        respostas: [
            "Retorna uma string JSON representando o objeto",
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora",
            "Retorna a representação de string de uma data e hora"
        ],
        correta: 0,
    },
    // Questão 60
    {
        pergunta: "Qual é a finalidade do método 'toString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de um objeto",
            "Retorna uma string JSON representando o objeto",
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora"
        ],
        correta: 0,
    },
    // Questão 61
    {
        pergunta: "Qual é a função do método 'valueOf()' em JavaScript?",
        respostas: [
            "Retorna o valor primitivo de um objeto",
            "Retorna a representação de string de um objeto",
            "Retorna uma string JSON representando o objeto",
            "Retorna a representação de string de uma data"
        ],
        correta: 0,
    },
    // Questão 62
    {
        pergunta: "Qual é a finalidade do método 'toISOString()' em JavaScript?",
        respostas: [
            "Retorna a representação de string de uma data e hora em UTC",
            "Retorna a representação de string de uma data e hora em um fuso horário específico",
            "Retorna a representação de string de uma data",
            "Retorna a representação de string de uma hora"
        ],
        correta: 0,
    },
    // Questão 63
    {
        pergunta: "Qual é a função do método 'getYear()' em JavaScript?",
        respostas: [
            "Retorna o ano de uma data",
            "Retorna o ano menos 1900 de uma data",
            "Retorna o ano completo de uma data",
            "Retorna a representação de string de uma data"
        ],
        correta: 1,
    },
    // Questão 64
    {
        pergunta: "Qual é a finalidade do método 'getFullYear()' em JavaScript?",
        respostas: [
            "Retorna o ano completo de uma data",
            "Retorna o ano de uma data",
            "Retorna o ano menos 1900 de uma data",
            "Retorna a representação de string de uma data"
        ],
        correta: 0,
    },
    // Questão 65
    {
        pergunta: "Qual é a função do método 'getMonth()' em JavaScript?",
        respostas: [
            "Retorna o mês de uma data",
            "Retorna o ano de uma data",
            "Retorna o dia de uma data",
            "Retorna a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 66
    {
        pergunta: "Qual é a finalidade do método 'getDate()' em JavaScript?",
        respostas: [
            "Retorna o dia de uma data",
            "Retorna o mês de uma data",
            "Retorna o ano de uma data",
            "Retorna a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 67
    {
        pergunta: "Qual é a função do método 'getDay()' em JavaScript?",
        respostas: [
            "Retorna o dia da semana de uma data",
            "Retorna o dia de uma data",
            "Retorna o mês de uma data",
            "Retorna o ano de uma data"
        ],
        correta: 0,
    },
    // Questão 68
    {
        pergunta: "Qual é a finalidade do método 'getHours()' em JavaScript?",
        respostas: [
            "Retorna a hora de uma data",
            "Retorna o dia de uma data",
            "Retorna o mês de uma data",
            "Retorna o ano de uma data"
        ],
        correta: 0,
    },
    // Questão 69
    {
        pergunta: "Qual é a função do método 'getMinutes()' em JavaScript?",
        respostas: [
            "Retorna os minutos de uma data",
            "Retorna os segundos de uma data",
            "Retorna os milissegundos de uma data",
            "Retorna a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 70
    {
        pergunta: "Qual é a finalidade do método 'getSeconds()' em JavaScript?",
        respostas: [
            "Retorna os segundos de uma data",
            "Retorna os minutos de uma data",
            "Retorna os milissegundos de uma data",
            "Retorna a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 71
    {
        pergunta: "Qual é a função do método 'getMilliseconds()' em JavaScript?",
        respostas: [
            "Retorna os milissegundos de uma data",
            "Retorna os segundos de uma data",
            "Retorna os minutos de uma data",
            "Retorna a hora de uma data"
        ],
        correta: 0,
    },
    // Questão 72
    {
        pergunta: "Qual é a finalidade do método 'getTimezoneOffset()' em JavaScript?",
        respostas: [
            "Retorna o deslocamento de fuso horário em minutos para a hora atual em relação ao UTC",
            "Retorna o deslocamento de fuso horário em horas para a hora atual em relação ao UTC",
            "Retorna o deslocamento de fuso horário em minutos para uma data específica em relação ao UTC",
            "Retorna o deslocamento de fuso horário em horas para uma data específica em relação ao UTC"
        ],
        correta: 0,
    },
    // Questão 73
    {
        pergunta: "Qual é a função do método 'getUTCDate()' em JavaScript?",
        respostas: [
            "Retorna o dia de uma data em UTC",
            "Retorna o dia de uma data em um fuso horário específico",
            "Retorna o dia da semana de uma data",
            "Retorna o dia do mês de uma data"
        ],
        correta: 0,
    },
    // Questão 74
    {
        pergunta: "Qual é a finalidade do método 'getUTCDay()' em JavaScript?",
        respostas: [
            "Retorna o dia da semana de uma data em UTC",
            "Retorna o dia de uma data em UTC",
            "Retorna o dia de uma data em um fuso horário específico",
            "Retorna o dia do mês de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 75
    {
        pergunta: "Qual é a função do método 'getUTCMonth()' em JavaScript?",
        respostas: [
            "Retorna o mês de uma data em UTC",
            "Retorna o ano de uma data em UTC",
            "Retorna o dia de uma data em UTC",
            "Retorna o dia do mês de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 76
    {
        pergunta: "Qual é a finalidade do método 'getUTCFullYear()' em JavaScript?",
        respostas: [
            "Retorna o ano completo de uma data em UTC",
            "Retorna o ano de uma data em UTC",
            "Retorna o dia de uma data em UTC",
            "Retorna o mês de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 77
    {
        pergunta: "Qual é a função do método 'getUTCHours()' em JavaScript?",
        respostas: [
            "Retorna a hora de uma data em UTC",
            "Retorna o dia de uma data em UTC",
            "Retorna o mês de uma data em UTC",
            "Retorna o ano de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 78
    {
        pergunta: "Qual é a finalidade do método 'getUTCMinutes()' em JavaScript?",
        respostas: [
            "Retorna os minutos de uma data em UTC",
            "Retorna os segundos de uma data em UTC",
            "Retorna os milissegundos de uma data em UTC",
            "Retorna a hora de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 79
    {
        pergunta: "Qual é a função do método 'getUTCSeconds()' em JavaScript?",
        respostas: [
            "Retorna os segundos de uma data em UTC",
            "Retorna os minutos de uma data em UTC",
            "Retorna os milissegundos de uma data em UTC",
            "Retorna a hora de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 80
    {
        pergunta: "Qual é a finalidade do método 'getUTCMilliseconds()' em JavaScript?",
        respostas: [
            "Retorna os milissegundos de uma data em UTC",
            "Retorna os segundos de uma data em UTC",
            "Retorna os minutos de uma data em UTC",
            "Retorna a hora de uma data em UTC"
        ],
        correta: 0,
    },
    // Questão 81
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Analisa uma string e retorna um número inteiro na base especificada",
            "Analisa uma string e retorna um número de ponto flutuante",
            "Analisa uma string e retorna um número em notação exponencial",
            "Analisa uma string e retorna um número decimal"
        ],
        correta: 0,
    },
    // Questão 82
    {
        pergunta: "Qual é a finalidade do método 'parseFloat()' em JavaScript?",
        respostas: [
            "Analisa uma string e retorna um número de ponto flutuante",
            "Analisa uma string e retorna um número inteiro na base especificada",
            "Analisa uma string e retorna um número em notação exponencial",
            "Analisa uma string e retorna um número decimal"
        ],
        correta: 0,
    },
    // Questão 83
    {
        pergunta: "Qual é a função do método 'isNaN()' em JavaScript?",
        respostas: [
            "Verifica se um valor é um número",
            "Verifica se um valor é nulo",
            "Verifica se um valor é indefinido",
            "Verifica se um valor não é um número"
        ],
        correta: 3,
    },
    // Questão 84
    {
        pergunta: "Qual é a finalidade do método 'isFinite()' em JavaScript?",
        respostas: [
            "Verifica se um valor é nulo",
            "Verifica se um valor é indefinido",
            "Verifica se um valor é um número finito",
            "Verifica se um valor não é um número"
        ],
        correta: 2,
    },
    // Questão 85
    {
        pergunta: "Qual é a função do método 'eval()' em JavaScript?",
        respostas: [
            "Avalia uma string e a executa como código JavaScript",
            "Avalia uma expressão regular e retorna verdadeiro se a string contém a expressão regular",
            "Converte uma string em um número",
            "Converte uma string em um número inteiro"
        ],
        correta: 0,
    },
    // Questão 86
    {
        pergunta: "Qual é a finalidade do método 'encodeURI()' em JavaScript?",
        respostas: [
            "Codifica uma URI substituindo cada caractere que não é permitido por um, dois, três ou quatro sequências de escape",
            "Decodifica uma URI codificada",
            "Codifica uma URI codificada",
            "Decodifica uma URI substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 87
    {
        pergunta: "Qual é a função do método 'encodeURIComponent()' em JavaScript?",
        respostas: [
            "Codifica componentes de uma URI substituindo cada caractere que não é permitido por um, dois, três ou quatro sequências de escape",
            "Decodifica componentes de uma URI codificada",
            "Codifica componentes de uma URI codificada",
            "Decodifica componentes de uma URI substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 88
    {
        pergunta: "Qual é a finalidade do método 'decodeURI()' em JavaScript?",
        respostas: [
            "Decodifica uma URI codificada",
            "Codifica uma URI substituindo cada caractere que não é permitido por um, dois, três ou quatro sequências de escape",
            "Codifica uma URI codificada",
            "Decodifica uma URI substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 89
    {
        pergunta: "Qual é a função do método 'decodeURIComponent()' em JavaScript?",
        respostas: [
            "Decodifica componentes de uma URI codificada",
            "Codifica componentes de uma URI substituindo cada caractere que não é permitido por um, dois, três ou quatro sequências de escape",
            "Codifica componentes de uma URI codificada",
            "Decodifica componentes de uma URI substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 90
    {
        pergunta: "Qual é a finalidade do método 'escape()' em JavaScript?",
        respostas: [
            "Codifica uma string substituindo cada caractere que não é permitido por um, dois ou três sequências de escape",
            "Decodifica uma string codificada",
            "Codifica uma string codificada",
            "Decodifica uma string substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 91
    {
        pergunta: "Qual é a função do método 'unescape()' em JavaScript?",
        respostas: [
            "Decodifica uma string codificada",
            "Codifica uma string substituindo cada caractere que não é permitido por um, dois ou três sequências de escape",
            "Codifica uma string codificada",
            "Decodifica uma string substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 92
    {
        pergunta: "Qual é a finalidade do método 'encodeURIComponent()' em JavaScript?",
        respostas: [
            "Codifica componentes de uma URI substituindo cada caractere que não é permitido por um, dois, três ou quatro sequências de escape",
            "Decodifica componentes de uma URI codificada",
            "Codifica componentes de uma URI codificada",
            "Decodifica componentes de uma URI substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 93
    {
        pergunta: "Qual é a função do método 'encodeURI()' em JavaScript?",
        respostas: [
            "Codifica uma URI substituindo cada caractere que não é permitido por um, dois, três ou quatro sequências de escape",
            "Decodifica uma URI codificada",
            "Codifica uma URI codificada",
            "Decodifica uma URI substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
    // Questão 94
    {
        pergunta: "Qual é a finalidade do método 'eval()' em JavaScript?",
        respostas: [
            "Avalia uma string e a executa como código JavaScript",
            "Avalia uma expressão regular e retorna verdadeiro se a string contém a expressão regular",
            "Converte uma string em um número",
            "Converte uma string em um número inteiro"
        ],
        correta: 0,
    },
    // Questão 95
    {
        pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
        respostas: [
            "Analisa uma string e retorna um número inteiro na base especificada",
            "Analisa uma string e retorna um número de ponto flutuante",
            "Analisa uma string e retorna um número em notação exponencial",
            "Analisa uma string e retorna um número decimal"
        ],
        correta: 0,
    },
    // Questão 96
    {
        pergunta: "Qual é a finalidade do método 'parseFloat()' em JavaScript?",
        respostas: [
            "Analisa uma string e retorna um número de ponto flutuante",
            "Analisa uma string e retorna um número inteiro na base especificada",
            "Analisa uma string e retorna um número em notação exponencial",
            "Analisa uma string e retorna um número decimal"
        ],
        correta: 0,
    },
    // Questão 97
    {
        pergunta: "Qual é a função do método 'isNaN()' em JavaScript?",
        respostas: [
            "Verifica se um valor é um número",
            "Verifica se um valor é nulo",
            "Verifica se um valor é indefinido",
            "Verifica se um valor não é um número"
        ],
        correta: 3,
    },
    // Questão 98
    {
        pergunta: "Qual é a finalidade do método 'isFinite()' em JavaScript?",
        respostas: [
            "Verifica se um valor é nulo",
            "Verifica se um valor é indefinido",
            "Verifica se um valor é um número finito",
            "Verifica se um valor não é um número"
        ],
        correta: 2,
    },
    // Questão 99
    {
        pergunta: "Qual é a função do método 'eval()' em JavaScript?",
        respostas: [
            "Avalia uma string e a executa como código JavaScript",
            "Avalia uma expressão regular e retorna verdadeiro se a string contém a expressão regular",
            "Converte uma string em um número",
            "Converte uma string em um número inteiro"
        ],
        correta: 0,
    },
    // Questão 100
    {
        pergunta: "Qual é a finalidade do método 'escape()' em JavaScript?",
        respostas: [
            "Codifica uma string substituindo cada caractere que não é permitido por um, dois ou três sequências de escape",
            "Decodifica uma string codificada",
            "Codifica uma string codificada",
            "Decodifica uma string substituindo cada sequência de escape por seus caracteres originais"
        ],
        correta: 0,
    },
];

export default { perguntas };


const encontrarDuplicatas = () => {
    const indicesDuplicados = [];
    perguntas.forEach((pergunta, indice) => {
        const indiceDuplicado = perguntas.findIndex((item, index) => (
            index !== indice && item.pergunta === pergunta.pergunta
        ));
        if (indiceDuplicado !== -1 && !indicesDuplicados.includes(indice) && !indicesDuplicados.includes(indiceDuplicado)) {
            indicesDuplicados.push(indice, indiceDuplicado);
        }
    });
    return indicesDuplicados;
};

const indicesDuplicados = encontrarDuplicatas();

console.log("Índices das questões duplicadas:");
console.log(indicesDuplicados);