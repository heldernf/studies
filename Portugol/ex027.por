programa
{
	
	funcao inicio()
	{
		real nota1, nota2, media
		escreva("Digite sua nota 1: ")
		leia(nota1)
		escreva("Digite sua nota 2: ")
		leia(nota2)
		media = (nota1 + nota2) / 2
		se (media <= 4.999) {
			escreva("Sua media foi (" + media + "), você foi REPROVADO!")
		} senao se (media <= 6.999) {
			escreva("Sua media foi (" + media + "), você está de RECUPERAÇÃO!")
		} senao se (media <= 10) {
			escreva("Sua media foi (" + media + "), você foi APROVADO!")
		} senao {
			escreva("De acordo com as NOTA 1 e NOTA 2 fornecida por você, a MÉDIA das duas resultou em uma MÉDIA maior que 10.0, logo os valor que foram digitado não estão corretos, pois a media das duas nota que você digitou, resultou em (" + media + ").")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 745; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */