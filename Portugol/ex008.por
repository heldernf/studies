programa
{
	
	funcao inicio()
	{
		real distancia, km, hm, dam, dm, cm, mm
		escreva("Digite uma distância em metros: ")
		leia(distancia)
		km = distancia / 1000
		hm = distancia / 100
		dam = distancia / 10
		dm = distancia * 10
		cm = distancia * 100
		mm = distancia * 1000
		escreva("A distancia que você digitou (" + distancia + ") convertida para outras medidas, corresponde a: (" + km + ")km (" + hm + ")hm (" + dam + ")dam (" + dm + ")dm (" + cm + ")cm (" + mm + ")mm")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 483; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */