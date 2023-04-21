programa
{
	
	funcao inteiro SuperSomador(inteiro p1, inteiro p2) {
		inteiro somador = 0, cont

		para (cont = p1; cont <= p2; cont++) {
			somador += cont
		}
		
		retorne somador
	}
	
	funcao inicio()
	{
		inteiro p1, p2

		escreva("Digite o primeiro parâmetro: ")
		leia(p1)
		escreva("Digite o segundo parâmetro: ")
		leia(p2)
		escreva("A soma entre os números que estão entre o intervalo de [" + p1 + "] e [" + p2 + "], resultou em [" + SuperSomador(p1, p2) + "].")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 474; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */