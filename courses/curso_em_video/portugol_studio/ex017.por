programa
{
	
	funcao inicio()
	{
		real velocidade, multa, dif
		escreva("Qual a velocidade do seu carro? ")
		leia(velocidade)
		se (velocidade > 80) {
			escreva("Você foi multado por execesso de velocidade!\n")
			dif = velocidade - 80
			multa = dif * 5
			escreva("Considerando que a multa é de (R$ 5,00) por Km acima da velocidade permitida (80Km/h, NESTA VIA), você está sendo multado em (R$ " + multa + "), pois você passou (" + dif + "Km/h) acima do permitido nesta via!") 
		} senao {
			escreva("Sua velocidade está abaixo de velocidade não permitida, parabéns!")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 590; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */