programa
{
	
	funcao inteiro Potencia(inteiro base, inteiro expoente) {
		inteiro res = 0, cont = 1, calc = 0

		se(expoente < 3) {
			base *= base
			res = base
		} senao {
			calc = base * base
			para (cont = 2; cont < expoente; cont++) {
				calc = calc * base
			}
		}

		retorne calc
	}
	
	funcao inicio()
	{
		inteiro base, expoente

		escreva("Qual a base? ")
		leia(base)
		escreva("Qaul o expoente? ")
		leia(expoente)

		escreva("O resultado da exponenciação é [" + Potencia(base,expoente) + "].")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 112; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */