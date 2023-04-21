programa
{
	
	funcao inicio()
	{
		real kmpcd
		inteiro alugado, d_alugado
		escreva("Qual tipo de carro você alugou, 1-POPULAR 2-LUXO? ")
		leia(alugado)
		escreva("Por quantos dias o carro foi alugado? ")
		leia(d_alugado)
		escreva("Quantos KM's você andou com o carro? ")
		leia(kmpcd)
		se (alugado == 1) {
			d_alugado = d_alugado * 90
			se (kmpcd <= 100) {
				kmpcd =  kmpcd * 0.20
				escreva("Você vai pagar R$90,00 por dia alugado, o valor por dia alugado resulto em R$" + d_alugado + ", por KM rodado você vai pagar R$0,20; de acordo com o que você rodou, você terá de pagar R$" + kmpcd + ".")
			} senao {
				kmpcd = kmpcd * 0.10
				escreva("Você vai pagar R$90,00 por dia alugado, o valor por dia alugado resulto em R$" + d_alugado + ", por KM rodado você vai pagar R$0,10; de acordo com o que você rodou, você terá de pagar R$" + kmpcd + ".")
			}
		} senao se (alugado == 2) {
			d_alugado = d_alugado * 150
			se (kmpcd <= 200) {
				kmpcd =  kmpcd * 0.30
				escreva("Você vai pagar R$150,00 por dia alugado, o valor por dia alugado resulto em R$" + d_alugado + ", por KM rodado você vai pagar R$0,30; de acordo com o que você rodou, você terá de pagar R$" + kmpcd + ".")
			} senao {
				kmpcd = kmpcd * 0.25
				escreva("Você vai pagar R$150,00 por dia alugado, o valor por dia alugado resulto em R$" + d_alugado + ", por KM rodado você vai pagar R$0,25; de acordo com o que você rodou, você terá de pagar R$" + kmpcd + ".")
			}
		} senao {
			escreva("[ERRO] Digite 1 para carros do tipo POPULAR e 2 para carros do tipo LUXO, o valor que você digitou não está de acordo com o que lhe pergutamos, você digitou " + alugado + ".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1668; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */