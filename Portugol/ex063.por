programa
{
	inclua biblioteca Texto --> txt
	funcao inicio()
	{
		inteiro numero, cont = 0, somatorio = 0, menor = 0, media, t_par = 0
		cadeia continuar = "sim"
		faca {
			cont ++
			escreva(cont + " - Digite um núemero: ")
			leia(numero)
			somatorio += numero
			se (cont == 1) {
				menor = numero
			} senao {
				se (numero < menor) {
					menor = numero
				}
			}
			se (numero % 2 == 0) {
				t_par ++
			}
			escreva("Ainda quer continuar? [SIM/NÃO] ")
			leia(continuar)
		} enquanto (txt.caixa_baixa(continuar) == "sim")
		media = somatorio / cont
		escreva("----------------------------------------")
		escreva("\nO somatório entre os números, resulta em " + somatorio + " .")
		escreva("\nO menor número digitado foi " + menor + " .")
		escreva("\nA media é " + media + ".")
		escreva("\n" + t_par + " números são pares.")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 843; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */