programa
{
	
	funcao inicio()
	{
		real cfumadod, anosf, anosf_d, mppcigarro, tfumado, mperdido, dperdido
		escreva("Quantos cigarros você fuma por dia? ")
		leia(cfumadod)
		escreva("A quantos anos você fuma cigarro? ")
		leia(anosf)
		anosf_d = anosf * 365
		mppcigarro = 10.0
		tfumado = cfumadod * anosf_d
		mperdido = tfumado * mppcigarro
		dperdido = mperdido / 1440
		escreva("Você fumou um total de (" + tfumado + ") cigarros, considerando que cada cigarro lhe tira (" + mppcigarro + ") minutos de vida, o total de cigarros que você fumou resulta em (" + mperdido + ") minutos fumando, e perdeu (" + dperdido + ") dias de vida!!")	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 595; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */