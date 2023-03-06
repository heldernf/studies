programa
{
	
	funcao inicio()
	{
		real valor, pdesconto
		escreva("Digite o valor do produto e direi qual o valor dele com base na nossa atual promoção de 5% de desconto! Iai, qual o valor do produto que você está interessado? ")
		leia(valor)
		pdesconto = valor - (valor * 5 / 100)
		escreva("De acordo com o valor fornecido (R$" + valor + "), este produto esta saindo a (R$" + pdesconto + "), com base na nossa atual promoção!")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 268; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */