programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro valori, valorf, passo
		escreva("Digite o valor INICIAL: ")
		leia(valori)
		escreva("Digite o valor FINAL: ")
		leia(valorf)
		escreva("Em quantos passos que a contagem aconcessa, 2 em 2, 3 em 3... : ")
		leia(passo)
		se (valori < valorf) {
			enquanto (valori <= valorf) {
				u.aguarde(200)
				escreva(valori + " ")
				valori += passo
			}
		} senao {
			escreva("Hmm, seu valor final é menor que o inicial, então vamos fazer uma contagem DECRESCENTE.\n")
			enquanto (valori >= valorf) {
				u.aguarde(200)
				escreva(valori + " ")
				valori -= passo
			}
		}
		u.aguarde(200)
		escreva("Acabou!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 659; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */