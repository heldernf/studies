programa
{
	inclua biblioteca Util --> u
	funcao inicio()
	{
		inteiro cont = 1, sort, ac5 = 0, div3 = 0, soma = 0
		enquanto (cont <= 5) {
			sort = u.sorteia(0, 10)
			escreva(cont + " - O numero sorteado foi: " + sort + "\n")
			se (sort > 5 e sort % 3 != 0) {
				ac5 ++
			} senao se (sort > 5 e sort % 3 ==0) {				
				ac5 ++
				div3 ++
			} senao se (sort % 3 == 0 e sort != 0) {
				div3 ++
			}
			cont ++
		}
		escreva("Tivemos um total de " + ac5 + " números acima de 5 e " + div3 + " numeros divisíveis por 3")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 389; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */