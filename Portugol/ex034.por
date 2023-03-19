programa
{
	
	funcao inicio()
	{
		real peso, altura, imc
		escreva("Qual o seu peso? ")
		leia(peso)
		escreva("Qual a sua altura? ")
		leia(altura)
		imc = peso / (altura * altura)
		se (imc <= 18.5) {
			escreva("Você está abaixo do peso! Seu IMC resultou em " + imc + ".")
		} senao se (imc <= 25) {
			escreva("Seu peso está ideal, parabens. Seu IMC resulto em " + imc + ".")
		} senao se (imc <= 30) {
			escreva("Você esta sobrepeso. Seu IMC resultou em " + imc + ".")
		} senao se (imc <= 40) {
			escreva("Você está OBESO, tente fazer uma dieta. Seu IMC resultou em " + imc + ".")
		} senao {
			escreva("Obesidade Mórbida, tente perder gordura, procure um profissional no assunto (Nutricionista). Seu IMC resultou em " + imc + ".")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 757; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */