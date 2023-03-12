programa
{
	
	funcao inicio()
	{
		real km, dia, pagar, pkm, pdia, pkm2, pdia2
		escreva("Quantos Km's você rodou com o carro? ")
		leia(km)
		escreva("Por quantos dias você alugou o carro? ")
		leia(dia)
		pkm = 0.90
		pkm2 = km * pkm
		pdia = 90.0
		pdia2 = dia * pdia
		pagar = km * pkm + dia * pdia
		escreva("Você ficou com o carro alugado durante (" + dia + ")dias, o valor cobrado por dia alugado é de (R$ " + pdia + "), logo você terá que pagar (R$ " + pdia2 + "), pela quantidade de dias que você rodou com o carro. Somaremos isso a quantidade de Km que você andou com o carro, (" + km + "Km), o valor por Km roda é de (R$ " + pkm + "), então você terá que pagar (R$ " + pkm2 + ") pelos Km's rodado. Fazendo o calculo final, você terá de pagar um total de (R$ " + pagar + ").")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 222; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */