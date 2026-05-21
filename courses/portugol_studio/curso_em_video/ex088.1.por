programa
{
	
	funcao vazio gerador(cadeia frase, inteiro vezes) {
		para (inteiro cont = 1; cont <= vezes; cont++) {
			escreva("(" + cont + ") +-------=======------+\n    " + frase + "\n    +-------=======------+\n\n")
		}		
	}
	
	funcao inicio()
	{
		cadeia frase
		inteiro vezes
		escreva("Digite o que a sua mensagem: ")
		leia(frase)
		escreva("Quantas vezes? ")
		leia(vezes)
		gerador(frase, vezes)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 170; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */