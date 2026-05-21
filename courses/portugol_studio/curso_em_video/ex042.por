programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro valor, valor2 = 1
		escreva("Digite um valor e eu contarei até chegar nele: ")
		leia(valor)
		se (valor > 1) {
			enquanto (valor2 <= valor) {
				u.aguarde(500)
				escreva(valor2 + " ")
				valor2 ++
			}
			u.aguarde(500)
			escreva("Acabou!")	
		} senao {
			escreva("Por um acaso seu Q.I é 100 negativo!?")
		}		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 287; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */