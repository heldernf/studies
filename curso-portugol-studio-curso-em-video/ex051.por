programa
{
	
	funcao inicio()
	{
		inteiro cont = 1, vprod, maior = 0, menor = 0
		enquanto (cont <= 4) {
			escreva("\n" + cont + " - Digite o valor do produto: R$")
			leia(vprod)
			se (cont == 1) {
				maior = vprod
				menor = vprod
			} senao {
				se (vprod > maior) {
					maior = vprod
				} senao se (vprod < menor) {
					menor = vprod	
				}	 
			}
			cont ++
		}
		escreva("\nO maior preço digitado foi R$" + maior + ", e o menor foi R$" + menor + ".")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 360; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {maior, 6, 27, 5}-{menor, 6, 38, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */