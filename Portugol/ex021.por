programa
{
	
	funcao inicio()
	{
		real dtrabalhado, d_for_h, h_div_8, vreceber
		escreva("Informe-me quantos dias você trabalhou para que eu lhe informe o valor que você irá receber: ")
		leia(dtrabalhado)
		d_for_h = dtrabalhado * 24
		h_div_8 = d_for_h / 8
		vreceber = h_div_8 * 25
		escreva("Você trabalhou (" + dtrabalhado + ") dias, convertendo para horas, da um total de (" + d_for_h + ") horas, sabendo que cada 8 horas de trabalho equivale a R$ 25,00, dividimos 8 por suas horas trabalhada, que deu o seguinte resultado (" + h_div_8 + "), com isso, multiplicanos este valor, por 25, que é o total de dinheiro que equivale 8 horas trabalhada, então fazendo todo o calculo, podemos lhe informar de que você irá receber (R$ " + vreceber + ").")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 753; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */