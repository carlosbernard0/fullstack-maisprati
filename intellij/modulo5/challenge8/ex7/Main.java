package modulo5.challenge8.ex7;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite o valor do produto");
        int valor = input.nextInt();

        System.out.println("""
                1- Pix
                2- Cartao de Credito
                3- Boleto
                """);
        int opcao = input.nextInt();

        switch (opcao){
            case 1:
                Pix pix = new Pix();
                pix.processarPagamento(valor);
                pix.validarPagamento();
            case 2:
                CartaoCredito cartaoCredito = new CartaoCredito();
                cartaoCredito.processarPagamento(valor);
                cartaoCredito.validarPagamento();
            case 3:
                Boleto boleto = new Boleto();
                boleto.processarPagamento(valor);
                boleto.validarPagamento();

        }
    }
}
