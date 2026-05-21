programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro nsorteado, jogada
		nsorteado = u.sorteia(1, 3)
		escreva("Digite o número de acorodo com o que deseja escolher, 1-Pedra, 2-Papel ou 3-Tesoura? ")
		leia(jogada)
		se (nsorteado == 1 e jogada == 1) {
			escreva("EMPATE, você escolheu a opção " + jogada + " e o computador a opção " + nsorteado + ".")
		} senao se (nsorteado == 1 e jogada == 2) {
			escreva("VOCÊ VENCEU, o computador escolheu " + nsorteado)
		} senao se (nsorteado == 1 e jogada == 3) {
			escreva("O COMPUTADOR VENCEU, o computador escolheu a opção " + nsorteado + ".")
		} senao se (nsorteado == 2 e jogada == 1) {
			escreva("O COMPUTADOR VENCEU, o computador escolheu a opção " + nsorteado + ".")
		} senao se (nsorteado == 2 e jogada == 2) {
			escreva("EMPATE, você escolheu a opção " + jogada + " e o computador a opção " + nsorteado + ".")
		} senao se (nsorteado == 2 e jogada == 3) {
			escreva("VOCÊ VENCEU, o computador escolheu a opção " + nsorteado + ".")
		} senao se (nsorteado == 3 e jogada == 1) {
			escreva("VOCÊ VENCEU, o computador escolheu a opção " + nsorteado + ".")
		} senao se (nsorteado == 3 e jogada == 2) {
			escreva("O COMPUTADOR VENCEU, o computador escolheu a opção " + nsorteado + ".")
		} senao se (nsorteado == 3 e jogada == 3) {
			escreva("EMPATE, você escolheu a opção " + jogada + " e o computador a opção " + nsorteado + ".")
		} senao {
			escreva("[ERRO] O valor digitado não está de acordo com a opções disponíveis, digite 1 para Pedra, 2 para Papel e 3 para Tesoura")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1512; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */