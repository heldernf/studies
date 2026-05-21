programa
{
	
	funcao inicio()
	{
		inteiro ig[8], contador, somador=0, media, m25[8], quant = 0, maior = 0, m = 0

		para (contador=0; contador<8; contador++) {
			escreva("Qual a sua idade: ")
			leia(ig[contador])
			somador += ig[contador]
			se (ig[contador]>25) {
				m25[quant] = contador
				quant++
			}

			se (contador == 0) {
				maior = ig[contador]
				m = contador
			} senao {
				se (ig[contador] > maior) {
					maior = ig[contador]
					m = contador
				}
			}
		}
		media = somador / contador

		escreva("\nAs idade digitadas foram: ")

		para (contador=0; contador<8; contador++) {
			escreva("(|" + contador + "| " + ig[contador] + ") ")
		}

		escreva("\nEm ordem decrescente fica: ")

		para (contador=7; contador>-1; contador--) {
			escreva("(|" + contador + "| " + ig[contador] + ") ")
		}

		escreva("\nA média foi: " + media + ".")

		escreva("\nExistem pessoas com mais de 25 anos de idade nas seguintes posições " )
		para (contador=0; contador<quant; contador++) {
			escreva("(|" + m25[contador] + "|) ")
		}

		escreva("\nA maior idade digitada foi: " + maior + ".")
		escreva("\nO maior número esta no índece |" + m + "|.") 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 113; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */