// (1) OPERADORES ARITIMÉTICOS (MATEMÁTICA) [+ - * /]
// (2) OPERADORES DE ATRIBUIÇÃO [= ++ -- += -= *= /=]
// (3) OPERADORES DE SEQUÊNCIA [+]
// (4) OPERADORES DE COMPARAÇÃO [== === != !== < > <= >=]
// (5) OPERADORES CONDICIONAL (TERNÁRIO) [? :]
// (6) OPERADORES LÓGICOS [&& || !]

var idade, eleitor, resultado;
idade = 18;
eleitor = (idade > 18) ? "Eleitor" : "Não eleitor";

resultado = (idade > 60 && idade < 70);

alert("Resposta: " + eleitor + ", pois a idade dele(a) é " + idade + ". " + resultado);