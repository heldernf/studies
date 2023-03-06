programa
{
	
	funcao inicio()
	{
		cadeia nome 
		real nota1, nota2, media
		escreva("Qual o seu nome? ")
		leia(nome)
		escreva("Qual a sua nota 1? ")
		leia(nota1)
		escreva("Qual a sua nota 2? ")
		leia(nota2)
		media = (nota1 + nota2) / 2
		se (media >= 7.0) {
			escreva("Parabéns " + nome + ", você teve um bom aproveitamento, sua media foi (" + media + ").")
		} senao {
			escreva(nome + ", infelizmente você não teve um bom aproveitamento, preste mais atenção durante as aulas e estude mais, sua media foi (" + media + ").")			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 411; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */