programa
{
	
	funcao inicio()
	{
		inteiro termo1, razao, somador = 0, res, somatermos = 0
		escreva("Digite o primeiro termo da PA(Progressão Aritmética): ")
		leia(termo1)
		escreva("Digite a razão da PA: ")
		leia(razao)
		para(inteiro cont = 1; cont <= 10; cont ++) {
			se (cont == 1) {
				somador += termo1 /*FIZ ISSO POIS O PRIMEIRO TERMO NÃO ESTAVA APARECENDO QUANDO EU PEDIA LA NO FINAL DO CODIGO PARA MOSTRAR A [PA]*/
				somatermos += somador
				escreva("PA: ")
			} senao {
				somador += razao
				somatermos += somador
			}
			escreva(somador + " ")
		}
		escreva("\nO somatório entre todos os números da PA é: " + somatermos + " ")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 544; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */