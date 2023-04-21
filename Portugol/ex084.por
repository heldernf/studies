programa
{
	
	funcao inicio()
	{
		inteiro vidade[9], contador, contador2 = 0
		cadeia vnome[9]

		para (contador = 0; contador < 9; contador++) {
			contador2++
			escreva(contador2 + " - Digite seu nome: ")
			leia(vnome[contador])
			escreva(contador2 + " - Digite sua idade: ")
			leia(vidade[contador])
			escreva("\n")
		}

		escreva("\n===========TABELA===========")

		para (contador = 0; contador < 9; contador++) {
			escreva("\n" + vnome[contador] + "\t\t\t" + vidade[contador])
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 414; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */