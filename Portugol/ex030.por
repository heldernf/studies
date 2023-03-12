programa
{
	
	funcao inicio()
	{
		real med1, med2, med3, calc, calc2, calc3
		escreva("Teste se é possivel formar um triângulo, diga a media 1: ")
		leia(med1)
		escreva("Diga a medida 2: ")
		leia(med2)
		escreva("Diga a medida 3: ")
		leia(med3)
		calc = med1 + med2
		calc2 = med2 + med3
		calc3 = med3 + med1
		se (calc > med3 e calc2 > med1 e calc3 > med2) {
			escreva("As medidas passadas podem SIM formar um TRIÂNGULO, pois a soma de qualquer um de um dos lados dele, a outro lado, É sempre \nmaior que o terceiro lado, tanto pro lado a, b ou c, ou seja, (a) + (b) tem que ser maior que (c), (b) + (c) tem que ser maior que (a) e (c) + (a) tem que ser maior que (b).\n")
			se (med1 == med2 e med1 == med3) {
			escreva("O triângulo é um triângulo EQUILÁTERO, porque todos os seu lados são iguais.")
			} senao se (med1 == med2 e med1 != med3 ou med1 == med3 e med1 != med2 ou med2 == med3) {
			escreva("O triângulo é um triângulo ISÓSCELES, porque ele possui dois lados iguais.")
			} senao se (med1 != med2 e med1 != med3) {
			escreva("O triângulo é um triângulo ESCALENO, porque todos os seus lados são diferentes.")
			}
		} senao {
			escreva("As medidas passadas NÃO podem formar um TRIÂNGULO, pois a soma de qualquer um de um dos lados dele, a outro lado, NÃO é \nmaior que o terceiro lado, tanto pro lado a, b ou c, ou seja, (a) + (b) tem que ser menor que (c), (b) + (c) tem que ser menor que (a) e (c) + (a) tem que ser menor que (b).\n")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 685; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */