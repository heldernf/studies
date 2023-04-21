programa
{
	
	funcao inicio()
	{
		inteiro contador, acimade6 = 0, imaiornota = 0
		real nota[10], maiornota = 0.0, media, somador = 0.0
		cadeia nome[10]

		para (contador = 0; contador < 10; contador++) {
			escreva("Qual o seu nome? ")
			leia(nome[contador])
			escreva("Qual a sua nota? ")
			leia(nota[contador])
			somador += nota[contador]

			se (nota[contador] >= 6.0) {
				acimade6++
			}

			se (contador == 0) {
				maiornota = nota[contador]
			} senao {
				se (nota[contador] > maiornota) {
					maiornota = nota[contador]
					imaiornota = contador
				}
			}
		}
		
		media = somador / contador
		
		escreva("\nA média foi: " + media)
		
		se (acimade6 == 0) {
			escreva("\nNenhum aluno está acima da média")
		} senao se (acimade6 == 1) {
			escreva("\n" + acimade6 + " pessoa está acima da média 6.0.")
		} senao {
			escreva("\n" + acimade6 + " pessoas estão acima da média 6.0.")
		}

		escreva("\nA maior nota foi: " + maiornota)
		escreva("\nA maior nota está no índice |" + imaiornota + "|.")

		escreva("\n===========TABELA===========")

		para (contador = 0; contador < 10; contador++) {
			escreva("\n" + nome[contador] + "\t\t\t" + nota[contador])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 196; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota, 7, 7, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */